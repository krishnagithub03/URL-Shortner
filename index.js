const express = require('express');
require('dotenv').config();
const path = require('path');
const cookieParser = require("cookie-parser")
const {restrictToLoggedinUserOnly, checkAuth} = require('./middlewares/auth')
const app = express();
const URL = require('./models/url');
const PORT = 8000;

const urlRoute = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const userRoute = require('./routes/user')

const {connectToMongoDB} = require('./connection');
connectToMongoDB(process.env.MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));

app.use('/u',restrictToLoggedinUserOnly, urlRoute);
app.use('/user',userRoute);
app.use('/', checkAuth, staticRouter);
app.post('/logout', async(req, res) => {
  // Set the JWT cookie to expire immediately
  await res.cookie('uid', '', { expires: new Date(0), httpOnly: true, secure: true });
  res.json({ message: 'Logged out successfully' });
//   return res.redirect('login');
});
app.get('/u/:shortId',async (req,res) =>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
    {
        $push : {
            visitHistory : {timestamp : Date.now()},
        },
    });
    res.redirect(entry.originalUrl);
})


app.listen(PORT,()=>{console.log(`Server is running at port ${PORT}`)});
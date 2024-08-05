const shortid = require('shortid')
const URL = require('../models/url');
const handleCreateURL = async (req,res) =>{
    const body = req.body;
    if(!body.url) return res.status(400).error({error : "URL is required"});
    const shortID = shortid.generate();
    await URL.create({
        shortId: shortID,
        originalUrl: body.url,
        visitHistory: [],
        createdBy : req.user._id,
    });

    return res.render("home",{id: shortID});
}

const handleUrlAnalytics = async (req,res) =>{
    const shortId = req.params.id;
    const entry = await URL.findOne({shortId});

    if(!entry) return res.status(404).json({error : "URL not found"});

    return res.status(200).json({TotalClicks : entry.visitHistory.length, Analytics : entry.visitHistory});
}
module.exports = {
    handleCreateURL, 
    handleUrlAnalytics
}
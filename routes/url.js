const express = require('express');
const router = express.Router();

const { handleCreateURL, handleUrlAnalytics, handleDeleteUrl }  = require('../controllers/url')

router.route('/').post(handleCreateURL);

router.route("/:id").delete(handleDeleteUrl);



// router.route('/:id').get()

router.route('/analytics/:id').get(handleUrlAnalytics);

module.exports = router;
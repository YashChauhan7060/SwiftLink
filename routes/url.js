const { generateNewShortUrl, getAnalytics } = require("../controllers/url");

const express = require("express");

const router = express.Router();

router.post('/',generateNewShortUrl);
router.get('/analytics/:id',getAnalytics);

module.exports = router;
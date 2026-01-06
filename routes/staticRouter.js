const express = require('express');
const Url = require('../models/url');
const staticRouter = express.Router();



staticRouter.get('/',async(req,res) => {
    const urls = await Url.find({});
    return res.render("home",{urls});
});

module.exports = staticRouter ;
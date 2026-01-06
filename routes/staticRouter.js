const express = require('express');
const Url = require('../models/url');
const staticRouter = express.Router();



staticRouter.get('/',async(req,res) => {
    const allUrl = await Url.find({});
    return res.render("home",{allUrl});
});

module.exports = staticRouter ;
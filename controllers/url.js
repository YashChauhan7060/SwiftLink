const Url = require('../models/url');
const {nanoid} = require('nanoid');

async function generateNewShortUrl(req,res){
    try{
        const orgUrl = req.body.url;
        if(!orgUrl)
            return res.status(400).json({status:"error" , message:"url is required"});
        const shortUrl = nanoid(8);
        await Url.create({
            shortUrl:shortUrl,
            orginalUrl:orgUrl,
            timestamp:[]
        });
        return res.render("home",{
            id:shortUrl
        })
    } catch(err){
        return res.status(500).json({status:"error" , message:err.message});
    }
};

async function getAnalytics(req,res){
    try{
        const shortUrl = req.params.id;
        const entry = await Url.findOne({shortUrl});
        if(!entry)
            return res.status(404).json({status:"error" , message:"Short URL not found"});
        return res.status(200).json({
            totalClicks:entry.visitHistory.length,
            visitHistory:entry.visitHistory
        })
    } catch(err){
        return res.status(500).json({status:"error" , message:err.message});
    }
};

module.exports = { generateNewShortUrl , getAnalytics };
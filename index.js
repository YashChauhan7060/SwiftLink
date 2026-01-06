const express = require('express');
const urlRouter = require('./routes/url');
const connectDB = require('./connect');
const Url = require('./models/url');
const path = require('path');
const staticRouter = require('./routes/staticRouter');

const app = express();
const PORT = 8000;

connectDB("mongodb://127.0.0.1:27017/shortUrlDb");

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/url',urlRouter);
app.use('/',staticRouter);


app.get('/api/url/:id' , async (req,res) => {
    try{
        const shortUrl = req.params.id;
        const entry = await Url.findOneAndUpdate(
            { shortUrl },
            { $push: { visitHistory: { timestamp: Date.now() } } }
        )
        res.redirect(entry.orginalUrl);
    } catch(err){
        return res.status(500).json({status:"error" , message:err.message});
    }
});

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
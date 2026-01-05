const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortUrl:{
        type:String,
        requires:true,
        unique:true
    },
    orginalUrl:{
        type:String,
        required:true
    },
    visitHistory: [{
        timestamp: {
            type:Number
        }
    }]
},
 { timestamps: true }
);
const Url = mongoose.model('Url',urlSchema);

module.exports = Url;
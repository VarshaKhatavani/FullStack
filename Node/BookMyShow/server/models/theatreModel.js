const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const theatreSchema = new Schema({
    name:{
        type:String,
        required:true
    },    
    location:{
        type: { type: String },
        coordinates:[]
    },
     city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
     phone: {
        type: String,
        required: true
    },
    postalcode:{
        type:Number,
        required:true
    }
},{
    timestamps:true // This option adds createdAt and updatedAt fields
});

theatreSchema.index({location : '2dsphere'});

module.exports = mongoose.model("theatres", theatreSchema);


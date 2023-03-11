const mongoose =require('mongoose');

const dutyUserSchema =mongoose.Schema({
    callofdutyname:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model('Users',dutyUserSchema);
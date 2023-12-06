const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
});

const employeeCollection = new mongoose.model("employeeCollection",userSchema);

module.exports=employeeCollection;
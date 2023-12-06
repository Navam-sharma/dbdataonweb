const express=require('express')

const app=express();

const path=require('path');

const employeeCollection=require('./src/db/model/model')

const tempPath=path.join(__dirname,'views');

app.use(express.urlencoded({extended : false}));

app.set('view engine','ejs');

app.set('views',tempPath);

require('./src/db/config');

const port =3000;

app.get('/',(req,res)=>{
    res.render('signup');
})

const userDetails= employeeCollection.find({});
app.post('/homepage', async (req,res)=>{
    try{
    // const userkadata=req.body;
    // console.log(userkadata);
    const fname=req.body.fname;
    // console.log(fname);
    const lname=req.body.lname;
    const email=req.body.email;
//now pass these variables in mongodb colection and save in mongodb

const userData = new employeeCollection({
    fname:fname,
    lname:lname,
    email:email
});
await userData.save();

userDetails.exec(function(error,data){
    if(error){
        console.log(error);
    }
    res.render('home', {record : data});
    //ab me is record variable ko ejs home.ejs file me use kr skta hu
})
}catch(error){
    res.status(401).send(error)
}
})

app.listen(port,()=>{
    console.log(`listening to the port at ${port}`);
})

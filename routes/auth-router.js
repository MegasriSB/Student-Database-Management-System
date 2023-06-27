const router= require('express').Router();
const User=require('../models/User');
var bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

router.post('/signup',(req,res)=>{
    bcrypt.hash(req.body.password, 10,(err,hash)=>{
        if(err){
            return res.json({success:false, message:"Hash Error"})
        }
        else{
            const user = new User({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password
            })
            user.save()
            .then((_)=> {
                res.json({success:true, message: "Sign-up Successfull!"})
            })
            .catch((err)=>{
                if(err.code === 11000){
                    return res.json({success:false, message:"Email Already Exists"})
                }
                res.json({success:false, message:"Authentication Failed"})
            })
}})
});

router.post('/login',(req,res)=>{
 User.find({username:req.body.username}).exec().then((result)=>{
if(result.length < 1){
return res.json({success:false, message:"User Not Found"})
}
const user = result[0];
bcrypt.compare(req.body.password, user.password,(err,ret)=>{
    if(ret){
        const payload ={
            userId: user._id,
        }
        const token = jwt.sign(payload,"webBatch")
            return res.json({success:true,token:token, message:"Login Successful"})
    }else{
        return res.json({success:false, message:"Password Doesn't Match"})
    }
})
 })
 .catch(err =>{
    res.json({success:false,message:"Authentication Failed"})
 })
    })


router.get('/result',checkAuth,(req,res)=>{
    const userID= req.userData.userID;
User.findById(userID).exec().then((result)=>{
    res.json({success:true,data:result})
}).catch(err=>{
    res.json({success:false, message:"Server Error"})
})
})

module.exports = router

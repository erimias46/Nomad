import express from 'express'
import UserModel from '../Models/user.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const router = express.Router();


router.post("/register", async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = await UserModel.findOne({email})
    if (user) {
          res.json({ messgae: "User already exist" });
    }
    const hashed = await bcrypt.hash(password, 10)
    const newuser = new UserModel({
        email:email,
        password:hashed
    })
      await newuser.save();
      res.json({ message: "User Registered Succesfully" });
});

router.post('/login', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

     const user = await UserModel.findOne({email})
    if (!user) {
          res.json({ messgae: "The user doesnt exist" });
    }
  
    const ispasswordvalid = await bcrypt.compare(password, user.password)
    if (!ispasswordvalid) {
        res.json({message:"Incorrect password or email"})
    }

    const token = jwt.sign({ id: user._id }, 'secret')
    res.json({token,userID:user._id})
    
})


export { router as userRoute };
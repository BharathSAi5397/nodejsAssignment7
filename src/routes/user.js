const router = require('express').Router();
const MarioModel = require('../models/MarioChar');

//get request
router.get("/",async (req,res)=>{
    const user=await MarioModel.find();
    res.json({
        "status":"success",
        user
    })
})
router.get("/:id",async (req,res)=>{
    try{
        const id=req.params.id
        const user=await MarioModel.findById(id);
        res.json({
            "status":"success",
            "marioChar":user
        })
    }catch(e){
        res.status(400).json({
            "status":"Failed to fetch",
            "message":e.message
        })
    }
   
})

router.post("/",async (req,res)=>{
    try{
        const mariochar= await MarioModel.create({
            "name":req.body.name,
            "weight":req.body.weight
        });
        res.status(201).json({
            "status":"ok",
            "marioChar":mariochar
        })
    }catch(e){
        res.status(400).json({
            "status":"Failed to create",
            "message":e.message
        })
    }
   
})

//patching

router.patch("/:id",async (req,res)=>{
    try{
        const id=req.params.id;
        const datatoupdate=req.body;
        const user=await MarioModel.findByIdAndUpdate(id,datatoupdate,{
            runValidators:true,
            new:true
        })
        res.json({
            "status":"success",
            "mariochar":datatoupdate,
        })
    }catch(e){
        res.status(400).json({
            "status":"Failed to fetch",
            "message":e.message
        })
    }
   
})


//deleting
router.delete("/:id",async (req,res)=>{
    try{
        const id=req.params.id;
        const user=await MarioModel.findByIdAndDelete(id)
        res.status(200).json({
            "status":"success",
            "message":"character deleted"
        })
    }catch(e){
        res.status(400).json({
            "status":"Failed to fetch",
            "message":e.message
        })
    }
   
})



module.exports = router;
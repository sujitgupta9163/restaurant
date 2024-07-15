const express = require('express');
const router = express.Router();
const Person = require('./../models/Person')


router.post('/', async(req , res)=>{
  try{
    const data = req.body;

    const newPerson = new Person(data);
    const response= await newPerson.save();
    console.log("Data is Saved");
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error : `Internal sever error : `})
  }
  
})


router.get('/' ,async (req , res)=>{
  try{
    const data =await Person.find();
    console.log("Data Fetch : ");
    res.status(200).json(data);
  }
  catch(err){
      console.log(err);
      res.status(500).json({error : `Ineternal server error`})
  }
})


router.get('/:workType' , async(req , res)=>{
  try{
      const workType = req.params.workType;
      if(workType == "chef" || workType == "manager" || workType == "waiter"){
        const response = await Person.find({work : workType});
        console.log("Person Fetched : ");
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error : `Invalid work type`});
      }
  }
  catch(err){
    console.log(err);
    res.status(500).json({error : `Internal server Error : `});
  }
});

router.put('/:id' , async(req, res)=>{
  try{
    const presonId = req.params.id;
    const updatePeronData = req.body;
    const response = await Person.findByIdAndUpdate(presonId , updatePeronData ,{
      new : true,
      runValidators : true,
    });

    if(!response){
     return res.status(404).json({error : `Person Not Found`})
    }

    console.log("Data Updated");
    res.status(200).json(response);

  }
  catch(err){
    console.log(err);
    res.status(500).json({error : `Internal server error : `})
  }
});

router.delete('/:id' , async(req, res)=>{
  try{
    const presonId = req.params.id;
    const response = await Person.findByIdAndDelete(presonId);

    if(!response){
      return res.status(404).json({error : "Person Not Found : "})
    }
    console.log("Person Delete");
    res.status(200).json({response : "Person Delete Successfully "});
  }
  catch(err){
      console.log(err);
      res.status(500).json({error : `Internal Server error : `})
  }

})



module.exports = router;
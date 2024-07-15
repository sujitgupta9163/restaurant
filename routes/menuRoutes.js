const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/Menu')


router.post('/' , async(req , res)=>{
  try{
    const data = req.body;

    const newMenuIten = new MenuItem(data);
    const response = await newMenuIten.save();
    console.log("MenuItem Saved");
    res.status(200).json(response);

  }
  catch(err){
    console.log(err);
    res.status(200).json({error : `Internal server error`});
  }
})


router.get('/',async(req , res)=>{
try{
  const data = req.body;
  const response = await MenuItem.find();
  console.log("Data Fetch ");
  res.status(200).json(response);
}
catch(err){
  console.log(err);
  res.status(500).json({error : `Internal server Error : `});
}
})

router.get('/:taste' ,async(req, res )=>{
  try{
    const taste = req.params.taste;

    if(taste == "sweet" || taste == "sour" || "spicy"){
     const response = await MenuItem.find({taste:taste});
     console.log("Drink Fetched")
     res.status(200).json(response);
    }
    else{
        res.status(404).json({error : `Invalid Drink Type : `})
    }
  }
  catch(err){

  }
})

router.put('/:id' , async(req , res)=>{
  try{
      const menuId = req.params.id;
      const updateMenuId = req.body;
      const response = await MenuItem.findByIdAndUpdate(menuId , updateMenuId , {
        new : true,
        runValidators : true
      });

      if(!response){
        res.status(404).json({error : `Menu Not Found`})
      }
      console.log("Data Successfully Updated : ");
      res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error : `Internal Server error :`});
  }
})


router.delete('/:id' , async(req , res)=>{

  try{
    const menuId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(menuId);

    if(!response){
      res.status(404).json({error : `Menu Item Not Delete`});
    }
    console.log("Menu Successfully Delete");
    res.status(200).json(response);


  }
  catch(err){
    console.log(error);
    response.status(500).json({error : "Internal Server error : "})
  }

})


module.exports = router;
// const jsonString = '{"name" : "sujit" , "age" : 25 , "city" : "siwan bihar"}'
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);
// console.log(jsonObject.age);

// const objectToConvert ={
//   name : "sujit",
//   age : "25",

// }

// const json = JSON.stringify(objectToConvert);
// console.log(typeof json)


const express = require('express');
const db = require('./db');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// const Person = require('./models/Person')
// const MenuItem = require('./models/Menu')


// app.post('/person' , async (req , res)=>{
  
// try{
//   const data = req.body;

//    const newPerson = new Person(data);
//    const response= await newPerson.save();
//    console.log("Data saved");
//    res.status(200).json(response);
// }
// catch(err){
//   console.log(err);
//   res.status(500).json({error : `Internal server Error : `})
// }
  
// })




const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes)

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes)


app.listen(3000 , ()=>{
  console.log('server listening on port 3000')
});

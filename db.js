const mongooes = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/restaurant';

mongooes.connect(mongoURL , {

})


const db = mongooes.connection;

db.on('connected' , ()=>{
  console.log('Connected to MongoDB server')
})

db.on('error' , (err)=>{
  console.log('MongoDB connection error: ' , err)
});

db.on('disconnected', ()=>{
  console.log('MongoDB disconnected')
})

module.exports
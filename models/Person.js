const mongooes = require('mongoose');

const personScheme = new mongooes.Schema({
  name: {
    type : String,
    required : true
  },

  age : {
    type :  Number,
    required : true
  },

  work : {
    type: String,
    enum : ['chef' , 'waiter' , 'manager'],
    required : true
  },

  mobile : {
    type : String,
    required : true,
    unique : true,
  },

  email : {
    type : String,
    required : true,
    unique : true
  },

  address : {
    type : String,
  },

  salary : {
    type : String
  }

});

const Person = mongooes.model('Person' , personScheme);
module.exports = Person;
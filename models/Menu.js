const mongooes = require('mongoose');

const menuItemSchema = new mongooes.Schema({
  name: {
    type : String,
    require : true,
    unique : true,
  },
  price : {
    type : Number,
    require : true,
  },
  taste :{
      type :  String,
      enum : ['sweet' , 'spicy' , 'sour'],
      require : true,
  },

  is_drink: {
    type : Boolean,
    default : false,
  },
  
  ingerdients :{
    type : [String],
    default : []
  },

  num_sales :{
    type : Number,
    default : 0, 
  }

})

const MenuItem = mongooes.model('Menu' , menuItemSchema);
module.exports = MenuItem;
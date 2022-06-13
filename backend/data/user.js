import bcrypt from 'bcrypt'

const users =[
    { 
     name:'febin',
   email:"febinevijin@gmail.com",
   password: bcrypt.hashSync('123456',10),
  },
  { 
    name:'jherig',
  email:"xxx@gmail.com",
  password: bcrypt.hashSync('123456',10),
 },
 { 
    name:'jherig',
  email:"xxx@gmail.com",
  password: bcrypt.hashSync('123456',10),
 },
 { 
    name:'jherig',
  email:"xxx@gmail.com",
  password: bcrypt.hashSync('123456',10),
 },

  ]
  
  export default users
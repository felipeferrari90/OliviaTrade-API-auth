const server = require('../config/serverConfig')
const UserController = require('../controllers/userController')
const User = require('../models/user')
server.post('/signin', async(req,res)=>{
    const user = await UserController.login(req,res)
    if(user.error){
       res.send({error: user.error})
    }
    res.send(user)
})

server.post('/signup', async(req,res)=>{
   UserController.signup(req,res).then(
      (user) =>{
         res.send(user)
      }
   ).catch(
      (err)=>{res.send({error:err})}
   ) 
})

module.exports = server
const sign = require('jwt-encode')
const  {SHA256 }  = require('sha2')
const user = require('../models/user')
const User = require('../models/user')

class UserController{
    static async login(req,res){
        let inputUsermail = req.body.email
        let inputPassword = SHA256(SHA256(req.body.password, "hex")).toString('hex')
        let data = await User.findAll({
         where: {
           email : inputUsermail,
           password : inputPassword
           }
         }).then(
           (user) => {
            let jwt = sign({inputUsermail},'wordsecret')
            res.setHeader('Authorization', 'Bearer '+ jwt);
            return { user: user[0], token: jwt}
           }
         ).catch((err) => { return {error : 'erro: '+err}})
        return data
    }
    static async signup(req, res){
        let inputUserName = req.body.name
        let inputUsermail = req.body.email
        let inputPassword = SHA256(SHA256(req.body.password, "hex")).toString('hex')
        const user = await User.create({
           name : inputUserName ,
           email : inputUsermail,
           password : inputPassword
        }).then(
           (user) => { return {user:user}}
        ).catch(
           (err) => { return {error: err}}
        )
        return user
    }
}

module.exports = UserController
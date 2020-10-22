const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const dayjs = require('dayjs');

module.exports = {
    async model (req, res) {
        let user = req.body;
        let password = user.password
        
        //Encrypt password
        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(password, salt);

        //Save User
        const savedUser = await User.create(user);

        //Generate Token
        const tokenForUser = {
            id: savedUser.userId,
            email: savedUser.email
        }
        const secretKey = "--" + req.body.ip + "--"
        console.log(secretKey)

        let userToken = await generateToken(tokenForUser, secretKey);

        const response = await User.update(
            {token: userToken},
            {where: {userId: savedUser.userId}}
        );

        res.send(response);
    }
}

function generateToken(user, secretKey){
    return new Promise((resolve, reject) => {
        jwt.sign(user, secretKey, (err, token) => {
            if(err) reject(err);
            else resolve(token);
        })
    })
}

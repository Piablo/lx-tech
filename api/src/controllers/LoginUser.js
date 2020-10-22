const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const dayjs = require('dayjs');

module.exports = {
    async model (req, res) {
        let user = req.body;
        let password = user.password;

        //Auth User
        const loginUser = await User.findOne({
            where:{
                email: user.email
            }
        });

       if(await bcrypt.compare(user.password, loginUser.password)){
            //Generate Token
            const tokenForUser = {
                id: loginUser.userId,
                email: loginUser.email
            }
            const secretKey = "--" + req.body.ip + "--"
            console.log(secretKey)

            let userToken = await generateToken(tokenForUser, secretKey);

            const response = await User.update(
                {token: userToken},
                {where: {userId: loginUser.userId}}
            );

            let loggedinUser = {
                id: loginUser.userId,
                email: loginUser.email,
                status: 'Authenticated'
            }

            res.send(loggedinUser);
       }

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

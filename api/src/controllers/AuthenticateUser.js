const {User} = require('../models');
const globalFunctions = require('../services/globalFunctions');

module.exports = {
    async model (req, res) {
        const userId = req.body.userId;
        const ip = req.body.ip;

        const loginUser = await User.findOne({
            where:{
                userId: userId
            }
        });

        const secretKey = "--" + req.body.ip + "--";
        let token = loginUser.token;

        const authenticated = await globalFunctions.verifyToken(token, secretKey);

        if(authenticated){
            let user = {
                email: loginUser.email,
                userId: loginUser.userId
            }
            res.send(user)
        }

    }
}



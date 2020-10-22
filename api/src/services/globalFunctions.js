const jwt = require('jsonwebtoken');
const {User} = require('../models');


module.exports = {
    sanitizeSlidesForDB(slides){
        const listLength = slides.length;
        let returnArray = [];
    
        for(let i = 0; i < listLength; i++){
            let slide = {
                timing: JSON.stringify(slides[i].timing),
                parentId: slides[i].parentId
            }
            returnArray.push(slide);
        }
        return returnArray
    
    },

    sanitizeSlidesForClient(slides){
        const listLength = slides.length;
        let returnArray = [];
    
        for(let i = 0; i < listLength; i++){
            let slide = {
                id: slides[i].id,
                timing: JSON.parse(slides[i].timing),
                parentId: slides[i].parentId
            }
            returnArray.push(slide);
        }
        return returnArray
    },

    verifyToken(token, secretKey){
        return new Promise((resolve, reject) => {
            jwt.verify(token, secretKey, (err, user) => {
                if(err) reject(err);
                else resolve(true);
            })
        })
    },

    async authenticateUser(user){
        const userId = user.userId;
        const ip = user.ip;

        const loggedinUser = await User.findOne({
            where: {
                userId: userId
            }
        })

        const token = loggedinUser.token;
        const secretKey = "--" + ip + "--";

        const userVerified = this.verifyToken(token, secretKey);

        console.log(userVerified)
        return(userVerified);
    }
    
}
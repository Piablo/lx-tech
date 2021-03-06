const {Slide} = require('../models');
const globalFunctions = require('../services/globalFunctions.js');

module.exports = {
    async model (req, res) {
        
        const user = req.body.userDetails;
        const userAuthenticated = await globalFunctions.authenticateUser(user);

        if(userAuthenticated){
            console.log("GetSlides");
            const parentId = req.body.parentId;
    
            let allLessonSlides = await Slide.findAll({
                where: {
                    parentId: parentId
                }
            })
    
            let response = globalFunctions.sanitizeSlidesForClient(allLessonSlides);
            res.send(response);
        }
    }
}

const {Slide} = require('../models');
const globalFunctions = require('../services/globalFunctions');

module.exports = {
    async model (req, res) {

        const user = req.body.userDetails;
        
        const userAuthenticated = await globalFunctions.authenticateUser(user);
        if(userAuthenticated){
            let deleteSlideId = req.body.deleteSlideId;
            let parentId = req.body.parentId;

            console.log(req.body);

            await Slide.destroy({
                where: {
                    id: deleteSlideId
                }
            })

            let allSlides = await Slide.findAll({
                where:{
                    parentId: parentId
                }
            })

            let response = globalFunctions.sanitizeSlidesForClient(allSlides);

            res.send(response);
        }
    }
}

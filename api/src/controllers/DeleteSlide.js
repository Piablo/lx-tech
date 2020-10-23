const {Slide} = require('../models');
const globalFunctions = require('../services/globalFunctions');

module.exports = {
    async model (req, res) {

        const user = req.body.userDetails;
        const userAuthenticated = await globalFunctions.authenticateUser(user);
        if(userAuthenticated){
            let deleteSlideId = req.body.deleteSlideId;

            await Slide.destroy({
                where: {
                    id: deleteSlideId
                }
            })

            res.sendStatus(200);
        }
    }
}

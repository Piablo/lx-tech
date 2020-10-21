const {Slide} = require('../models');
const globalFunctions = require('../services/globalFunctions.js');

module.exports = {
    async model (req, res) {

        const parentId = req.body.parentId;
        console.log("Slides")
        console.log(parentId)

        let allLessonSlides = await Slide.findAll({
            where: {
                parentId: parentId
            }
        })

        let response = globalFunctions.sanitizeSlidesForClient(allLessonSlides);
        res.send(response);
    }
}

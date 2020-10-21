const {Slide} = require('../models');
const globalFunctions = require('../services/globalFunctions.js');

module.exports = {
    async model (req, res) {

       console.log(req.body);
       let slides = req.body.slides;
       const parentId = slides[0].parentId;

       slides = globalFunctions.sanitizeSlidesForDB(slides);

       await Slide.bulkCreate(slides, {updateOnDuplicate: ["timing"] });

       const allLessonSlides = await Slide.findAll({
           where:{
            parentId: parentId
           }
       })

       let response = globalFunctions.sanitizeSlidesForClient(allLessonSlides);
       res.send(response);
    }
}





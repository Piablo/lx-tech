const {Slide} = require('../models');

module.exports = {
    async model (req, res) {

        const parentId = req.body.parentId;
        console.log("Slides")
        console.log(parentId)

        const response = await Slide.findAll({
            where: {
                parentId: parentId
            }
        })
        console.log(response)
        console.log("Slides")
        res.send(response);
    }
}

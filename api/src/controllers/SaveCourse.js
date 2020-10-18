const {MenuItem} = require('../models');

module.exports = {
    async model (req, res) {

        let course = req.body.course;
        let parentId = 0;

        await MenuItem.create(course);

        const response = await MenuItem.findAll({
            where: {
                parentId: parentId
            }
        });
        
        res.send(response)
    }
}

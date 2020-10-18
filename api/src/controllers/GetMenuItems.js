const {MenuItem} = require('../models');

module.exports = {
    async model (req, res) {

        let parentId = req.body.parentId;
        const response = await MenuItem.findAll({
            where:{
                parentId: parentId
            }
        });
        
        res.send(response)
    }
}

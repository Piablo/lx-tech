const {Task} = require('../models');

module.exports = {
    async model (req, res) {

        let parentId = req.body.parentId;
        const response = await Task.findOne({
            where:{
                status: 'active'
            }
        });
        
        res.send(response)
    }
}

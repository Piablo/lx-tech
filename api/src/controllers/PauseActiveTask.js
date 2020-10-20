const {Task} = require('../models');

module.exports = {
    async model (req, res) {

        const response = await Task.update({status: 'paused'},{
            where:{
                status: 'active'
            }
        });
        
        res.send(response)
    }
}

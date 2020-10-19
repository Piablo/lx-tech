const {Task} = require('../models');

module.exports = {
    async model (req, res) {

        const response = await Task.findAll({
            where: {
                isOpen: true
            }
        });

        res.send(response)
    }
}

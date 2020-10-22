const {Task} = require('../models');
const globalFunctions = require('../services/globalFunctions');

module.exports = {
    async model (req, res) {

        const user = req.body.userDetails

        const userAuthenticated = await globalFunctions.authenticateUser(user);
        if(userAuthenticated){
            console.log("GetOpenTasks");
            const response = await Task.findAll({
                where: {
                    isOpen: true
                }
            });
    
            res.send(response)
        }
    }
}

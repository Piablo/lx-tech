const {Task} = require('../models');
const globalFunctions = require('../services/globalFunctions');

module.exports = {
    async model (req, res) {

        const user = req.body.userDetails;
        const userAuthenticated = await globalFunctions.authenticateUser(user);

        if(userAuthenticated){
            console.log("GetActiveTasks")

            let parentId = req.body.parentId;
            const response = await Task.findOne({
                where:{
                    status: 'active'
                }
            });
            
            res.send(response)
        }  
    }
}

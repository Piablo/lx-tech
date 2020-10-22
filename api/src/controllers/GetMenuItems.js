const {MenuItem} = require('../models');
const globalFunctions = require('../services/globalFunctions');

module.exports = {
    async model (req, res) {

        const user = req.body.userDetails

        const userAuthenticated = await globalFunctions.authenticateUser(user);
        
        if(userAuthenticated){
            console.log("GetMenuItems");
            let parentId = req.body.parentId;
            const response = await MenuItem.findAll({
                where:{
                    parentId: parentId
                }
            });
            
            res.send(response)
        }
    }
}

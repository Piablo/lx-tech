const {MenuItem} = require('../models');
const globalFunctions = require('../services/globalFunctions');

module.exports = {
    async model (req, res) {

        const user = req.body.userDetails

        const userAuthenticated = await globalFunctions.authenticateUser(user);
        if(userAuthenticated){
            console.log("SaveCourse");
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
}

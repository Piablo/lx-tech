const {MenuItem} = require('../models');
const globalFunctions = require('../services/globalFunctions');

module.exports = {
    async model (req, res) {

        const user = req.body.userDetails

        const userAuthenticated = await globalFunctions.authenticateUser(user);
        if(userAuthenticated){
            console.log('SaveLesson')
            let course = req.body.course;
            let parentId = course.parentId;
            let spliceIndex = (req.body.spliceIndex) + 1;
    
            await MenuItem.create(course);
    
            const lessons = await MenuItem.findAll({
                where: {
                    parentId: parentId
                }
            });
            
            const courses = await MenuItem.findAll({
                where: {
                    parentId: 0
                }
            })
    
            let listLength = lessons.length;
            let treeviewData = courses;
    
            for(let i = 0; i < listLength; i++){
                spliceIndex += i;
                treeviewData.splice(spliceIndex, 0, lessons[i])
            }
            res.send(treeviewData);
        }
    }
}

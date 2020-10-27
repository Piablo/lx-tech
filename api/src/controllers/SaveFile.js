const {Task} = require('../models');
const globalFunctions = require('../services/globalFunctions');
const fs = require('fs');


module.exports = {
    async model (req, res) {


        console.log(req.body.file)
        

        // fs.writeFile("/tmp/test", "Hey there!", function(err) {
        //     if(err) {
        //         return console.log(err);
        //     }
        //     console.log("The file was saved!");
        // }); 


        // const user = req.body.userDetails;
        // const userAuthenticated = await globalFunctions.authenticateUser(user);

        // if(userAuthenticated){
        //     console.log("GetOpenTasks");
        //     const response = await Task.findAll({
        //         where: {
        //             isOpen: true
        //         }
        //     });
    
        //     res.send(response)
        // }
    }
}

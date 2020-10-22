const {Task} = require('../models');
const dayjs = require('dayjs');
const globalFunctions = require('../services/globalFunctions');

module.exports = {
    async model (req, res) {

        let task = req.body;

        const user = req.body.userDetails

        const userAuthenticated = await globalFunctions.authenticateUser(user);
        if(userAuthenticated){
            console.log('SaveTasks')
            task.status = 'logged';
            task.dateTimeLogged = dayjs().format('YY-MM-DD HH-mm-ss');
            task.ticketNumber = dayjs().format('YYMMDDHHmmss');
            task.isOpen = true;
    
            const response = await Task.create(task);
    
            res.send(response)
        }
    }
}

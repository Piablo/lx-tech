const {Task} = require('../models');
const dayjs = require('dayjs')

module.exports = {
    async model (req, res) {

        let task = req.body;
        

        task.status = 'logged';
        task.dateTimeLogged = dayjs().format('YY-MM-DD HH-mm-ss');
        task.ticketNumber = dayjs().format('YYMMDDHHmmss');
        task.isOpen = true;

        const response = await Task.create(task);

        res.send(response)
    }
}

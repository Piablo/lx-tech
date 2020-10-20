const {Task} = require('../models');
const dayjs = require('dayjs');

module.exports = {
    async model (req, res) {

        let task = req.body;
        let id = task.id;
        let instruction = task.instruction;

        if(instruction === 'active'){
            let previouslyActive = await Task.findOne({where:{
                status: 'active'
            }})

            if(previouslyActive !== null){
                let previouslyActiveId = previouslyActive.id;
                let previouslyActiveStatus = 'paused';
                let previouslyActiveLogs = [];
                previouslyActiveLogs = JSON.parse(previouslyActive.logs);
                previouslyActiveLogs.push({dateTimePaused: dayjs().format('YY-MM-DD HH-mm-ss')});

                await Task.update({
                    status: previouslyActiveStatus,
                    logs: JSON.stringify(previouslyActiveLogs)
                },{where:{
                    id: previouslyActiveId
                }})
            }

            let newTask = await Task.findOne({where:{
                id: id
            }})

            let newTaskLogs = JSON.parse(newTask.logs);
            let newTaskStatus = 'active';
            let newTaskDateTimeStarted = null;

            if(newTask.status === 'logged'){
                newTaskDateTimeStarted = dayjs().format('YY-MM-DD HH-mm-ss');
                newTaskLogs = [];
                newTaskLogs.push({dateTimeStarted: newTaskDateTimeStarted})
            }else{
                newTaskDateTimeStarted = newTask.dateTimeStarted;
                newTaskLogs.push({dateTimeMadeActive: dayjs().format('YY-MM-DD HH-mm-ss')});
            }
            await Task.update(
                {
                    status: newTaskStatus,
                    dateTimeStarted: newTaskDateTimeStarted,
                    logs: JSON.stringify(newTaskLogs)
                }, {
                where: {
                    id: id
                }
            })
        }
        else if(instruction === 'paused'){
            let taskToPause = await Task.findOne({where:{
                id: id
            }})
            if(taskToPause.status === 'active'){
                let taskToPauseStatus = 'paused';
                let taskToPauseLogs = [];
                let taskToPauseId = taskToPause.id;
                taskToPauseLogs = JSON.parse(taskToPause.logs);
                taskToPauseLogs.push({dateTimePaused: dayjs().format('YY-MM-DD HH-mm-ss')});
                let dave = await Task.update({
                    status: taskToPauseStatus,
                    logs: JSON.stringify(taskToPauseLogs)
                }, {
                    where:{
                        id: taskToPauseId
                    }
                })
            }
        }
        else if(instruction === 'closed'){
            console.log('close this task');
            let taskToCloseId = task.id;
            await Task.update({isOpen: false, status: 'closed'}, {
                where:{
                    id: taskToCloseId
                }
            })
        }

        console.log("get active task if any");
        console.log("get all open tasks")
        console.log("send to client")
        //task.dateTimeStarted = dayjs().format('YY-MM-DD HH-mm-ss');

        // await Task.update(task, {
        //     where: {
        //         id: id
        //     }
        // });

        // const response = await Task.findOne({
        //     where:{
        //         id: id,
        //     }
        // })

        // res.send(response)
    }
}

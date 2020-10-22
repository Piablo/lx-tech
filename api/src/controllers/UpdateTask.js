const {Task} = require('../models');
const dayjs = require('dayjs');
const globalFunctions = require('../services/globalFunctions');

module.exports = {
    async model (req, res) {

        const user = req.body.userDetails;
        const userAuthenticated = await globalFunctions.authenticateUser(user);
        if(userAuthenticated){
            console.log('UpdateTask')
            let task = req.body.task;
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

            const activeTask = await Task.findOne({
                where: {
                    status: 'active'
                }
            })

            const openTasks = await Task.findAll({
                where:{
                    isOpen: true
                }
            })

            const response = {
                activeTask: activeTask,
                openTasks: openTasks
            }
            res.send(response)
        }
    }
}

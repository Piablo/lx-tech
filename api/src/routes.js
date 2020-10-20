const SaveCourse = require('./controllers/SaveCourse');
const SaveLesson = require('./controllers/SaveLesson');
const GetMenuItems = require('./controllers/GetMenuItems');
const SaveTask = require('./controllers/SaveTask');
const GetOpenTasks = require('./controllers/GetOpenTasks');
const UpdateTask = require('./controllers/UpdateTask');
const GetActiveTask = require('./controllers/GetActiveTask');
const PauseActiveTask = require('./controllers/PauseActiveTask');

module.exports = (app) => {

    app.post('/api/save-course', SaveCourse.model);
    app.post('/api/save-lesson', SaveLesson.model);
    app.post('/api/get-menu-items', GetMenuItems.model);
    app.post('/api/save-task', SaveTask.model);
    app.post('/api/get-open-tasks', GetOpenTasks.model);
    app.post('/api/update-task', UpdateTask.model);
    app.post('/api/get-active-task', GetActiveTask.model);
    app.post('/api/pause-active-task', PauseActiveTask.model);
}

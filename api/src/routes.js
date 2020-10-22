const SaveCourse = require('./controllers/SaveCourse');
const SaveLesson = require('./controllers/SaveLesson');
const GetMenuItems = require('./controllers/GetMenuItems');
const SaveTask = require('./controllers/SaveTask');
const GetOpenTasks = require('./controllers/GetOpenTasks');
const UpdateTask = require('./controllers/UpdateTask');
const GetActiveTask = require('./controllers/GetActiveTask');
const PauseActiveTask = require('./controllers/PauseActiveTask');
const GetSlides = require('./controllers/GetSlides');
const SaveSlides = require('./controllers/SaveSlides');
const RegisterUser = require('./controllers/RegisterUser');
const LoginUser = require('./controllers/LoginUser');
const AuthenticateUser = require('./controllers/AuthenticateUser');

module.exports = (app) => {

    app.post('/api/save-course', SaveCourse.model);
    app.post('/api/save-lesson', SaveLesson.model);
    app.post('/api/get-menu-items', GetMenuItems.model);
    app.post('/api/save-task', SaveTask.model);
    app.post('/api/get-open-tasks', GetOpenTasks.model);
    app.post('/api/update-task', UpdateTask.model);
    app.post('/api/get-active-task', GetActiveTask.model);
    app.post('/api/pause-active-task', PauseActiveTask.model);
    app.post('/api/get-slides', GetSlides.model);
    app.post('/api/save-slides', SaveSlides.model);
    app.post('/api/register-user', RegisterUser.model);
    app.post('/api/login-user', LoginUser.model);
    app.post('/api/authenticate-user', AuthenticateUser.model);
}

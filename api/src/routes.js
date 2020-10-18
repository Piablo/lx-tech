const SaveCourse = require('./controllers/SaveCourse');
const SaveLesson = require('./controllers/SaveLesson');
const GetMenuItems = require('./controllers/GetMenuItems');

module.exports = (app) => {

    app.post('/api/save-course', SaveCourse.model);
    app.post('/api/save-lesson', SaveLesson.model);
    app.post('/api/get-menu-items', GetMenuItems.model);
}

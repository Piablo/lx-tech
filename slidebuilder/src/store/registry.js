export default {
    //Controls/////////////////

    //Buttons
    DELETE_CARD: 'delete-card',
    INSERT_CARD: 'insert-card',
    SAVE_COURSE: 'save-course',
    SAVE_LESSON: 'save-lesson',
    TASK_LOG: 'task-log',
    SAVE_TASK: 'save-task',
    STILL_WORKING: 'still-working',

    SAVE_SLIDES: 'save-slides',

    //Inputs
    START_TICK: 'start-tick',
    END_TICK: 'end-tick',
    NEW_COURSE: 'new-course',
    NEW_LESSON: 'new-lesson',
    Y_POSITION_VALUE: 'y-position-value',
    X_POSITION_VALUE: 'x-position-value',
    MEDIA_WIDTH: 'media-width', 
    MEDIA_HEIGHT: 'media-height',

    //Slide States  
    FILE_SELECTED: 'file-selected',
    TYPE_IMAGE: 'type-image',
    TYPE_VIDEO: 'type-video',
    TYPE_AUDIO: 'type-audio',

    //TextAreas
    TASK_INFO: 'task-info',

    //Selects
    TASK_TYPE: 'task-type',
    TASK_STATUS: 'task-status',
    SLIDE_TYPE: 'slide-type',
    Y_POSITION: 'y-position',
    X_POSITION: 'x-position',

    //Treeviews
    COURSE_TREEVIEW: 'course_treeview',

    //Grids
    TASK_GRID: 'task-grid',


    //ViewStates
    NOTHING_SELECTED: 'nothing-selected',
    COURSE_SELECTED: 'course-selected',
    LESSON_SELECTED: 'lesson-selected',


    //Models
    insertBlankSlide(parentId){
        let slide = {
            parentId, parentId,
            timing: {
                startTick: null,
                endTick: null
            },
            fileProperties: null,
            
        }
        return slide;
    },

    treeviewItem(label, level, parentId, order){
        let item = {
            label: label,
            level: level,
            parentId: parentId,
            order: order,
            activeIndex: false
        }
        return item;
    },

    createButton(index){
        let button = {
            label: 'Add', 
            level: index, 
            parentId: index
        }
        return button
    },

    modalDisplay(route, label){
        let modal = {
            show: true,
            route: route,
            label: label
        }
        return modal
    }
}
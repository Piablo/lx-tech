export default {
    //Controls/////////////////

    //Buttons
    DELETE_CARD: 'delete-card',
    INSERT_CARD: 'insert-card',
    SAVE_COURSE: 'save-course',
    SAVE_LESSON: 'save-lesson',

    //Inputs
    START_TICK: 'start-tick',
    END_TICK: 'end-tick',
    NEW_COURSE: 'new-course',
    NEW_LESSON: 'new-lesson',

    //Treeviews
    COURSE_TREEVIEW: 'course_treeview',


    //Models
    insertBlackCard(){
        let card = {
            timing: {
                startTick: null,
                endTick: null
            }
            
        }
        return card;
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
import axios from 'axios';

//Services
// import { bus }from '@/services/Bus';
import registry from '../registry';
import sharedFunctions from '../../services/sharedFunctions.js';

const state = {
    spinnerState: false,
    cards: [],
    treeviewData: [],
    modal: null,
    newCourse: null,
    newLesson: null,
    courseData: null,
    lessonData: null,
    level0ParentId: null,
    activeIndexs: null,
    loggedTask: {
        label: null,
        type: null,
    },
    gridData: null,
    openTasks: null,
    currentTask: null,
    showTaskModal: false,
    startActivityTimerState: false

};

const getters = {
    getSpinnerState: (state) => state.spinnerState,
    getCards: (state) => state.cards,
    getTreeviewData: (state) => state.treeviewData,
    getModalState: (state) => state.modal,
    getLessonData: (state) => state.lessonData,
    getGridData: (state) => state.gridData,
    getCurrentTask: (state) => state.currentTask,
    getShowTaskModal: (state) => state.showTaskModal,
    getStartActivityTimerState: (state) => state.startActivityTimerState,
};

const actions = {

    async pauseActiveTask({commit}){
        let payload = {
            userId: 2
        }
        const response = await axios.post('http://localhost:4000/api/pause-active-task', payload);
        let details = {
            route: 'taskList',
            headline: 'Select the task you are working on'
          }
        commit('showModal', details);
    },

    async checkForActiveTask({commit}){
        
        let payload = {
            userId: 3
        }
        const response = await axios.post('http://localhost:4000/api/get-active-task', payload);
        const activeTask = response.data;
        if(activeTask === ""){
            state.showTaskModal = true;
        }else{
            state.currentTask = activeTask
        }
    },

    async populateGrid({commit}, gridName){
        if(gridName === registry.TASK_GRID){
            let payload = {
                userId: 2,
            }
            const response = await axios.post('http://localhost:4000/api/get-open-tasks', payload);

            let properties = response.data;
            let data = [];
            let listLength = properties.length;
            for(let i = 0; i < listLength; i++){
                let columnData = [
                    properties[i].ticketNumber,
                    properties[i].label,
                    properties[i].status,
                    properties[i].type,
                
                ];
                data.push(columnData);
                //Add a session option to show how many sessions it took to work on a task or subtask
            }

            let gridData = {};
            gridData.data = data;
            gridData.name = gridName;
            state.gridData = gridData;
            state.openTasks = properties;
        }
    },
    async getTreeviewDataFromDb({commit}, parentId){
        state.spinnerState = true;
        let payload = {
            userId: 2,
            parentId: parentId
        }
        const response = await axios.post('http://localhost:4000/api/get-menu-items', payload);
        let treeviewData = response.data;
        state.courseData = sharedFunctions.decoupleObjectList(response.data);
        commit('commitTreeviewData', treeviewData);
        state.spinnerState = false;
    },
    async saveNewCourseToDb(){
        state.spinnerState = true;
        let payload = {
            course: state.newCourse,
            userId: 23
        }
        const response = await axios.post('http://localhost:4000/api/save-course', payload);
        let treeviewData = response.data;
        mutations.commitTreeviewData(state, treeviewData);
        state.spinnerState = false;
    },
    async saveNewLessonToDb(){
        state.spinnerState = true;
        let payload = {
            course: state.newLesson,
            spliceIndex: state.activeIndexs[0],
            userId: 23
        }
        const response = await axios.post('http://localhost:4000/api/save-lesson', payload);
        let treeviewData = response.data;
        mutations.commitTreeviewData(state, treeviewData);
        state.spinnerState = false;
    },
    async getBranchData(parentId){
        state.spinnerState = true;
        let payload = {
            parentId: parentId,
            userId: 23
        }
        const response = await axios.post('http://localhost:4000/api/get-menu-items', payload);
        let branchData = response.data;
        mutations.commitBranchData(state, branchData)
    },
    async saveLoggedTask(){
        state.spinnerState = true;
        let payload = state.loggedTask;
        const response = await axios.post('http://localhost:4000/api/save-task', payload);
        state.spinnerState = false;
        mutations.toggleModal(state, false)
    },
    async updateLoggedTask(task){
        state.spinnerState = true;
        const response = await axios.post('http://localhost:4000/api/update-task', task);
        state.currentTask = response.data;
        mutations.toggleModal(state, false)
        state.spinnerState = false;
    }
};

const mutations = {
    setSpinnerState(state, spinnerState){
        state.spinnerState = spinnerState;
    },
    commitCardChangesToState(state, payload){
        let controlName = payload.controlName;
        let index = payload.index;

        if(controlName === registry.INSERT_CARD){
            let card = registry.insertBlackCard();
            state.cards.splice(index, 0, card);
        }
        else if(controlName === registry.DELETE_CARD){
            state.cards.splice(index, 1);
        }
    },
    commitToStateDispatcher(state, payload){
        let controlName = payload.controlName;
        let parentIndex = payload.parentIndex;
        let userInput = payload.userInput;

        if(controlName === registry.START_TICK){
            state.cards[parentIndex].timing.startTick = parseInt(userInput);
        }
        else if(controlName === registry.END_TICK){
            state.cards[parentIndex].timing.endTick = parseInt(userInput);
        }
        else if(controlName === registry.NEW_COURSE){
            let label = userInput;
            let level = 0;
            let parentId = 0;
            let order = null
            state.newCourse = registry.treeviewItem(label, level, parentId, order);
        }
        else if(controlName === registry.SAVE_COURSE){
            mutations.toggleModal(state, false)
            actions.saveNewCourseToDb();
        }
        else if(controlName === registry.NEW_LESSON){
            let label = userInput;
            let level = 1;
            let parentId = state.level0ParentId;
            let order = payload.order;
            
            state.newLesson = registry.treeviewItem(label, level, parentId, order);
        }
        else if(controlName === registry.SAVE_LESSON){
            mutations.toggleModal(state, false)
            actions.saveNewLessonToDb();
        }
        else if(controlName === registry.TASK_LOG){
            let route = 'taskLog'
            state.modal = registry.modalDisplay(route, 'Log a Task');
        }
        else if(controlName === registry.TASK_INFO){
            state.loggedTask.label = userInput;
        }
        else if(controlName === registry.SAVE_TASK){
            actions.saveLoggedTask();
        }
        else if(controlName === registry.TASK_TYPE){
            state.loggedTask.type = userInput.label;
        }
        else if(controlName === registry.TASK_GRID){
            state.openTasks[payload.columnIndex].instruction = 'active'
            let task = state.openTasks[payload.columnIndex];
            actions.updateLoggedTask(task);
        }
        else if(controlName === registry.TASK_STATUS){
            let instruction = null;
            let index = payload.index;

            if(userInput.label === "pause"){
                instruction = "paused";
            }else if(userInput.label === "close"){
                instruction = "closed";
            }
            let updateTask = state.openTasks[index]
            updateTask.instruction = instruction;
            actions.updateLoggedTask(updateTask);
        }
        else if(controlName === registry.STILL_WORKING){
            mutations.toggleModal(state, false)
            state.startActivityTimerState = true;
        }
    },
    commitTreeviewData(state, treeviewData){
        state.treeviewData = treeviewData
        let index = 0;
        state.treeviewData.push(registry.createButton(index))
        let temp = state;
        
    },
    onTreeviewClick(state, payload){
        let label = payload.selection.label;
        let level = payload.selection.level;
        let index = payload.index;

        if(label === "Add"){
            if(level === 0){
                let route = 'addCourse'
                state.modal = registry.modalDisplay(route, 'Add Course');
            }else if(level === 1){
                let route = 'addLesson'
                state.modal = registry.modalDisplay(route, 'Add Lesson');
            }
        }
        else{
            let parentId = payload.selection.id;
            state.level0ParentId = parentId
            mutations.commitActiveIndexs(level, index);
            actions.getBranchData(parentId);
        }
    },
    toggleModal(state, show){
        let modal = {
            show: show,
        }
        state.modal = modal;
    },
    showModal(state, details){
        let route = details.route;
        let headline = details.headline;
        state.modal = registry.modalDisplay(route, headline);
    },
    commitBranchData(state, branchData){
        let tempArray = state.courseData;
        let spliceIndex = (state.activeIndexs[0]) + 1;
        let listLength = branchData.length;
        state.lessonData = branchData;

        tempArray[state.activeIndexs[0]].activeIndex = true;

        for(let i = 0; i < listLength; i++){
            spliceIndex += i;
            tempArray.splice(spliceIndex, 0, branchData[i]);

        }
        let index = 1;
        tempArray.splice(spliceIndex + 1, 0, registry.createButton(index))
        tempArray.push(registry.createButton(0));
        state.treeviewData = tempArray;
        state.spinnerState = false;
    },
    commitActiveIndexs(level, index){
        let tempArray = [];
        if(level === 0){
            tempArray.push(index)
        }
        state.activeIndexs = tempArray;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}

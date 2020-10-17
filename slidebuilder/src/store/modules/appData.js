// import axios from 'axios';

//Services
// import { bus }from '@/services/Bus';
import registry from '../registry';

const state = {
    spinnerState: false,
    cards: [],

};

const getters = {
    getSpinnerState: (state) => state.spinnerState,
    getCards: (state) => state.cards,
};

const actions = {
    // async attemptClientLogin({commit}, payload){
    //     // const response = await axios.post('http://localhost:8088/api/get-treeview-data', payload);
        
    //     // commit('commitLessons', lessons);
    // }
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
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}

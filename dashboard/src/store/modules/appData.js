// import axios from 'axios';
// import registry from './registry';
// import globals from '../../services/globals';
import toolbarData from '../modules/toolbarData';

//Services
// import { bus }from '@/services/Bus';



const state = {

    // currentRoute: null,
 

};

const getters = {
    // getCurrentRoute: (state) => state.currentRoute,
};



const actions = {

    async fetchCourse({commit}, payload){
        
    }

    // async register(){
    //     const userDeviceData = await axios.get('https://www.cloudflare.com/cdn-cgi/trace');
    //     state.user.ip = getIP(userDeviceData);
    //     const response = await axios.post('http://localhost:3306/api/register', state.user);
    //     state.user.userId = response.data.userId;
    //     mutations.commitRoute(state, '/dashboard');
    // }
};

const mutations = {

    onButtonClick(state, payload){
        const parent = payload.parent;
        const name = payload.name;

        if(parent === 'toolbar'){
            toolbarData.mutations.onButtonClick(payload);
        }
    }

    // commitRoute(state, route){
    //     state.currentRoute = route;
    // },
};

export default {
    state,
    getters,
    actions,
    mutations
}

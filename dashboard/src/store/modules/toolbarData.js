// import axios from 'axios';
import registry from './registry';
// import globals from '../../services/globals';

//Services
// import { bus }from '@/services/Bus';



const state = {

    leftToolbarButtons: [
        {
            data: {
                name: registry.SHOW_COURSES,
                icon: 'S',
                tooltip: "Show the courses I am busy with",
                parent: 'toolbar',
                style: "primary",
            }        
        }
    ],
    showAnimatedPanel: false,
    animationPanelData: {
        clickLocation: null
    }
 

};

const getters = {
    getToolbarButtons: (state) => state.toolbarButtons,
    getLeftToolbarButtons: (state) => state.leftToolbarButtons,
    getShowAnimatedPanel: (state) => state.showAnimatedPanel,
    getAnimationPanelData: (state) => state.animationPanelData,
};



const actions = {

    async fetchCourse({commit}, payload){
        debugger
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

    onButtonClick(payload){
        const name = payload.name;
        if(name === registry.SHOW_COURSES){
            let panelData = {
                clickLocation: payload.clickLocation
            }
            state.animationPanelData = panelData;
            state.showAnimatedPanel = true
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

import axios from 'axios';

import registry from "../registry";

//Services
// import { bus }from '@/services/Bus';
// import registry from '../registry';
// import sharedFunctions from '../../services/sharedFunctions.js';

function getIP(userDeviceData){
    
    let string = userDeviceData.data;
    let startIndex = string.search('ip=');
    let endIndex = string.search('ts=');
    let ip = string.slice(startIndex + 3, endIndex);
    if(ip[ip.length - 1] === "\n"){
        ip = ip.substring(0, ip.length-1);
    }
    return ip;
}

const state = {
    modal: null,
    userDetails: {
        email: null,
        password: null,
        id: null,
        ip: null
    },
    route: '/',
};

const getters = {
    getModalState: (state) => state.modal,
    getRoute: (state) => state.route,
};

const actions = {
    async registerNewUser(state){
        const userDeviceData = await axios.get('https://www.cloudflare.com/cdn-cgi/trace');
        state.userDetails.ip = getIP(userDeviceData);
        const user = state.userDetails;
        const response = await axios.post('http://localhost:4000/api/register-user', user);
        debugger
    },
    async loginUser(state){
        const userDeviceData = await axios.get('https://www.cloudflare.com/cdn-cgi/trace');
        state.userDetails.ip = getIP(userDeviceData);
        const user = state.userDetails;
        const response = await axios.post('http://localhost:4000/api/login-user', user);
        state.userDetails = response.data;
        let userDetails = JSON.stringify(state.userDetails)
        window.localStorage.setItem('userDetails', userDetails);
        state.route = '/dashboard';
        mutations.toggleModal(state, false);
    }

};

const mutations = {

    dispatchToState(state, payload){
        
        const controlType = payload.controlType;
        const controlName = payload.controlName;

        if(controlType === 'button'){
            if(controlName === registry.LOGIN_USER){
                let details = {
                    route: 'loginUser',
                    headline: 'Login',
                }
                mutations.showModal(state, details);
            }
            else if(controlName === registry.REGISTER_USER){
                let details = {
                    route: 'registerUser',
                    headline: 'Sign up',
                }
                mutations.showModal(state, details);
            }
            else if(controlName === registry.SEND_REGISTRATION_DETAILS){
                actions.registerNewUser(state)
            }
            else if(controlName === registry.SEND_LOGIN_DETAILS){
                actions.loginUser(state)
            }
        }
        else if(controlType === 'input'){
            if(controlName === registry.USER_EMAIL){
                state.userDetails.email = payload.userInput;
            }
            else if(controlName === registry.USER_PASSWORD){
                state.userDetails.password = payload.userInput;
            }
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
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}

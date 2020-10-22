export default {
    //Controls/////////////////

    //Buttons

    LOGIN_USER: "login-user",
    REGISTER_USER: "register-user",
    SEND_REGISTRATION_DETAILS: "send-registration-details",
    SEND_LOGIN_DETAILS: "send-login-details",

    //Inputs

    USER_EMAIL: "user-email",
    USER_PASSWORD: "user-password",

    //TextAreas

    //Selects

    //Treeviews

    //Grids


    //Models
    
    modalDisplay(route, label){
        let modal = {
            show: true,
            route: route,
            label: label
        }
        return modal
    }
}
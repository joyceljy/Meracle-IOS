export default (state = null, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log(action.Message)
            action.Callback(action.Message)
            return action.Token;
        case 'LOGIN_FAIL':
            console.log(action.Message)
            action.Callback(action.Message)
            return "";
        case 'Logout_SUCCESS':
            return "";
        default:
            return state;
    }
};
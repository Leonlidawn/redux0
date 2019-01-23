const user = (state = { userName: "_____", userStatus:"not_logged_in" }, action) => {
    switch (action.type) {
        case "CHANGE_USER_NAME":
            return {
            ...state,
            userName: action.userName
            };
        case "CHANGE_USER_STATUS":
            return {
                ...state,
                userStatus: action.userStatus
            };
        default:
        return state;
    }
  };
  
  export default user;
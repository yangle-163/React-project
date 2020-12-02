const userreducer = (state = { userlist: [] }, action) => {

    switch (action.type) {
        case 'USER_CHECK':
            console.log(action.userlist)
            return { userlist: action.userlist }
        default:
            return state;
    }
}

export default userreducer;
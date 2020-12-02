const loginreducer = (state = { adminlist: [] }, action) => {
    switch (action.type) {
        case 'ADMIN_LOGIN':
            console.log(action.adminlist)
            return { adminlist: action.adminlist }
        default:
            return state;
    }
}

export default loginreducer;
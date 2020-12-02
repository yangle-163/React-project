const adminreducer = (state = { adminlist: [] }, action) => {
    switch (action.type) {
        case 'DEL_ADMIN':
            console.log(action.adminlist)
            return { adminlist: action.adminlist }
        default:
            return state;
    }
}

export default adminreducer;
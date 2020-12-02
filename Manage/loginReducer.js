const systemreducer = (state={datalist:[]},action) => {

    switch(action.type){
        case 'ADMIN_LOGIN':
            console.log(action.datalist)
            return {datalist:action.datalist}
        default:
            return state;
    }
}

export default systemreducer;
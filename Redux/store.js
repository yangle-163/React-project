import {createStore,compose,combineReducers,applyMiddleware} from 'redux'
import loginreducer from './LoginReducer'
import userreducer from './UserReducer'
import adminreducer from './AdminReducer'

let rootReducer = combineReducers({
    loginreducer,userreducer,adminreducer
})
function logger({ getState }) {
    return (next) => (action) => {
        console.log('will dispatch', action)
        // 调用 middleware 链中下一个 middleware 的 dispatch。
        let returnValue = next(action)
        console.log('state after dispatch', getState())
        // 一般会是 action 本身，除非
        // 后面的 middleware 修改了它。
        return returnValue
    }
}
const thunk = ({ dispatch, getState }) => (next) => (action) => {
    console.log('thunk');
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
};

const store = createStore(
    //直接传三个参数不行，需要用compose进行整合
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
);

export default store;
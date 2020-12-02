import { Toast } from 'antd-mobile'

const errToast = (msg) => {
    Toast.info(`${msg}`, 2)
}

// 管理员登录和后台查看管理员
const adminLogin = () => {
    return (dispatch) => {
        let url = 'http://www.h5weixin.club:1024/api/admin'
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch({
                    type: 'ADMIN_LOGIN',
                    adminlist: res.data
                })
            })
    }
}

// 后台添加管理员
const addAdmin = (tel, password, password1) => {
    let url = 'http://www.h5weixin.club:1024/api/user/register'
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_phone: `${tel}`, user_password: `${password}`, password_confim: `${password1}`
        })
    }).then((res) => {
        return res.json()
    }).then((res) => {
        if (res.code === 40004 || res.code === 40005 || res.code === 40006) {
            errToast(res.msg)
        } else {
            errToast(res.msg)
        }
    }).catch((err) => {
        console.log(err)
    })
}

//根据管理员ID删除管理员
const delAdmin = (id, admin_id, admin_password) => {
    return (dispatch) => {
        let url = 'http://www.h5weixin.club:1024/api/admin'
        fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                commodity_id: `${id}`, business_id: `${admin_id}`, business_password: `${admin_password}`
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
            dispatch({
                type: 'DEL_ADMIN',
                index: id
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

//后台添加商家
const zhecebus = (tel, password, password1) => {
    let url = 'http://www.h5weixin.club:1024/api/business/register'
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            business_phone: `${tel}`, business_password: `${password}`, password_confim: `${password1}`
        })
    }).then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res)
        if (res.code === 40004 || res.code === 40005 || res.code === 40006) {
            errToast(res.msg)
        } else {
            errToast(res.msg)
        }
    }).catch((err) => {
        console.log(err)
    })
}

// 后台添加用户
const addUser = (name,tel, password, password1) => {
    let url = 'http://www.h5weixin.club:1024/api/user/register'
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_name:`${name}`,user_phone: `${tel}`, user_password: `${password}`, password_confim: `${password1}`
        })
    }).then((res) => {
        return res.json()
    }).then((res) => {
        if (res.code === 40004 || res.code === 40005 || res.code === 40006) {
            errToast(res.msg)
        } else {
            errToast(res.msg)
        }
    }).catch((err) => {
        console.log(err)
    })
}

//根据用户ID删除用户
const delUser = (id, business_id, business_password) => {
    return (dispatch) => {
        let url = 'http://www.h5weixin.club:1024/api/commodity'
        fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                commodity_id: `${id}`, business_id: `${business_id}`, business_password: `${business_password}`
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
            dispatch({
                type: 'DEL_USER',
                index: id
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

// 后台查看用户
const userCheck = () => {
    return (dispatch) => {
        let url = 'http://www.h5weixin.club:1024/api/user'
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            dispatch({
                type: 'USER_CHECK',
                userlist: res.data
            })
            console.log(res)
        })
    }
}

//后台查看所有商品
const getsplist = () => {
    return (dispatch) => {
        let url = 'http://www.h5weixin.club:1024/api/commodity/'
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
            dispatch({
                type: 'GET_SP_LIST',
                value: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

// 后台查看所有商家
const getbuslist = () => {
    return (dispatch) => {
        let url = 'http://www.h5weixin.club:1024/api/business'
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
            dispatch({
                type: 'GET_BUS_LIST',
                value: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

//后台查看某个商家的所有商品
const getbusidlist = (id) => {
    return (dispatch) => {
        let url = 'http://www.h5weixin.club:1024/api/business/commodity'
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                business_id: `${id}`
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            dispatch({
                type: 'GET_SP_LIST',
                value: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}


const postsp = () => {
    let url = 'http://www.h5weixin.club:1024/api/commodity'
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            business_id: '11', commodity_temp_title: '杨乐一块一次', commodity_temp_descript: '来204找杨乐不包邮', commodity_temp_money: '100'
        })
    }).then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res)
    })
}

//获取图片
const getMsg = (props) => {
    let data
    props.login
        ? data = JSON.parse(localStorage.getItem('user'))
        : data = props.login[0]
    return data
}

// 根据商品ID删除商品
const delsp = (id, business_id, business_password) => {
    return (dispatch) => {
        let url = 'http://www.h5weixin.club:1024/api/commodity'
        fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                commodity_id: `${id}`, business_id: `${business_id}`, business_password: `${business_password}`
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
            dispatch({
                type: 'DEL_SP',
                index: id
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export { adminLogin, addAdmin, delAdmin, delUser, addUser, zhecebus, getsplist, getbuslist, userCheck, postsp, getbusidlist, getMsg, delsp }
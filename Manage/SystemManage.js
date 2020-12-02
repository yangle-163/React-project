import React, { useEffect } from 'react';
import './manage.css'
import System from './System';
import { adminLogin } from '../Redux/ActionCreator';
import { connect } from 'react-redux';

//系统管理页面，只包含头部和左面导航栏
const SystemManage = (props) => {
    useEffect(() => {
        props.dispatch(adminLogin())
    }, [])

    return (
        // 页面整体最外层div
        <div className="box">
            {/* 头部 */}
            <div className="box_head">
                <span className='head_left'>百果园后台管理系统</span>
                {props.adminlist.map((item, index) => {
                    if (props.adminlist[index].admin_name === props.location.state.admin_name) {
                        return <button className='head_right'>{props.adminlist[index].admin_name}</button>
                    }
                })}
                <button className='exit'
                    onClick={() => {
                        props.history.push('/');
                    }}
                >退出</button>
            </div>
            {/* 头部以下的外层div(除头部以外的部分) */}
            <div className="box_body">
                {/* 左半部分导航栏 */}
                <div className='body_left'>
                    <span><i className='iconfont icon-zhongbiao'></i>系统菜单</span>
                    <ul>
                        <li><a href=''><button onClick={() => props.history.push('/systemmanage', { admin_name: props.location.state.admin_name })}>系统管理</button></a></li>
                        <li><a href=''><button onClick={() => props.history.push('/communitymanage', { admin_name: props.location.state.admin_name })}>社区管理</button></a></li>
                        <li><a href=''><button onClick={() => props.history.push('/usermanage', { admin_name: props.location.state.admin_name })}>用户管理</button></a></li>
                        <li><a href=''><button onClick={() => props.history.push('/feedbackmanage', { admin_name: props.location.state.admin_name })}>反馈管理</button></a></li>
                        <li><a href=''><button onClick={() => props.history.push('/fruitermanage', { admin_name: props.location.state.admin_name })}>果农管理</button></a></li>
                    </ul>
                </div>
                {/* 引入右半部分 */}
                <System />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    adminlist: state.loginreducer.adminlist
})

export default connect(mapStateToProps)(SystemManage);
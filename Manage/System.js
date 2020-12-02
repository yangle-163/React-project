import { Tabs, WhiteSpace } from 'antd-mobile';
import React, { useEffect } from 'react';
import './system.css';
import Search_id from './Search_id';
import { adminLogin, delAdmin } from '../Redux/ActionCreator';
import { connect } from 'react-redux';
import $ from 'jquery'
// import { currentTime } from './Adminlogin'
//右边tab栏
const tabs = [
    { title: '查看' },
    { title: '添加' }
];

//右半部分页面
const System = (props) => {
    useEffect(() => {
        props.dispatch(adminLogin())
    }, [])

    $(function () {
        var oTable = document.getElementById("otable");
        for (var i = 0; i < props.adminlist.length; i++) {
            oTable.rows[i + 1].cells[0].innerHTML = (i + 1);
        }
    })

    // currentTime();

    return (
        //右半部分div
        <div className="body_right">
            <div className='right_top'>
                <p>应用管理</p>
            </div>
            <div className='right_middle'>
                {/* tab栏 */}
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={0} animated={true} useOnPan={false} distanceToChangeTab={0.3}>
                    <div className='search_id'>
                        <p>选择查找的手机号</p>
                        <Search_id />
                        <div className='systemtable'>
                            <table border='0' className='mytable' id='otable'>
                                <thead>
                                    <tr>
                                        <th>编号</th>
                                        <th>ID</th>
                                        <th>姓名</th>
                                        <th>职位</th>
                                        <th>邮箱</th>
                                        <th>电话</th>
                                        <th>上次登录时间</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.adminlist.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td></td>
                                                    <td>{props.adminlist[index].admin_id}</td>
                                                    <td>{props.adminlist[index].admin_name}</td>
                                                    <td>{props.adminlist[index].admin_position}</td>
                                                    <td>{props.adminlist[index].admin_email}</td>
                                                    <td>{props.adminlist[index].admin_phone}</td>
                                                    <td>{props.adminlist[index].admin_last_time}</td>
                                                    <td><button>编辑</button>&nbsp;|&nbsp;<button>删除</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='addapp'>
                        <div className='username'>
                            <span>姓名 : </span>
                            <input type='text' placeholder='请输入姓名' id='input_usr' />
                        </div>
                        <div className='position'>
                            <span>职位 : </span>
                            <input type='text' placeholder='请输入职位' id='input_pos' />
                        </div>
                        <div className='email'>
                            <span>手机号 : </span>
                            <input type='text' placeholder='请输入手机号' id='input_tel' />
                        </div>
                        <div className='email'>
                            <span> 密码 : </span>
                            <input type='text' placeholder='请输入密码' id='input_pwd' />
                        </div>
                        <div className='email'>
                            <span> 确认密码 : </span>
                            <input type='text' placeholder='请再次输入密码' id='input_pwd_once' />
                        </div>

                        <button className='add'
                            onClick={() => {
                                if (!/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(document.getElementById('input_tel').value)) {
                                    alert('请输入有效的手机号');
                                }
                                else if (document.getElementById('input_pwd').value !== document.getElementById('input_pwd_once').value) {
                                    alert('两次密码输入不相同!');
                                }
                                else if (((document.getElementById('input_pwd').value === document.getElementById('input_pwd_once').value))
                                    && (/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(document.getElementById('input_tel').value))) {

                                }
                            }}> 添加</button>
                        <button className='remove'
                            onClick={() => {
                                document.getElementById('input_usr').value = '';
                                document.getElementById('input_pos').value = '';
                                document.getElementById('input_tel').value = '';
                                document.getElementById('input_pwd').value = '';
                                document.getElementById('input_pwd_once').value = '';
                            }}>取消</button>
                    </div>
                </Tabs>
                <WhiteSpace />
            </div >
        </div >
    );
}

const mapStateToProps = (state) => ({
    adminlist: state.loginreducer.adminlist
})

export default connect(mapStateToProps)(System);

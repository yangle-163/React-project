import { Tabs, WhiteSpace } from 'antd-mobile';
import React, { useEffect } from 'react';
import './user.css';
import Search_id from './Search_id';
import { connect } from 'react-redux';
import GotoPage from './GotoPage';
import $ from 'jquery';
import { userCheck, addAdmin } from '../Redux/ActionCreator';

//获取当前行号
// const curRow = () => {
//     const tr = document.getElementsByTagName('tr');
//     for (let i = 0; i < tr.length; i++) {
//         let idx = tr[i].rowIndex + 1;
//         console.log(idx);
//         return idx;
//     }
// }


//获取当前行号
const curRow = () => {
    const tr = document.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        document.getElementsByClassName('delBtn')[0].onclick = function () {
            const idx = tr[i].rowIndex + 1;
            console.log(idx);
            return idx;
        }
    }
}

//执行删除操作
const confirmDel = () => {
    curRow();
    if (window.confirm('确定要执行此操作吗?')) {
        document.getElementById("mainbody").removeChild(document.getElementById("del+idx"));
    }
    return false;
}
//执行编辑操作
const editContent = () => {
    document.getElementsByClassName('edit_username')[0].setAttribute('contentEditable', 'true');
    document.getElementsByClassName('edit_email')[0].setAttribute('contentEditable', 'true');
    console.log($('.edit_username').innerHTML);

    $('.edit_username').on('blur', function () {
        console.log(document.getElementsByClassName('edit_username')[0].text());
        console.log(document.getElementsByClassName('edit_username')[0].innerHTML);
        // if ($('.edit_username').val() != 'admin1') {//从数据库读取信息
        //     if (window.confirm('当前页面内容已发生改变，是否保存此更改？')) {
        //         //更新数据库
        //     }
        //     else {
        //         return false;
        //     }
        // }
        // else {
        //     return false;
        // }
    })

    $('.edit_email').on('blur', function () {
        // if ($('.edit_email').val() != '18532413500@163.com') {//从数据库读取信息
        //     if (window.confirm('当前页面内容已发生改变，是否保存此更改？')) {
        //         //更新数据库
        //     }
        //     else {
        //         return false;
        //     }
        // }
        // else {
        //     return false;
        // }
    })
}

const tabs = [
    { title: '查看' },
    { title: '添加' }
];

const User = (props) => {
    useEffect(() => {
        props.dispatch(userCheck())
    }, [])
    console.log(props);

    //生成序号
    $(function () {
        var oTable = document.getElementById("otable");
        for (var i = 0; i < props.userlist.length; i++) {
            oTable.rows[i + 1].cells[0].innerHTML = (i + 1);
        }
    })

    return (
        <div className="body_right">
            <div className='right_top'>
                <p>用户管理</p>
            </div>
            <div className='right_middle'>
                {/* 两个tab栏 */}
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                    {/* 查找用户 */}
                    <div className='search_id'>
                        <p>选择查找的ID</p>
                        <Search_id />
                        <div className='usertable'>
                            <table border='0' className='mytable' id='otable'>
                                <thead>
                                    <tr>
                                        <th>编号</th>
                                        <th>ID</th>
                                        <th>昵称</th>
                                        <th>邮箱</th>
                                        <th>手机号/账号</th>
                                        <th>头像</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        props.userlist.map((item, index) => {
                                            return (
                                                <tr id='del'>
                                                    <td></td>
                                                    <td>{props.userlist[index].user_id}</td>
                                                    <td>{props.userlist[index].user_name}</td>
                                                    <td>{props.userlist[index].user_email}</td>
                                                    <td>{props.userlist[index].user_phone}</td>
                                                    <td><img key={index} src={props.userlist[index].user_pic} /></td>
                                                    <td>
                                                        <button onClick={() => {
                                                            editContent();
                                                        }}>编辑</button>
                                                        &nbsp;|&nbsp;
                                                    <button className='delBtn' onClick={() => {
                                                            confirmDel();
                                                        }}>删除</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* 分页 */}
                        <GotoPage />
                    </div>
                    {/* 添加用户 */}
                    <div className='adduser'>
                        <div className='name'>
                            <span>昵称 : </span>
                            <input type='text' placeholder='请输入昵称' id='inp_name' required="required" />
                        </div>
                        <div className='id'>
                            <span>手机号 : </span>
                            <input type='text' placeholder='请输入手机号' id='inp_id' required="required" />
                        </div>
                        <div className='id'>
                            <span>密码 : </span>
                            <input type='text' placeholder='请输入密码' id='inp_pwd' required="required" />
                        </div>
                        <div className='id'>
                            <span>确认密码 : </span>
                            <input type='text' placeholder='请再次输入密码' id='inp_pwd_once' required="required" />
                        </div>
                        <button className='save'
                            onClick={() => {
                                if (!(/^[1][3,4,5,7,8,9][0-9]{9}$/.test($('#inp_tel')))) {
                                    alert('请输入有效的手机号');
                                }
                                else {
                                    addAdmin($('#inp_name'), $('#inp_tel'),
                                        $('#inp_pwd'), $('#inp_pwd_once'))
                                }
                            }}>添加</button>
                        <button className='cancel' onClick={() => {
                            document.getElementById('inp_name').value = '';
                            document.getElementById('inp_tel').value = '';
                            document.getElementById('inp_pwd').value = '';
                            document.getElementById('inp_pwd_once').value = '';
                        }}>取消</button>
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        </div >
    );
}

const mapStateToProps = (state) => ({
    userlist: state.userreducer.userlist
})

export default connect(mapStateToProps)(User);
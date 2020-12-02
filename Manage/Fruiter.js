import { Tabs, WhiteSpace } from 'antd-mobile';
import React from 'react';
import './fruiter.css';
import Search_id from './Search_id'
const tabs = [
    { title: '查看果农' },
    { title: '添加果农' }
];

const User = (props) => {
    return (
        <div className="body_right">
            <div className='right_top'>
                <p>果农管理</p>
            </div>
            <div className='right_middle'>
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                    <div className='search_id'>
                        <p>选择查找的ID</p>
                        <Search_id />
                        <table>
                            <tr>
                                <th>编号</th>
                                <th>昵称</th>
                                <th>手机号</th>
                                <th>邮箱</th>
                                <th>城市</th>
                                <th>地址</th>
                                <th>营业时间</th>
                                <th>负责人</th>
                                <th>头像</th>
                                <th>操作</th>
                            </tr>
                        </table>
                    </div>
                    <div className='addfruiter'>
                        <div className='name'>
                            <span>昵称 : </span>
                            <input type='text' placeholder='请输入昵称' id='inp_name'/>
                        </div>
                        <div className='id'>
                            <span>编号 : </span>
                            <input type='text' placeholder='请输入编号' id='inp_id'/>
                        </div>
                        <div className='tel'>
                            <span>手机号 : </span>
                            <input type='text' placeholder='请输入手机号' id='inp_text'/>
                        </div>
                        <div className='e-mail'>
                            <span>邮箱 : </span>
                            <input type='text' placeholder='请输入邮箱' id='inp_mail'/>
                        </div>
                        <div className='city'>
                            <span>城市 : </span>
                            <input type='text' placeholder='请输入城市' id='inp_city'/>
                        </div>
                        <div className='time'>
                            <span>营业时间 : </span>
                            <input type='text' placeholder='请输入营业时间' id='inp_time'/>
                        </div>
                        <div className='person'>
                            <span>负责人 : </span>
                            <input type='text' placeholder='请输入负责人' id='inp_per'/>
                        </div>
                        <button className='save'>保存</button>
                        <button className='cancel'onClick={() => {
                            document.getElementById('inp_name').value='';
                            document.getElementById('inp_id').value='';
                            document.getElementById('inp_text').value='';
                            document.getElementById('inp_mail').value='';
                            document.getElementById('inp_city').value='';
                            document.getElementById('inp_time').value='';
                            document.getElementById('inp_per').value='';
                        }}>取消</button>
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        </div>
    );
}

export default User;

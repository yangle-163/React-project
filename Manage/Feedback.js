import { Tabs, WhiteSpace } from 'antd-mobile';
import React from 'react';
import './feedback.css';
import Search from './Search'
const Feedback = () => {
    return (
        <div className="body_right">
            <div className='right_top'>
                <p>反馈管理</p>
            </div>
            <div className='right_middle'>
                <div className='border'></div>
                <div className='search'>
                    <Search />
                    <table>
                            <tr>
                                <th>账号</th>
                                <th>反馈内容</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </table>
                </div>
            </div>
        </div>
    );
}

export default Feedback;

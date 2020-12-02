import { Tabs, WhiteSpace } from 'antd-mobile';
import React from 'react';
import './community.css';
import Search from './Search'
import Search_img from './Search_img'
import Search_video from './Search_video'
const tabs = [
    { title: '文字管理' },
    { title: '视频管理' },
    { title: '图片管理' }
];

const Community = () => {
    return (
        <div className="body_right">
            <div className='right_top'>
                <p>社区管理</p>
            </div>
            <div className='right_middle'>
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={0} animated={true} useOnPan={false}>
                    <div className='search'>
                        <Search />
                        <table>
                            <tr>
                                <th>编号</th>
                                <th>内容</th>
                                <th>创建时间</th>
                                <th>创建者</th>
                                <th>操作</th>
                            </tr>
                        </table>
                    </div>
                    <div className='search'>
                        <Search_video />
                        <table>
                            <tr>
                                <th>编号</th>
                                <th>视频名</th>
                                <th>创建时间</th>
                                <th>创建者</th>
                                <th>操作</th>
                            </tr>
                        </table>
                    </div>
                    <div className='search'>
                        <Search_img />
                        <table>
                            <tr>
                                <th>编号</th>
                                <th>图片名</th>
                                <th>创建时间</th>
                                <th>创建者</th>
                                <th>操作</th>
                            </tr>
                        </table>
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        </div>
    );
}

export default Community;

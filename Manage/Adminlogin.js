//管理员登录页面
import React, { useEffect } from 'react'
import './adminlogin.css'
import $ from 'jquery'
import { adminLogin } from '../Redux/ActionCreator';
import { connect } from 'react-redux';

const Adminlogin = (props) => {
    useEffect(() => {
        props.dispatch(adminLogin())
    }, []);
    console.log(props);

    let strCode;//正确的验证码的值
    //随机生成验证码
    const createFillImg = () => {
        const codeImg = ["./assets/zAZfB.jpg", "./assets/ZEhUN.jpg",
            "./assets/zFC9H.jpg", "./assets/zhWY9.jpg",
            "./assets/Zin4c.jpg", "./assets/ZITGj.jpg",
            "./assets/zJ6iV.jpg", "./assets/zjsKP.jpg",
            "./assets/ZKc9S.jpg", "./assets/zKDXU.jpg"];
        const img = new Image();
        const randomNum = Math.floor(Math.random() * 10);
        console.log(randomNum);
        console.log(codeImg[randomNum]);
        //判断是否存在子节点，进行验证码的更新
        if (document.getElementById('img_code').children.length === 0) {
            document.getElementById('img_code').appendChild(img);
            img.src = codeImg[randomNum];
        }
        else if (document.getElementById('img_code').children.length !== 0) {
            document.getElementById('img_code').removeChild(document.getElementById('img_code').firstChild);
            document.getElementById('img_code').appendChild(img);
            img.src = codeImg[randomNum];
        }
        strCode = codeImg[randomNum].slice(-9, -4);
        console.log(strCode);
    }
    //获取登录时间
    const currentTime = () => {
        const current_time = new Date().toLocaleString();
        console.log(current_time);
    }
    //判断登录条件
    const ifLogin = () => {
        console.log(props.adminlist);
        for (let flag = 0; flag < props.adminlist.length ; flag++) {
            console.log(props.adminlist[flag].admin_name);
            // console.log(props.adminlist[1].admin_name);
            if (document.getElementsByClassName('admin_email')[0].value === props.adminlist[flag].admin_email
                && document.getElementsByClassName('admin_password')[0].value === props.adminlist[flag].admin_password
                && document.getElementsByClassName('input_code')[0].value === strCode) {
                props.history.push('/systemmanage', { admin_name: props.adminlist[flag].admin_name });
                console.log(546468);
                return;
            }
            else if (document.getElementsByClassName('admin_email')[0].value !== props.adminlist[flag].admin_email) {
                alert("请输入正确的邮箱");
                return;
            }
            else if ((document.getElementsByClassName('admin_email')[0].value === props.adminlist[flag].admin_email)
                && (document.getElementsByClassName('admin_password')[0].value !== props.adminlist[flag].admin_password)) {
                alert("密码输入错误");
                return;
            }
            else if ((document.getElementsByClassName('admin_email')[0].value === props.adminlist[flag].admin_email)
                && (document.getElementsByClassName('admin_password')[0].value === props.adminlist[flag].admin_password)
                && (document.getElementsByClassName('input_code')[0].value !== strCode)) {
                alert("验证码输入错误");
                return;
            }
        }
    }

    //记住密码功能
    $(document).ready(function () {
        var strEmail = localStorage.getItem('keyName');
        var strPass = localStorage.getItem('keyPass');
        if (strEmail) {
            $('.admin_email').val(strEmail);
        }
        if (strPass) {
            $('.admin_password').val(strPass);
        }

    });
    const loginBtn_click = () => {
        const strEmail = $('.admin_email').val();
        const strPass = $('.admin_password').val();
        localStorage.setItem('keyName', strEmail);
        if ($('.keep_password').is(':checked')) {
            localStorage.setItem('keyPass', strPass);
        }
        else {
            localStorage.removeItem('keyPass');
        }
    }

    //回车登录
    $(document).keyup(function (event) {
        if (event.keyCode == 13) {
            $(".login_btn1").trigger("click");
        }
    });

    return (
        <div className="box" >
            <div className="box_head"><span>百果园后台管理系统</span></div>

            <div className="box_body">
                <span className="astudy">百果园</span>
                <input className="admin_email" type="email" placeholder="请输入邮箱" required='requied' />
                <p></p>
                <input className="admin_password" type="password" placeholder="请输入密码" required='requied' />
                <p></p>
                <input className="input_code" placeholder="请输入验证码" required='requied' />
                <div id="img_code">
                </div> {/* 验证码图片 */}
                <p></p>
                <button className="change_code"
                    onClick={() => {
                        createFillImg();
                    }}
                ><span id="get_code">获取验证码</span></button>
                <p></p>
                <input className="keep_password" name="" type="checkbox" />
                <span className="if_keeppassword" >记住密码</span>

                <button className="login_btn1"
                    onClick={() => {
                        ifLogin();
                        currentTime();
                        loginBtn_click();
                    }}
                >登录</button>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    adminlist: state.loginreducer.adminlist
})

export default connect(mapStateToProps)(Adminlogin);
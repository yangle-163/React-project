import React from 'react'
import $ from 'jquery'

const GotoPage = () => {
    var pageSize = 5;    //每页显示的条数
    var curPage = 0;        //当前页
    var lastPage;        //最后页
    var direct = 0;        //方向
    var len;            //总行数
    var page;            //总页数
    var begin;
    var end;


    $(document).ready(function display() {
        len = $(".mytable tr").length - 1;    // 求这个表的总行数，剔除第一行介绍
        console.log(len);
        page = len % pageSize === 0 ? len / pageSize : Math.floor(len / pageSize) + 1;//根据记录条数，计算页数
        // alert("page==="+page);
        curPage = 1;    // 设置当前为第一页
        displayPage(1);//显示第一页

        document.getElementById("btn0").innerHTML = "当前 " + curPage + "/" + page + " 页";    // 显示当前多少页

        $("#btn1").click(function firstPage() {    // 首页
            curPage = 1;
            direct = 0;
            displayPage();
        });
        $("#btn2").click(function frontPage() {    // 上一页
            direct = -1;
            displayPage();
        });
        $("#btn3").click(function nextPage() {    // 下一页
            direct = 1;
            displayPage();
        });
        $("#btn4").click(function lastPage() {    // 尾页
            curPage = page;
            direct = 0;
            displayPage();
        });
        $("#btn5").click(function changePage() {    // 转页
            curPage = document.getElementById("changePage").value * 1;
            if (!/^[1-9]\d*$/.test(curPage)) {
                alert("请输入正整数");
                return;
            }
            if (curPage > page) {
                return;
            }
            direct = 0;
            displayPage();
        });



        len = $(".mytable tr").length - 1;
        page = len % pageSize == 0 ? len / pageSize : Math.floor(len / pageSize) + 1;//根据记录条数，计算页数
        curPage = 1;        //当前页
        direct = 0;        //方向
        // firstPage();
    });
    const displayPage = () => {
        if (curPage <= 1 && direct == -1) {
            direct = 0;
            return;
        } else if (curPage >= page && direct == 1) {
            direct = 0;
            return;
        }

        lastPage = curPage;

        // 当len=1时，curPage计算得0的情况
        if (len > pageSize) {
            curPage = ((curPage + direct + len) % len);
        } else {
            curPage = 1;
        }

        document.getElementById("btn0").innerHTML = "当前 " + curPage + "/" + page + " 页 ";        // 显示当前多少页

        begin = (curPage - 1) * pageSize + 1;// 起始记录号
        end = begin + 1 * pageSize - 1;    // 末尾记录号


        if (end > len) end = len;
        $(".mytable tr").hide();    // 首先，设置这行为隐藏
        $(".mytable tr").each(function (i) {    // 然后，通过条件判断决定本行是否恢复显示
            if ((i >= begin && i <= end) || i == 0)//显示begin<=x<=end的记录
                $(this).show();
        });
    }

    return (
        <div className="goto_page">
            <button id="btn0"></button>
            <button href="#" id="btn1">首页</button>
            <button href="#" id="btn2">上一页</button>
            <button href="#" id="btn3">下一页</button>
            <button href="#" id="btn4">尾页</button>&nbsp;
            <button>转到&nbsp;</button>
            <input id="changePage" type="text" size="1" maxlength="4" />
            <a>页&nbsp;</a>
            <button href="#" id="btn5">跳转</button>
        </div>
    )
}

export default GotoPage;
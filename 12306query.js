// ==UserScript==
// @name         12306 query
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://kyfw.12306.cn/otn/leftTicket/init
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function(){
        var noTicket = $("#no_filter_ticket_6");
        if (noTicket.css("display") == "block") {
            console.log("检测到刷新超时。");
            var query = $("#query_ticket");
            query.click();
            query.click();
            console.log("点击刷新按钮成功。");
        } else {
            console.log("未检测到...");
        }
    }, 1000);
})();

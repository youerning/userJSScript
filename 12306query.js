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
    // change default autoSearchTime to 2000ms
    window.autoSearchTime = 2000;

    // set interval for 2s
    setInterval(function(){
        // find timeout div element
        var noTicket = $("#no_filter_ticket_6");
        // find query button
        var query = $("#query_ticket");

        // if the element display was black, click query button twice
        if (noTicket.css("display") == "block") {
            console.log("检测到刷新超时。");

            // click twice
            query.click();
            query.click();
            console.log("点击刷新按钮成功。");
        // if no train display, click query button twice
        } else if ( $("#train_num_0").length < 1){
            // click twice
            query.click();
            query.click();
        } else {
            console.log("未检测到...");
        }
    }, 1000);
})();

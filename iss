// ==UserScript==
// @name         iss
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ye
// @match        http://www.ishadowsocks.org/
// @grant        none
// ==/UserScript==

(function() {
    var markup = document.documentElement.innerHTML;
    var lis = markup.match(/\w密码\:(\d{8})/g);
    var text = lis.join("\n");

    window.confirm(text);
})();

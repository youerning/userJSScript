"use strict";

var net = require("net");
var repl = require("repl");

var client;
var nickName;
var globalcallback;

function connectSer() {
    client = net.connect({port:8000}, () => {
        console.log("连接服务端成功");
        console.log("input your nickname")
    });

    client.on("data", (data) => {
        var msg = JSON.parse(data.toString())
        globalcallback && globalcallback(null, `\n用户: ${msg.nickname} \n 发送消息: ${msg.msg}\n`);
    });

    client.on("close", () => {
        console.log("退出聊天...");
        process.exit();
    })
    return client;
}


repl.start({
    prompt: "chat >",
    eval: (cmd, context, filename, callback) => {
        cmd = cmd.replace("\n", "");
        if (nickName) {
            if ( cmd === "exit") {
                client.end();
                return 
            }
            var jsonData = JSON.stringify({nickname: nickName, msg: cmd});
            client.write(jsonData);
            globalcallback(null, `发送消息: ${cmd}`);
            return 
        }   
        client = connectSer();
        nickName = cmd;
        globalcallback = callback;
        globalcallback(null, cmd + "\n");
        return
    }
});


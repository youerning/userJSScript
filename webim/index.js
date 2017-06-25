"use strict";

var express = require("express");
var SocketIo = require("socket.io");
var http = require("http");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname, "public")));
var server = http.Server(app);
var io = new SocketIo(server, {
    transports: ["websocket", "polling"],
    path: "/socket.io"
});


var socketMap = new Map;
io.on("connection", (socket) => {
    console.log("客户端: " + socket.id + "进行连接");
    socketMap.set(socket.id, socket);

    socket.on("server.online", (data) => {
        socket.nickName = data;
        console.log("客户端: " + socket.nickName + "已登录");
        io.sockets.emit("client.online", "客户端: " + socket.nickName + "已登录")
    });


    //socket.io server向所有客户端发送消息
    // io.sockets.emit("news", socket.id);
    //该socket.io向其他客户端广播
    // socket.broadcast.emit("news", socket.id);
    // 遍历
    // for (let client of socketMap.values()) {
    //     console.log(client);
    //     if (socket.id != client.id ){
    //         client.emit("news", "welcome");
    //     }
    // }
});

io.set("authorization", (handsharkData, accept) => {
    //console.log(handsharkData.headers);
    //console.log(Array(40).join("="));
    //console.log(handsharkData.headers.cookie);
    //console.log(Array(40).join("="));
    if (false) {
        accept(null, true);
    } else {
        // console.log("False");
        accept(null, true);
    }
    
})


server.listen("8000", (err) => {
    if (err) {
        return console.log(err);
        console.log("conosle===>error==>\n",err);
    }
    console.log("server started at %s", server.address().port);
});

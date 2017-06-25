"use strict";

var net = require("net");

var server = net.createServer();
var sockLis = new Set;

server.on("connection", (sock) => {
    sockLis.add(sock);
    console.log(`当前客户端连接数量: ${sockLis.size}`)
   
    sock.on("data", (data) => {
       sockLis.forEach((client) => {
        if ( sock != client) {
            client.write(data.toString());
        };
       });
    });

    sock.on("close", (flag) => {
        console.log(`客户端连接断开,是否异常: ${flag}`);
    });

    sock.on("error", (err) => {
        console.log(`遇到错误: ${err}`);
    });
    
});

server.on("error", (err) => {
    console.log(`服务端遇到错误: ${err}`);
});


server.listen(8000, () => {
    var addr = server.address();
    console.log("server stated,listen: " + addr.port + ":8000");
    console.dir(addr)
});



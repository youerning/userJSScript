$(document).ready(function() {
    var client = io("http://localhost:8000");
    // var nickName = window.prompt("输入你的昵称: ");
    // client.emit("server.online", nickName);
    // client.on("news", function(data) {
    //    console.log(data);
    // });

    // client.on("client.online", function(data) {
    //     $("#login").fadeIn('slow', function() {
    //         $("#loginInfo").html(data);
    //         setTimeout(function() {
    //             $("#login").fadeOut("slow");
    //         }, 1000);
    //     });
    // })

    $(window).resize(function(event) {
        var cliHeight = document.documentElement.clientHeight;
        var userList = $(".user-list");
        var chatRoom = $(".chat-room");
        var reHeight = cliHeight - userList.offset().top - 10;
        // reHeight > 150? reHeight: reHeight;
        userList.height(reHeight > 150? reHeight: 150);
        chatRoom.height(cliHeight - 20);
    });
    $(window).resize();
});


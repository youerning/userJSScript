"use strict";

var gulp = require("gulp");
var devServer = require("gulp-develop-server");
var notify = require("gulp-notify");

gulp.task("serve", (done) => {
    devServer.listen({
        path: "./index.js"
    });
    done();
});


gulp.task("restart", (done) => {
    devServer.restart();
    done();
});

gulp.task("notify", () => gulp.src("./index.js").pipe(notify("服务重启成功")));
gulp.task("watch", () => {
    gulp.watch(['./*', '!./gulpfile.js', '!package.json'], gulp.series("restart", "notify"));
});

gulp.task("default", gulp.series("serve", "watch"));


/**
 * Created by liuhuan on 2016/8/14.
 */
window.itcast = {};
itcast.transitionEnd = function (dom, callback) {
    if (!dom || typeof dom != "object") {
        return false;
    }
    dom.addEventListener("transitionEnd", function () {
        callback && callback();
    })
    dom.addEventListener("webkitTransitionEnd", function () {
        callback && callback();
    })
}
//封装tap事件
itcast.tap = function (dom, callback) {
    if (!dom || typeof dom != "object") {
        return false;
    }

    var ismove = false;
    var time = 0;

    dom.addEventListener("touchstart", function () {
        time = Date.now();
    })
    dom.addEventListener("touchmove", function () {
        ismove = true;
    })
    window.addEventListener("touchend", function (e) {
        if (!ismove && (Date.now() - time ) < 150) {
            callback && callback(e);
        }
        ismove = false;
        time = 0;
    })
}
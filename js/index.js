/**
 * Created by liuhuan on 2016/8/14.
 */
window.onload = function () {
    search();

    banner();

    downTime();
}

//搜索框部分
function search() {
    /*
     * 1.导航栏渐变  屏幕滚动到 大于banner的高度的时候 颜色的透明度变为固定的0.85  小于的时候随着页面的滚懂透明都增加
     *
     * */
    var header = document.querySelector(".jd_header_box");
    var banner = document.querySelector(".jd_banner");
    var height = banner.offsetHeight;

    var opacity = 0;
    window.onscroll = function () {
        var top = document.body.scrollTop;
        if (top < height) {
            opacity = 0.85 * (top / height)
        } else {
            opacity = 0.85;
        }
        header.style.background = "rgba(201,21,35," + opacity + ")"
    }

}


//banner部分
function banner() {
    //获取对象
    var banner = document.querySelector(".jd_banner");
    var width = banner.offsetWidth;
    var ul = banner.querySelector("ul:first-child");
    var point = banner.querySelector("ul:last-child");
    var points = point.querySelectorAll("li");
    var index = 1;

    var removeTransition = function () {
        ul.style.transition = "none";
        ul.style.webkitTransition = "none";
    }
    var setTranslateX = function (translateX) {
        ul.style.transform = "translateX(" + translateX + "px)"
        ul.style.webkitTransform = "translateX(" + translateX + "px)"
    }
    var setTransition = function () {
        ul.style.transition = "all 0.3s"
        ul.style.webkitTransition = "all 0.3s"
    }

    //1.图片一秒滑动一张图片
    var timer = setInterval(function () {
        index++;
        //ul.style.transform = "translateX(" + (-index * width) + "px)";
        setTransition();
        setTranslateX(-index * width);
        //ul.style.transition = "all 1s";

    }, 1000);
    itcast.transitionEnd(ul, function () {
        if (index >= 9) {
            index = 1;
            removeTransition();
            setTranslateX(-index * width)
        } else if (index <= 0) {
            index = 8;
            removeTransition();
            setTranslateX(-index * width)
        }

        point();
    })
    var point = function () {
        for (var i = 0; i < points.length; i++) {
            points[i].className = "";
        }
        points[index - 1].className = "now";
    }

    /** 3.手指滑动的时候当轮播图滑动 touch事件 记录坐标轴的改变 改变轮播图的定位（位移）
     * 4.当滑动的距离不超过一定距离的时候 需要吸附回去  过渡的形式
     * 5.当滑动超过了一定的距离 需要调到下一张或者上一张（滑动的方向） 一定的距离（屏幕的三分之一）
     * */
    var starX = 0;
    var moveX = 0;
    var disdanceX = 0;
    var ismove = false;
    window.addEventListener("touchstart", function (e) {
        starX = e.touches[0].clientX;
        clearInterval(timer);
    });
    window.addEventListener("touchmove", function (e) {
        moveX = e.touches[0].clientX;
        disdanceX = moveX - starX;

        //记录当前的位置
        removeTransition();
        setTranslateX(-index * width + disdanceX);
        ismove = true;
    })

    window.addEventListener("touchend", function () {

        if (ismove && Math.abs(disdanceX) > width / 3) {
            if (disdanceX > 0) {
                index--;
            } else {
                index++;
            }
            setTransition();
            setTranslateX(-index * width);
        } else {
            setTransition();
            setTranslateX(-index * width);
        }
        starX = 0;
        moveX = 0;
        disdanceX = 0;
        ismove = false;


        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            //ul.style.transform = "translateX(" + (-index * width) + "px)";
            setTransition();
            setTranslateX(-index * width);
            //ul.style.transition = "all 1s";
        }, 1000);

    })

}


function downTime() {
    var time = 4 * 60 * 60;
    var timer = null;
    var sk = document.querySelector(".sk_time");
    var spans = sk.querySelectorAll("span");
    setInterval(function () {
        time--;
        if (time <= 0) {
            return false;
            clearInterval(timer);
        }
        var h = Math.floor(time / 3600);
        var m = Math.floor(time % 3600 / 60);
        var s = time % 60;
        spans[0].innerHTML = Math.floor(h / 10);
        spans[1].innerHTML = h % 10;
        spans[3].innerHTML = Math.floor(m / 10);
        spans[4].innerHTML = m % 10;
        spans[6].innerHTML = Math.floor(s / 10);
        spans[7].innerHTML = s % 10;
    }, 1000)
}
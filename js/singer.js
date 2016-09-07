/**
 * Created by liuhuan on 2016/8/16.
 */
window.onload = function () {
    swiperleft();
    rightSwipe();
}

//功能区 左侧的滑动
function swiperleft() {
    //1.鼠标轻击的时候在移动端 获取位置 左侧的导航随着鼠标的移动上下移动
    //touch事件

    //获取标签对象
    var parent = document.querySelector(".category_left");
    var parentheight = parent.offsetHeight;
    var child = parent.querySelector("ul");
    var childheight = child.offsetHeight;
    var lis = child.querySelectorAll("li");

    //封装公共方法
    var removeTransition = function () {
        child.style.transition = "none";
        child.style.webkitTransition = "none";
    }
    var addTransition = function () {
        child.style.transition = "all 0.3s"
        child.style.webkitTransition = "all 0.3s"
    }
    var setTransform = function (translateY) {
        child.style.transform = "translateY(" + (translateY) + "px)"
        child.style.webkitTransform = "translateY(" + (translateY) + "px)"
    }

    var dis = 150;
    //定义定位的位置  最大的定位的位置  和最小的定位的位置
    var maxposition = 0;
    var minposition = parentheight - childheight;
    //定义最大的滑动的距离
    var maxswiper = maxposition + dis;
    var minswiper = minposition - dis;

    var current = 0;
    //初始化变量
    var starY = 0;
    var moveY = 0;
    var distance = 0;
    var ismove = false;


    //鼠标触摸ul的时候获取位置
    child.addEventListener("touchstart", function (e) {
        starY = e.touches[0].clientY;
    })
    //鼠标移动的时候 获取移动的位置 计算距离
    child.addEventListener("touchmove", function (e) {
        moveY = e.touches[0].clientY;
        distance = moveY - starY;
        removeTransition();

        //可以在一定的范围内滑动
        if ((current + distance) < maxswiper && (current + distance) > minswiper) {
            setTransform(current + distance);

            ismove = true;
        }

    })

    //鼠标离开的时候 吸附回去 设置定位的位置  如果移动的距离大于最大的滑动距离就不可以滑动 离开吸附回去  如果移动的距离小于了最小的移动距离就等于最小的距离
    window.addEventListener("touchend", function (e) {
        if (current + distance > maxposition) {
            current = maxposition;
            addTransition();
            setTransform(current)
        } else if (current + distance < minposition) {
            current = minposition;
            addTransition();
            setTransform(current);
        } else {
            //能进到这里说明 在正常滑动的范围内滑动
            current = current + distance;
        }
        //重置参数
        starY = 0;
        moveY = 0;
        distance = 0;
        ismove = false;
    });

    //点击每个li 的时候  向上滑动对应的位置  索引*每个li的高度
    //在移动端 如果注册点击事件 每次点击后 会延迟300Ms 用户体验不好 封装tap事件
    itcast.tap(child, function (e) {
        var tapli = e.target.parentNode;
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].className = "";
        }
        tapli.className = "now";

        //并且向上滑动
        var translateY = -50 * tapli.index;
        //判断 ul的高度和向上滑动的距离做比较 如果小于的话 就像上移动 否则的话就等于最小的高度
        if (translateY > minposition) {
            current = translateY;
            addTransition();
            setTransform(current);
        } else {
            current = minposition;
            addTransition();
            setTransform(minposition);
        }
    })
}





//右侧
function rightSwipe(){
    /*插件的掉*/
    itcast.iScroll({
        swipeDom:document.querySelector('.category_right'),
        swipeType:'y',
        swipeDistance:100
    });
};

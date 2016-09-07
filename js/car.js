/**
 * Created by liuhuan on 2016/8/18.
 */

window.onload = function () {
    animate()
}
function animate() {
    //点击 删除按钮的时候  弹出层显示 删除按钮盖子打开

    //获取标签对象
    //所有的删除按钮
    var delates = document.querySelectorAll(".delete")
    //弹出层
    var win = document.querySelector(".jd_win");
    //弹出层的盒子
    var winbox = document.querySelector(".jd_win_box");
    var cheched = document.querySelector(".shopping-title:first-child");
    var checheds = document.querySelectorAll(".jd_check");

    var up = document.querySelector(".delete_up")
    var cancle = document.querySelector(".cancle")
    for (var i = 0; i < delates.length; i++) {
        delates[i].onclick = function () {
            win.style.display = 'block';
            winbox.className = "jd_win_box animate";
            up.style.transform = "rotate(-30deg)";
            up.style.webkitTransform = "rotate(-30deg)";
        }
    }
    cancle.onclick = function () {
        win.style.display = 'none';
        winbox.className = "jd_win_box";
        up.style.transform = "none";
        up.style.webkitTransform = "none";
    }
    /*cheched.onclick = function () {
        for (var i = 0; i < checheds.length; i++) {
            checheds[i].setAttribute("checked","checked");
        }*/
   // }


}

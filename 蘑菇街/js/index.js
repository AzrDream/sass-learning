window.onload = function () {
    // 1.初始化顶部的导航
    initNav();
    // 2.初始化控制文字行数的代码
    initTextRow();
};
function initTextRow() {
    /*
    // 1.拿到需要操作的元素
    let oDes = document.querySelector(".mask-des");
    // 2.拿到行高
    let lineHeight = parseFloat(getComputedStyle(oDes).lineHeight);
    // 3.拿到元素的行高
    let height = parseFloat(getComputedStyle(oDes).height);
    // 4.判断元素的高度是否超出了3倍的行高
    if(height > (3 * lineHeight)) {
        oDes.style.height = (3 * lineHeight) + "px";
        oDes.style.overflow = "hidden";
    }
     */
    let oDes = document.querySelector(".mask-des");
    $clamp(oDes,{clamp: 2});
}
function initNav() {
    // 1.拿到原有的顶部的导航
    let oNav = document.querySelector(".nav");
    let oNav2 = document.querySelector(".nav2");
    // 2.拿到原有的顶部导航的高度
    let navHeight = oNav.offsetHeight;
    // 3.监听网页的滚动事件
    window.onscroll = function () {
        // 4.获取到滚动出去的范围
        let offsetY = getPageScroll().y;
        // 5.判断滚动出去的高度是否已经超过了原有顶部导航的高度
        if(offsetY >= navHeight) {
            // 显示吸顶的导航
            oNav2.style.top = "0px";
        }else{
            // 隐藏吸顶的导航
            oNav2.style.top = "-100px";
        }
    }
}

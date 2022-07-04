window.onload = function () {
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
};

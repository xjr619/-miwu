/**
 * Created by Administrator on 2017/11/1.
 */

$(function(){
    //头部js
    $("#game_menu").hover(function () {
        //鼠标移入到游戏目录
        $(this).stop();
        $("#headerMenu").slideDown(200);
    });
    $("#game_menu").siblings().mouseover(function () {
        //鼠标移到游戏目录兄弟元素上
        $("#headerMenu").stop();
        $("#headerMenu").hide();
    })
    $("#headerMenu").on("mouseout",function () {
        //出现的图鼠标移出自己的范围
        $("#headerMenu").stop();
        $("#headerMenu").hide();
    })
    //让微信图片显示和影藏
    $("#wxTransparent").hover(function () {
        console.log(1)
        $(".wx").show(50)
    },function () {
        $(".wx").hide();
    })
    //第一版加载!!!!
    $(window).load(function () {
        $(".part1").addClass("pat1currentTop");
        $(".case").addClass("pat1currentTop");
        $(".part1-main1").addClass("part1Carousel1");
    })
    //上边轮播图变形
    $(".m1bannerIndex span").mouseover(function () {
        $(this).addClass("on").siblings().removeClass("on");
    })
    //鼠标移到相应的原点进行图片切换
    $(".m1bannerIndex span:first-child").hover(function () {
        clearInterval(bannerTime1);
        $(".part1-main1-left-banner").animate({left:0},500)
    },function () {
        bannerTime1 =setInterval(Carousel1,1000);
    })
    $(".m1bannerIndex span:last-child").hover(function () {
        clearInterval(bannerTime1);
        $(".part1-main1-left-banner").animate({left:"-"+p1ImgWidth+ "px"},500)
    },function () {
        bannerTime1 =setInterval(Carousel1,1000);
    })
    //根据索引来切换图片和小点样式自调用函数
    // ;(function bannerBo() {
    //     $(".part1-main1-left-banner").animate({left:"-496px"},3000,function () {
    //         $(".part1-main1-left-banner").animate({left:0},3000,bannerBo);
    //     })
    // })()

    //轮播图1函数
    function Carousel1() {
        if(index1 ==main1Images.length-1){
            $(".part1-main1-left-banner").css("left",0);
            index1 = 0;
        }
        index1++;
        $(".part1-main1-left-banner").animate({left:index1*-p1ImgWidth+"px"});
        for(var i = 0;i<Indexspans.length;i++){
            Indexspans.eq(i).removeClass("on");
        }
        if(index1 ==main1Images.length-1){
            Indexspans.eq(0).addClass("on");
        }else {
            Indexspans.eq(index1).addClass("on");
        }
    }
    //得到图片的宽度
    var p1ImgWidth =$(".part1-main1-left-banner img").eq(0).outerWidth();
    var index1 = 0;
    var Indexspans =$(".m1bannerIndex span");
    var main1Images = $(".part1-main1-left-banner").children();
    var bannerTime1 = setInterval(Carousel1,1000)
    //点击关闭视频
    $(".video-all .close").on("click",function () {
        $(".part1 .video-all").hide();
        $("#video1")[0].pause();
    })
    //点击视频显示重新加载视频
    $(".part1-rotate-video").on("click",function () {
        $(".part1 .video-all").show(1000);
        $("#video1")[0].load();
        $("#video1")[0].play();
    })
    //视频播放完自动关闭
    var part1Video = document.querySelector("#video1");
    // part1Video.addEventListener('ended',function(){
    //    $(".video-all").hide(1000);
    // });
    $(part1Video).on("ended",function () {
        $(".video-all").hide(1000);
    })
    //可视区域显示函数
        function scrollSee(element,classCurrent) {
            $(window).scroll(function () {
                //得到可视区域高度
                var windowHeight = $(window).outerHeight();
                // console.log(windowHeight)
                //得到滚动高度
                var scrollTop = $(window).scrollTop();
                // console.log(scrollTop)
                var offsetTop = element.offset().top;

                //当滚动距离和和可视高度达到元素距离
                if(windowHeight + scrollTop>=offsetTop){
                    element.addClass(classCurrent);

                }else{
                    element.removeClass(classCurrent);
                }
            })
        }

        //调用函数
    var part1Main2 = $("#part1Main2");
    scrollSee(part1Main2,"par1currentmain2");
    //点击切换图片

        $(".part1-main2-right .indexs>span").on("mouseover",function () {
            clearInterval(time2);
            //当前得到样式，兄弟去除样式
                $(this).addClass("onselect").siblings().removeClass("onselect");
            //得到当前索引
               var index = $(this).index();
            //得到装背景的div
                var banners = $(".part1-main2-right .banners div");
            //得到背景图对应的索引
                var selectIndex = banners.length-1-index;
            banners.eq(selectIndex).addClass("onselect").siblings().removeClass("onselect");
            //小图索引跟背景一样
            var imgs = $(".part1-main2-right .roles img");
            imgs.eq(selectIndex).addClass("onselect").siblings().removeClass("onselect");
        })
    $(".part1-main2-right .indexs>span").on("mouseout",function () {
        time2 = setInterval(Carousel2,3000)
    })
    //中部右边轮播
    var img2s = $(".part1-main2-right .roles img");
    var bans2 =$(".part1-main2-right .banners div");
    var indexs2 = $(".part1-main2-right .indexs span");
    var items2 = $(".part1-main2-right .roles img").length;
    var index2 = 0;
    //第二部分轮播函数
    function Carousel2() {
            if(index2 == items2-1){
                index2 = -1;
            }
            index2++;
            var indexOther = items2-1-index2;
            indexs2.eq(index2).addClass("onselect").siblings().removeClass("onselect");
            bans2.eq(indexOther).addClass("onselect").siblings().removeClass("onselect");
            img2s.eq(indexOther).addClass("onselect").siblings().removeClass("onselect");
    }
    var time2=setInterval(Carousel2,3000);
    //第二部分大图选择
    var part2BigImgs = $(".part2 .part2BigImg img");
    var arrowLeft = $(".part2 .arrow-left");
    var arrowRight = $(".part2 .arrow-right");
    var part2BigImgsLen =  $(".part2 .part2BigImg").length;
    var part2Index = 1;
    var nameArr = ["夜莺","贝露丝","戴安娜","爱尔隆","安德"];
    arrowRight.on("click",function () {
        //点击右边箭头
        if(part2Index ==5){
            part2Index = 0;
        }
        part2Index++;
        var imgindex1 = part2BigImgsLen-1-part2Index;
        part2BigImgs.eq(imgindex1).addClass("onselect").siblings().removeClass("onselect");
        if(part2BigImgs.eq(4).hasClass("onselect")){
            $(".part2 h2").text("安德");
            $(".part2 .part2-top>.toptext").text("预言之子");
            $(".part2 .role-pro").text("羁绊 :  全体魔法强度+2.0%");
            $(".part2-bottoom .role1 i").addClass("onselect").parent().siblings().children("i").removeClass("onselect");
        }else if(part2BigImgs.eq(3).hasClass("onselect")){
            $(".part2 h2").text("爱尔隆");
            $(".part2 .part2-top>.toptext").text("荆棘射手");
            $(".part2-bottoom .role2 i").addClass("onselect").parent().siblings().children("i").removeClass("onselect");
            $(".part2 .role-pro").text("羁绊 : 全体最大生命+2.0%");
        }else if(part2BigImgs.eq(2).hasClass("onselect")){
            $(".part2 h2").text("戴安娜");
            $(".part2 .part2-top>.toptext").text("光之射手");
            $(".part2 .role-pro").text("羁绊 : 全体物理攻击+2.0%");
            $(".part2-bottoom .role3 i").addClass("onselect").parent().siblings().children("i").removeClass("onselect");
        }else if(part2BigImgs.eq(1).hasClass("onselect")){
            $(".part2 h2").text("贝露丝");
            $(".part2 .part2-top>.toptext").text("灵魂法师");
            $(".part2 .role-pro").text("羁绊 : 全体魔法抗性+2.0%");
            $(".part2-bottoom .role4 i").addClass("onselect").parent().siblings().children("i").removeClass("onselect");
        }else if(part2BigImgs.eq(0).hasClass("onselect")){
            $(".part2 h2").text("夜莺");
            $(".part2 .part2-top>.toptext").text("幻影战士");
            $(".part2 .role-pro").text("羁绊 :  全体物理攻击+2.0%");
            $(".part2-bottoom .role5 i").addClass("onselect").parent().siblings().children("i").removeClass("onselect");
        }
        //点击箭头右边整体执行动画
        $(".part2 .part2-left").animate({
            marginLeft:100,
            opacity:0
        },500,function () {
            $(this).animate({
                marginLeft:0,
                opacity:1
            },500)
        });

    })
    arrowLeft.on("click",function () {
        //点击左边箭头
        if(part2Index ==0){
            part2Index = 5;
        }
        part2Index--;
        var imgindex1 = part2BigImgsLen-1-part2Index;
        part2BigImgs.eq(imgindex1).addClass("onselect").siblings().removeClass("onselect");
        console.log(part2Index)
        if(part2BigImgs.eq(4).hasClass("onselect")){
            $(".part2 h2").text("安德");
            $(".part2 .part2-top>.toptext").text("预言之子");
            $(".part2 .role-pro").text("羁绊 :  全体魔法强度+2.0%");
     $(".part2-bottoom .role1 i").addClass("onselect").parent().siblings().children("i").removeClass("onselect");

        }else if(part2BigImgs.eq(3).hasClass("onselect")){
            $(".part2 h2").text("爱尔隆");
            $(".part2 .part2-top>.toptext").text("荆棘射手");
            $(".part2 .role-pro").text("羁绊 : 全体最大生命+2.0%");
            $(".part2-bottoom .role2 i").addClass("onselect").parent().siblings().children("i").removeClass("onselect");
        }else if(part2BigImgs.eq(2).hasClass("onselect")){
            $(".part2 h2").text("戴安娜");
            $(".part2 .part2-top>.toptext").text("光之射手");
            $(".part2 .role-pro").text("羁绊 : 全体物理攻击+2.0%");
            $(".part2-bottoom .role3 i").addClass("onselect").parent().siblings().children("i").removeClass("onselect");
        }else if(part2BigImgs.eq(1).hasClass("onselect")){
            $(".part2 h2").text("贝露丝");
            $(".part2 .part2-top>.toptext").text("灵魂法师");
            $(".part2 .role-pro").text("羁绊 : 全体魔法抗性+2.0%");
            $(".part2-bottoom .role4 i").addClass("onselect").parent().siblings().children("i").removeClass("onselect");
        }else if(part2BigImgs.eq(0).hasClass("onselect")){
            $(".part2 h2").text("夜莺");
            $(".part2 .part2-top>.toptext").text("幻影战士");
            $(".part2 .role-pro").text("羁绊 :  全体物理攻击+2.0%");
            $(".part2-bottoom .role5 i").addClass("onselect").parent().siblings().children("i").removeClass("onselect");
        }
        //点击左箭头左边整体执行动画
        $(".part2 .part2-left").animate({
            marginLeft:100,
            opacity:0
        },500,function () {
           $(this).animate({
               marginLeft:0,
               opacity:1
           },500)
        });
    })
    //第二版滚动可见，调用函数
    var part2 = $(".part2");
    var part2Left = $(".part2-left");
    scrollSee(part2,"part2Current");
    scrollSee(part2Left,"part2LeftNow");
    //第三部分js
    //点击右方向变化
    var part3Index = 0;
    var slides = $(".part3 .slide");
    var part3ImgW = slides.eq(0).width();
    $("#part3ArrowR").on("click",function () {
        if(part3Index ==slides.length-1){
            part3Index = 0;
           $("#part3Wap").css("marginLeft",0);
        }
        part3Index++;
        $("#part3Wap").stop();
            $("#part3Wap").animate({
                marginLeft:-part3ImgW*part3Index
            },1000);

    })
    //右箭头鼠标移入移出
    $("#part3ArrowR").hover(function () {
        clearInterval(part3Timer)
    },function () {
        part3Timer = setInterval(function () {
            if(part3Index ==slides.length-1){
                part3Index = 0;
                $("#part3Wap").css("marginLeft",0);
            }
            part3Index++;
            $("#part3Wap").stop();
            $("#part3Wap").animate({
                marginLeft:-part3ImgW*part3Index
            },1000);
        },1500)
    })
    //点击左边开始变化
    $("#part3ArrowL").on("click",function () {
        if(part3Index == 0){
            part3Index = slides.length-1;
            $("#part3Wap").css("margin-left",part3Index * part3ImgW * -1 +"px");

        }
        part3Index--;
        $("#part3Wap").stop();
        $("#part3Wap").animate({
            marginLeft:-1349*part3Index
        },1000);
    })
    //左边鼠标移入移出
    $("#part3ArrowL").hover(function () {
        clearInterval(part3Timer);
    },function () {
        part3Timer = setInterval(function () {
            if(part3Index ==slides.length-1){
                part3Index = 0;
                $("#part3Wap").css("marginLeft",0);
            }
            part3Index++;
            $("#part3Wap").stop();
            $("#part3Wap").animate({
                marginLeft:-part3ImgW*part3Index
            },1000);
        },1500)
    })
    //自动轮播
    var part3Timer = setInterval(function () {
        if(part3Index ==slides.length-1){
            part3Index = 0;
            $("#part3Wap").css("marginLeft",0);
        }
        part3Index++;
        $("#part3Wap").stop();
        $("#part3Wap").animate({
            marginLeft:-part3ImgW*part3Index
        },1500);
        $(".part3 .slide ").eq(part3Index).addClass("onselect").siblings().removeClass("onselect");
        console.log(part3Index);

    },3000)
    //第三版滚动可见
    var part3 = $(".part3");
    var part3SlideTop = $(".part3 .slideTop");
    scrollSee(part3,"part3Current");
    scrollSee(part3SlideTop,"part3SlideTopNow");
    //图片缩放

    $(".part4-main-content-right li a").hover(function () {
        $(this).children("img").css("transform","scale(1.5)")
    },function () {
        $(this).children("img").css("transform","scale(1)")
    })
    //底部滚动可见
    var part4See =$(".part4");
    scrollSee(part4See,"part4See");
    //音乐滚动条
    var bars = $(".bar");
    var barchanges = $(".barchange");
    barchanges.on("mousedown",function (e) {
        //记录事件对象到左边的距离
        var mouseL2 = e.offsetX;
        $(this).children("img").width(mouseL2);
    })

    bars.on("mousedown",function (e) {
        //记录事件对象到左边的距离
        var mouseL = e.offsetX;
        $(this).width(mouseL);
    })
    //音乐
    $(".part4-role img").hover(function () {
        $(".part4-role i:last-child").addClass("musicstop").removeClass("musicmove");
    },function () {
        $(".part4-role i:last-child").addClass("musicmove").removeClass("musicstop");
    })

});
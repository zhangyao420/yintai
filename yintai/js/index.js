/*************************************************/
//侧导航
$(".cd").hover(function(){
	var index=$(this).index();
	$(".cdnr").css({display:"none"}).eq(index).css({display:"block"})
	$(".cd>span").css({display:"block"}).eq(index).css({display:"none"})
},function(){
	$(".cdnr").css({display:"none"})
	$(".cd>span").css({display:"block"})
})



/*************************************************/
//banner
$(".bannertu").fadeOut(0).eq(0).fadeIn(0);
$(".bannerboxtu>div").fadeOut(0).eq(0).fadeIn(0);
$(".btn").css({background:"#000"}).eq(0).css({background:"#e5004f"})
var num=0;
function Banner() {
	num++;
    if (num>=$(".bannertu").length) {
    	num=0;
    };
    $(".bannertu").fadeOut(500).eq(num).fadeIn(1000);
    $(".bannerboxtu>div").fadeOut(500).eq(num).fadeIn(1000);
    $(".btn").css({background:"#000"}).eq(num).css({background:"#e5004f"})
}
var t=setInterval(Banner,2000)
$(".btn").each(function(index,obj){
    $(".btn").stop()
	$(obj).mouseover(function(){
        $(".bannerboxtu>div").fadeOut(500).eq(index).fadeIn(1000);
        $(".bannertu").fadeOut(500).eq(index).fadeIn(1000);
        $(".btn").css({background:"#000"}).eq(index).css({background:"#e5004f"})
        num=index;
    })
})
$(".banner").hover(function(){
    clearInterval(t)
    $(".left").css({display:"block"})
    $(".right").css({display:"block"})
},function(){
    t=setInterval(Banner,2000);
    $(".left").css({display:"none"})
    $(".right").css({display:"none"})
});
$(".left").click(function(){
    num--;
    if (num<=-1) {
    	num=$(".bannerboxtu>div").length-1;
    };
    $(".bannerboxtu>div").fadeOut(500).eq(num).fadeIn(1000);
    $(".bannertu").fadeOut(500).eq(num).fadeIn(1000);
    $(".btn").css({background:"#000"}).eq(num).css({background:"#e5004f"})
    });
$(".right").click(function(){
    Banner();
});



/*************************************************/
//下拉框1
$(".lianjie").hover(function(){
	$(".ewm").stop(true,true)
	var index=$(this).index()
	$(".ewm",this).eq(index).slideDown(500)
},function(){
	$(".ewm").stop(true,true)
	var index=$(this).index()
	$(".ewm",this).eq(index).slideUp(500)
})



/*************************************************/
//下拉框2
$(".wdyt").hover(function(){
	var index=$(this).index(".wdyt")
	$(".xialacaidan").stop(true,true)
	$(".xialacaidan").eq(index).slideDown(500)
},function(){
	var index=$(this).index(".wdyt")
	$(".xialacaidan").stop(true,true)
	$(".xialacaidan").eq(index).slideUp(500)
})


/*************************************************/
//选项卡1
$(".biaotis").first().css({borderBottom:"5px solid #e5004f"});
$(".jiantou").first().css({display:"block"});
$(".biaotis").first().css({fontWeight:"bold"});
$(".biaotis").mouseover(function(){
	var index=$(this).index();
	$(".biaotinr").css({display:"none"}).eq(index).css({display:"block"});
	$(".biaotis").css({borderBottom:" 5px solid #333"}).eq(index).css({borderBottom:"5px solid #e5004f"});
	$(".jiantou").css({display:"none"}).eq(index).css({display:"block"});
	$(".biaotis").css({fontWeight: "normal"}).eq(index).css({fontWeight: "bold"});
})


/*************************************************/
//选项卡2
$(".xuanxiangk").first().css({borderBottom:"3px solid #e5004f"});
$(".jt").first().css({display:"block"});
$(".xuanxiangk").mouseover(function(){
	var index=$(this).index();
	$(".xxknr").css({display:"none"}).eq(index).css({display:"block"});
	$(".xuanxiangk").css({borderBottom:"3px solid #333"}).eq(index).css({borderBottom:"3px solid #e5004f"});
	$(".jt").css({display:"none"}).eq(index).css({display:"block"});
})


/*************************************************/
// 边框1
$(".btnr").hover(function(){
	$(".nrtop").stop(true,true)
	$(".nrlefts").stop(true,true)
	$(".nrbottom").stop(true,true)
	$(".nrrights").stop(true,true)
	var index=$(this).index();
    $(".nrtop",this).animate({width:"222px"},500)
    $(".nrlefts",this).animate({height:"262px"},500)
    $(".nrbottom",this).animate({width:"222px"},500)
    $(".nrrights",this).animate({height:"262px"},500)
},function(){
	$(".nrtop").stop(true,true)
	$(".nrlefts").stop(true,true)
	$(".nrbottom").stop(true,true)
	$(".nrrights").stop(true,true)
	var index=$(this).index();
    $(".nrtop",this).animate({width:"0"},500)
    $(".nrlefts",this).animate({height:"0"},500)
    $(".nrbottom",this).animate({width:"0"},500)
    $(".nrrights",this).animate({height:"0"},500)
})



/*************************************************/
// 边框2
$(".benzhoutj").hover(function(){
	$(".nr").stop(true,true)
	$(".nrls").stop(true,true)
	$(".nrb").stop(true,true)
	$(".nrrs").stop(true,true)
	var index=$(this).index();
    $(".nrt",this).animate({width:"200px"},500)
    $(".nrls",this).animate({height:"250px"},500)
    $(".nrb",this).animate({width:"200px"},500)
    $(".nrrs",this).animate({height:"250px"},500)
},function(){
	$(".nrt").stop(true,true)
	$(".nrls").stop(true,true)
	$(".nrb").stop(true,true)
	$(".nrrs").stop(true,true)
	var index=$(this).index();
    $(".nrt",this).animate({width:"0"},500)
    $(".nrls",this).animate({height:"0"},500)
    $(".nrb",this).animate({width:"0"},500)
    $(".nrrs",this).animate({height:"0"},500)
})



/*************************************************/
// 边框3
$(".nrr").hover(function(){
	$(".snrtop").stop(true,true)
	$(".snrlefts").stop(true,true)
	$(".snrbottom").stop(true,true)
	$(".snrrights").stop(true,true)
	var index=$(this).index();
    $(".snrtop",this).animate({width:"272px"},500)
    $(".snrlefts",this).animate({height:"182px"},500)
    $(".snrbottom",this).animate({width:"272px"},500)
    $(".snrrights",this).animate({height:"182px"},500)
},function(){
	$(".snrtop").stop(true,true)
	$(".snrlefts").stop(true,true)
	$(".snrbottom").stop(true,true)
	$(".snrrights").stop(true,true)
	var index=$(this).index();
    $(".snrtop",this).animate({width:"0"},500)
    $(".snrlefts",this).animate({height:"0"},500)
    $(".snrbottom",this).animate({width:"0"},500)
    $(".snrrights",this).animate({height:"0"},500)
})




/*************************************************/
// 两个图切换动画
	$(".nrmiddle>a").css({left:"390px"}).eq(0).css({left:"0px"});
	$(".btnn").css({background:"#ccc"}).eq(0).css({background:"#e5004f"})
	$(".zuoj").click(function(){
		var index=$(this).index(".nrmiddle>a")
		if (index>=0) {
			return
		}else{
			$(".nrmiddle>a").eq(1).animate({left:"390px"},500);
			$(".nrmiddle>a").eq(0).animate({left:"0px"},500);
			$(".btnn").css({background:"#ccc"}).eq(0).css({background:"#e5004f"})
		}
	})
	$(".youj").click(function(){
		var index=$(this).index(".nrmiddle>a")
		if (index>=1) {
			return
		}else{
			$(".nrmiddle>a").eq(1).animate({left:"0px"},500);
			$(".nrmiddle>a").eq(0).animate({left:"-390px"},500);
			$(".btnn").css({background:"#ccc"}).eq(1).css({background:"#e5004f"})
		}
	})
	$(".btnn").eq(0).mouseover(function(){
		$(".nrmiddle>a").stop(true,true)
        var index=$(this).index(".nrmiddle>a")
		if (index>=0) {
			return
		}else{
			$(".nrmiddle>a").eq(1).animate({left:"390px"},500);
			$(".nrmiddle>a").eq(0).animate({left:"0px"},500);
			$(".btnn").css({background:"#ccc"}).eq(0).css({background:"#e5004f"})
		}
	})
	$(".btnn").eq(1).mouseover(function(){
		$(".nrmiddle>a").stop(true,true)
        var index=$(this).index(".nrmiddle>a")
		if (index>=1) {
			return
		}else{
			$(".nrmiddle>a").eq(1).animate({left:"0px"},500);
			$(".nrmiddle>a").eq(0).animate({left:"-390px"},500);
			$(".btnn").css({background:"#ccc"}).eq(1).css({background:"#e5004f"})
		}
	})
	$(".nrmiddle").hover(function(){
	    $(".zuoj",this).css({display:"block"})
	    $(".youj",this).css({display:"block"})
	},function(){
		$(".zuoj",this).css({display:"none"})
		$(".youj",this).css({display:"none"})
	})



/*************************************************/
//logo动画
$(".jiantoubox").click(function(e){
     var ev=e||window.event;
     if(ev.preventDefault){
          ev.preventDefault()
     }else{
          ev.returnValue=false;
     };
     var evafa=$(this).prev(".pm-box");
     $(".pm-leftbox>div:first",$(evafa)).before($(".pm-leftbox>div:last",$(evafa)));
     $(".pm-leftbox",$(evafa)).stop(true,true); 
     $(".pm-leftbox",$(evafa)).animate({"left":"-170px"},0);  
     $(".pm-leftbox",$(evafa)).animate({"left":"0px"},500);  
});
$(".jiantourbox").click(function(e){
     var ev=e||window.event;
      if(ev.preventDefault){
          ev.preventDefault()
     }else{
          ev.returnValue=false;
     };
     var evafa=$($(this).prev("a")).prev(".pm-box");
     $(".pm-leftbox",$(evafa)).stop(true,true); 
     $(".pm-leftbox",$(evafa)).animate({"left":"-170px"},500,function(){
     $(".pm-leftbox",$(evafa)).css({"left":"0px"});
     $(".pm-leftbox>div:last",$(evafa)).after($(".pm-leftbox>div:first",$(evafa))); 
     });
});



/*************************************************/
//楼层跳转
$(window).scroll(function(){
	var tops=$(window).scrollTop();
	if (tops>=$(".shishangmingpin").position().top-100) {
		$(".loucengbox").fadeIn(1000);
	}else{
		$(".loucengbox").fadeOut(1000);
	};
   //楼层颜色变化
	$(".louceng").each(function(index){
		if (tops>=$(".shishangmingpin").eq(index).offset().top-50) {
			$(".louceng").css({background:""}).css({color:""}).eq(index).css({background:"#e5004f"}).css({color:"#fff"})
		};
	})
   //楼层点击效果
	$(".louceng").click(function(){
		var index=$(this).index(".louceng")
		if(index<=8){
			var fixdtop={st:tops}
			$(fixdtop).animate({st:$(".shishangmingpin").eq(index).offset().top},{
				speed:1000,
				step:function(){
					$(window).scrollTop(fixdtop.st)
				}
			})
		}
	})
   //返回顶部
    $(".fhdb").click(function(){
		var navtop={st:tops};
		$(navtop).animate({st:1},{
			speed:1000,
			step:function(){
				$(window).scrollTop(navtop.st)
			}
		})
	})
})



/*************************************************/
//图片的按需加载
/*var ch=$(window).height();//浏览器高
$("shishangmingpin").each(function(i){
	if ($("shishangmingpin")[i].offsetTop<=tops+ch) {
        var imgs=$("img",$("shishangmingpin")[i])
        var index=$(this).index("imgs");
        var Images=imgs(index).getAttribute("date-src");
        imgs[index].src=gg
})*/
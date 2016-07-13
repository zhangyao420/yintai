//返回顶部
jQuery.extend({
	backTop:function(obj){
        $(window).on("scroll",function(){
			var tops=$(window).scrollTop();
			if(tops>=300){
				$(obj).fadeIn(600)
			}else{
				$(obj).fadeOut(600);
			}
			$(obj).click(function(){
				var obj={st:tops}//创建一个普通对象

				$(obj).animate({st:0},{
					//将创建的普通对想打包成jquery对象，然后加动画
					speed:1000,step:function(){
						$(window).scrollTop(obj.st)
					}
				})
			})
		})
	}
})
/******************************************************/
//选项卡
jQuery.extend({
	option:function(obj1,obj2){
		$(obj1).click(function(){
			var index=$(this).index();
			$(obj2).hide().eq(index).show();
		})
	}
})
/********************************************************/
//添加滚轮事件
jQuery.fn.extend({
	mousewheel:function(up,down){
        this.each(function(index,nowobj){
        	if(nowobj.attachEvent){
                nowobj.attachEvent("onmousewheel",scrollFn);
            }else if(nowobj.addEventListener){
                nowobj.addEventListener("mousewheel",scrollFn,false);
                nowobj.addEventListener("DOMMouseScroll",scrollFn,false);
            }
            function scrollFn(e) {
                var ev=e||window.event;
                var val=ev.detail||ev.wheelDelta
                if (ev.preventDefault) {
                	ev.preventDefault()
                }else{
                	ev.returnValue=false;
                }
                if (val==-3||val==120) {
                    up.call(this)
                }else if (val==3||val==-120) {
                    down.call(this)
                };
            }
        })
	}
})
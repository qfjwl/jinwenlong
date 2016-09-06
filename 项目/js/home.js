$(function(){
	//----------------头部--------------透明度改变-------------------
	$(".container > a").each(function(){
		opa(this);
	});


	//----------------title--------------透明度改变-------------------
	$(".title-right > ul > li > a").each(function(){
		opa(this);
	});
	//划过出现登录菜单信息
	$(".tit-right-li1 > a").hover(
		function(){
			$(".logon").css({"display": "block"})
		},
		function(){
			$(".logon").css("display", "none")
		}
	)
	show(".logon")
	//登录餐单里面划过变色
	$(".logon a").each(function(){
		color(this);
	})
	//我的邦购菜单信息
	$(".tit-right-li3 > a").hover(
		function(){
			$(".myBangGou").css({"display": "block"})
		},
		function(){
			$(".myBangGou").css("display", "none")
		}
	)
	show(".myBangGou");
	$(".myBangGou a").each(function(){
		color(this);
	})
	//我的邦购菜单信息
	$(".tit-right-li4 > a").hover(
		function(){
			$(".loadApp").css({"display": "block"})
		},
		function(){
			$(".loadApp").css("display", "none")
		}
	)
	show(".loadApp");
	//微信闪现
	$(".tit-right-li5 > .wx").hover(
		function(){
			$(".weixin").css({"display": "block"})
		},
		function(){
			$(".weixin").css("display", "none")
		}
	)
	$(function(){
		show(".weixin");
	})

	//----------------nav--------------透明度改变-------------------
	$(".navCenter > ul > li").each(function(){
		opa(this);
	})
	
	//----------------banner-------------------------------
	opa(".quickPurchase");
	//倒计时
	// console.log($(".hour").html());
	// $(".hour").html("99");

	/*var targetDate = new Date(2016, 9, 6, 0, 0 ,0);
	console.log(targetDate.getDate);*/
	//console.log(new Date().getDate + 2);

































	//----------------main   小btn轮播-------------------------------

	$(".hot_sale_flash > li").each(function(){
		$(this).hover(
			function(){
				$(this).children().eq(0).css({"display": "none"});
				$(this).children().eq(1).css({"display": "block"});
			}, 
			function(){
				$(this).children().eq(1).css("display", "none");
				$(this).children().eq(0).css({"display": "block"});
			}
		)
	})
	//左点击
	$(".hotLeftBtn").on("click", function(){
		//左点击的条件：ul左移了1200
		if(parseInt($(".hot_sale_flash").position().left) == -1200){
			$(".hot_sale_flash").css("left", 0);
		}
	})
	//右点击
	$(".hotRightBtn").on("click", function(){
		//右点击的条件：ul的left值为0；
		if(parseInt($(".hot_sale_flash").position().left) == 0){
			$(".hot_sale_flash").css("left", -1200);
		}
	})




















































































































































































































































































	//划过透明度改变函数opa();
	function opa(obj){
		$(obj).hover(
		function(){
			$(this).css("opacity", .6)
		},
		function(){
			$(obj).css("opacity", 1)
		})
	}
	//划过隐藏内容出现 消失、
	function show(obj){
		$(obj).hover(
			function(){
				$(obj).css({"display": "block"})
			},
			function(){
				$(obj).css("display", "none")
			}
		)
	}
	//划过字体变色
	function color(obj){
		$(obj).hover(function(){
			$(obj).css("color", "#dcdcdc");
		},
		function(){
			$(obj).css("color", "#000");
		})
	}
























})






































































































//
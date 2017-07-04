
$(function() {
	init();
	
});

function init(){
	$('#link').bind('click',function(){
		var aid=970;
		var link=$('#url_link').val();
		window.location.href="/link/testUrl?"+window.btoa(window.encodeURIComponent("aid="+aid+",link="+link));
	})
	
	var img = "https://gd2.alicdn.com/imgextra/i3/1102119461/TB24nmlhrtlpuFjSspfXXXLUpXa_!!1102119461.jpg_400x400.jpg";
	var img1 = "https://img.alicdn.com/bao/uploaded/i3/1652666044/TB2r7jxnNXlpuFjSsphXXbJOXXa_!!1652666044.jpg_430x430q90.jpg";
	var img2 = "https://img.alicdn.com/bao/uploaded/i3/TB1ane.RFXXXXc2XVXXYXGcGpXX_M2.SS2_800x800.jpg";
	console.log(taobaoImageUtil(img,90));
}

function randomNum(){
	var arr = [];//声明数组
	var size = 11;//范围-从0开始--就是0-10，一共11个
	var sum = 5;//每次生成几个随机数
	
	while(true){//死循环
		var num = Math.floor(Math.random()*size);//math.floor()方法取整，用math.random()生成随机数
		
		if(arr.indexOf(num) == -1){//去重，如果数组里面不存在生成的随机数
			arr.push(num)//添加到数组里面
		}
		
		if(arr.length == sum){//如果随机数满足我们需要的长度
			break;//停止循环
		}
	}
	console.log(arr);//控制台打印结果
}


function taobaoImageUtil(arr,q){
	
	var sufix = q>0?"_350x350q"+q+'.jpg':"_350x350.jpg";
	var patt1=new RegExp(".jpg_");
	var patt2 = new  RegExp(".png_");
	var patt3 = new RegExp(".SS2_");
	
	if (patt1.test(arr)||patt2.test(arr)) {
		
		var a=arr.split(".");
		return arr.replace(a[a.length-2]+'.'+a[a.length-1],'jpg'+sufix);
	}
	if(patt3.test(arr)){
		var a=arr.split(".");
		return arr.replace(a[a.length-2]+'.'+a[a.length-1],'SS2'+sufix);
	}else{
		return arr.replace(".jpg", '.jpg'+sufix );
	}
}

var slideIndex = 0;
//Mặc đinh nó sẽ ở cai anh đâu tiên
showSlides();

  function showSlides() {
  var i;
  // Phương thức trả về tập hợp các phần tử 
  var slides = document.getElementsByClassName("mySlides");
  //gan slide bang class "mySlides"
  var dots = document.getElementsByClassName("dot");
  //gan dots bang class dot
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  //vong lap for dung de ẩn tât cả cac anh di
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  //Neu slideindex lon hon do dai slides thi gan slideindex bang 1 . Cai nay de dam bao tính xoay voòg   
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //replace("a","b") là kieu thay chuỗi nay baằg chuôi kia
  //replace(" active", "") cung tuơng tự vây
  //
  slides[slideIndex-1].style.display = "block";  
  //Hiên thị ra anh đau tien
  dots[slideIndex-1].className += " active";
  // cái này là cái gì 
  // để hiển thi vị trí dâu châm kia
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  //CÀI DAT THỜI GIAN HIỂN THị img tiep theo

}
var D=0;
function Dao(){ 
        if ($(window).scrollTop() > 0 && $(window).scrollTop() < 2000  ) 
        { 
        	if(D==-1500){
        		D=0;
        	}
        	else{
        		$('#id-D-img').animate({left:D},2500);
           		$('#id-D-img').css("left",D);
           		D=D-300;
        	}   
       	} 
       	setTimeout("Dao()",3000);
    }
function right(){
		if(x == 1){
			$('#id-layer-img1').attr("src","image/k1.png");
			x=2;
		}
		else if(x==2){
			$('#id-layer-img1').attr("src","image/k2.png");
			x=3;
		}
		else if(x==3){
			$('#id-layer-img1').attr("src","image/k3.png");
			x=4;
		}
		else{
			$('#id-layer-img1').attr("src","image/k4.png");
			x=1;
		}
		
}
function left(){
		if(x == 4){
			$('#id-layer-img1').attr("src","image/k4.png");
			x=3;
		}
		else if(x==3){
			$('#id-layer-img1').attr("src","image/k3.png");
			x=2;
		}
		else if(x==2){
			$('#id-layer-img1').attr("src","image/k2.png");
			x=1;
		}
		else{
			$('#id-layer-img1').attr("src","image/k1.png");
			x=4;
}
}
var time = 5000;var x=1;
function slide(){
		
		if(x==1){
			$("#id-layer-img1").animate({opacity:1}, 2500);
			$('#id-layer-img1').attr("src","image/k1.png");
			$("#id-layer-img1").animate({opacity:0.7}, 2500);
			x=2;
		}
		else if(x==2){
			$("#id-layer-img1").animate({opacity:1}, 2500);
			$('#id-layer-img1').attr("src","image/k2.png");
			$("#id-layer-img1").animate({opacity:0.7}, 2500);
			x=3;
		}
		else if(x==3){
			$("#id-layer-img1").animate({opacity:1}, 2500);
			$('#id-layer-img1').attr("src","image/k3.png");
			$("#id-layer-img1").animate({opacity:0.7}, 2500);
			x=4;
		}
		else {
			$("#id-layer-img1").animate({opacity:1}, 2500);
			$('#id-layer-img1').attr("src","image/k4.png");
			$("#id-layer-img1").animate({opacity:0.7}, 2500);
			x=1;
		}
		setTimeout("slide()",time);
	}

function btnClick(){
		$('#id-a1').click(function(){
			$('#id-layer-img1').attr("src","./image/k1.png");
			x=2;
		})
		
		$('#id-a2').click(function(){
			$('#id-layer-img1').attr("src","./image/k2.png");
			x=3;
		})
		$('#id-a3').click(function(){
			$('#id-layer-img1').attr("src","./image/k3.png");
			x=4;
		})
		$('#id-a4').click(function(){
			$('#id-layer-img1').attr("src","./image/k4.png");
			x=1;
		})
}
function tuvan(){
	$('#id-tuvan').toggle();
	setTimeout("tuvan()",5000);
	
}









	
		
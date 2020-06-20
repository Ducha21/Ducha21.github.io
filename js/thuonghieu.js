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
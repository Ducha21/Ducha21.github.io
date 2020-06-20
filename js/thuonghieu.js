//Mặc đinh nó sẽ ở cai anh đâu tiên
var slideIndex = 0;


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
    if (slideIndex >= slides.length) { slideIndex = 0; }
    //Neu slideindex lon hon do dai slides thi gan slideindex bang 1 . Cai nay de dam bao tính xoay voòg   

    //Hiển thị ra slide thứ
    slides[slideIndex].style.display = "block";


    // Change image every x seconds
    //CÀI DAT THỜI GIAN HIỂN THị img tiep theo
    setTimeout(showSlides, 6000);

}


//Gọi hàm showSlides để chạy các ảnh
showSlides();
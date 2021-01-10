


let intervalo = 3000;


function slide1(){

document.getElementById('banner').src = "slide_show/banner1.jpg";
document.getElementById('banner').style.transition = "2s";
setTimeout("slide2()", intervalo);
}


function slide2(){
	document.getElementById('banner').src = "slide_show/banner2.jpg";
	document.getElementById('banner').style.transition = "2s";

	setTimeout("slide3()", intervalo);
}

function slide3(){
	document.getElementById('banner').src = "slide_show/banner3.jpg";
	document.getElementById('banner').style.transition = "2s";
	setTimeout("slide1()", intervalo);
}



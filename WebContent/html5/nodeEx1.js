/**
 * 
 */

function init(){
	var btnTxt=document.getElementById("btn-txt");
	btnTxt.onclick=btnTxtClick;
	var btnImg=document.getElementById("btn-img");
	btnImg.onclick=btnImgClick;
	
	var btnRemove=document.getElementById("btn-remove");
	btnRemove.onclick=btnRemoveClick;
	
	var btnCopy=document.getElementById("btn-copy");
	btnCopy.onclick=btnCopyClick;
}


function btnTxtClick(){
	var txt=document.createTextNode("안녕하세요");
	var div1=document.getElementById("div1");
	div1.appendChild(txt);
	
}

function btnImgClick(){
	
	var img=document.createElement("img");
	img.src="cc.jpg";
	img.style.border="10px dotted #313131";
	var div1=document.getElementById("div1");
	
	div1.appendChild(img);
}

function btnRemoveClick(){
	var div1=document.getElementById("div1");
	var last = div1.lastChild;
	div1.removeChild(last);
}

function btnCopyClick(){
	var div1=document.getElementById("div1");
	var cloneDiv1=div1.cloneNode(true);
	var target=document.body;
	target.appendChild(cloneDiv1);
}

window.onload=init;
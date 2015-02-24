/**
 * 
 */

function btnResizeClick(){
	opener.resizeTo(100,100);
}

function btnMoveClick(){
	
}

function btnOpenerCloseClick(){
	opener.close();
}

function init(){
	var btnReSize=document.getElementById("btn-resize");
	var btnMove=document.getElementById("btn-move");
	var btnOpenerClose=document.getElementById("btn-opener-close");
	
	btnReSize.onclick=btnResizeClick;
	btnMove.onclick=btnMoveClick;
	btnOpenerClose.onclick=btnOpenerCloseClick;
}

window.onload=init;
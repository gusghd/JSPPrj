function init(){
	var btnSum=document.getElementById("btn-sum");
	btnSum.onclick=btnSumClick;
}

function btnSumClick(){
	var txtX=document.getElementById("txt-x");
	var txtY=document.getElementById("txt-y");
	var txtSum=document.getElementById("txt-sum");
	
	txtSum.value=parseInt(txtX.value)+parseInt(txtY.value);
	
}

window.onload=init;
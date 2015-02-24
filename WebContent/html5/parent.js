/**
 * 
 */

function openDoc(){
	window.frames[0].location.href="http://bm.gametree.co.kr/";

	window.frames[1].location.href="http://www.nate.com";
}

function init(){
	btnFrameChange=document.getElementById("btn-frame-change");
	btnFrameChange.onclick=openDoc;
}

window.onload=init;
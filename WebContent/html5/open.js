/**
 * 
 */

var win=null;

function btnNewTabClick(){
	win=open("http://bm.gametree.co.kr/","_blank");
}

function btnNewWinClick(){
	win = open("notice.html","_blank","width=500px,height=400px");
	
}

function btnCloseWinClick(){
	window.close();

}

function init(){
	var btnNewTab=document.getElementById("btn-new-tab");
	var btnNewWin=document.getElementById("btn-new-win");
	var btnCloseWin=document.getElementById("btn-close-win");
	
	btnNewTab.onclick=btnNewTabClick;
	btnNewWin.onclick=btnNewWinClick;
	btnCloseWin.onclick=btnCloseWinClick;
}

window.onload=init;
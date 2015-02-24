
function printResult(){
			 add(1,2,3,4,5,6,7,8,9);
			 multiple(1,2,3,4,5,6,7,8,9);
		 	
		 
		 }	 
	function add(a,b){
			 var sum=0;
			 for(var i in arguments)
				 sum+=arguments[i];
			 alert(sum);
			 return sum;
		 }
		 
/* 		 alert(add(1,2,3,4));
		 alert(add(1,2,3,4,5,6,7,8,9));
		  */
	function multiple(a,b){
			  var sum=1;
			  for(var i in arguments)
				  sum*=arguments[i];
			  alert(sum);
			  return sum;
		  }
		 
	function printResult2(){
		var btnPrint=document.getElementById("btn-print");
		var x,y;
	
		x=parseInt(prompt("x값을 입력하세요", 0));
		y=parseInt(prompt("y값을 입력하세요", 0));
		
		alert(x+y);
		
		btnPrint.value=x+y;
	
	}	
	function init(){
		var btnPrint=document.getElementById("btn-print");
		btnPrint.onclick=printResult2;
	}
	
	window.onload=init;
	
	
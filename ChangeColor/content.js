var x = document.getElementsByTagName("a");
var i=0,k=x.length;

if(config=='red'){
	for (var i = 0; i < k; i++){
		x[i].style.color ='red';
	}
}
else if(config=='blue'){
	for (var i = 0; i < k; i++){
		x[i].style.color ='blue';
	}
}
else if(config=='green'){
	for ( i = 0; i < k; i++ ){
		x[i].style.color ='green';
	}
}
else if(config=='black'){
	for (var i = 0; i < k; i++){
		x[i].style.color ='black';
	}
}
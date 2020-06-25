document.querySelector('#b1').addEventListener('click', pound);

function pound(){
	
	var lbval = document.getElementById('displayhere').value;
	var finallb = lbval *2.2;
	
	document.querySelector('#result-show').textContent = finallb;
	
	
	
	
}

document.querySelector('#b2').addEventListener('click', gallon);

function gallon(){
	
	var galval = document.getElementById('displayhere').value;
	var finalgal = galval *0.264172;
	
	document.querySelector('#result-show').textContent = finalgal;
	
	
	
}

document.querySelector('#b3').addEventListener('click', miles);

function miles(){
	
	var milval = document.getElementById('displayhere').value;
	var finalmil = milval *0.62;
	
	document.querySelector('#result-show').textContent = finalmil;
	
	
	
}

document.querySelector('#b4').addEventListener('click', farh);

function farh(){
	
	var farval = document.getElementById('displayhere').value;
	var finalfar = (farval *1.8) +32;
	
	document.querySelector('#result-show').textContent = finalfar;
	
	
	
}
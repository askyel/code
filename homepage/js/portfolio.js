console.log( "portfolio.js running" );

var portIndex = 1;
showPort(portIndex);

function slidePort(n) {
	showPort(portIndex += n);
};

function showPort(n) {
	//console.log("showing div " + n);
	//showGal();
	portIndex = n;
	var i;
	var x = document.getElementsByClassName("portfolio-slide");
	var y = document.getElementsByClassName("portfolio-item");
	if (n > x.length) {portIndex = 1};
	if (n < 1) {portIndex = x.length};
	for (i=0; i < x.length; i++) {
		x[i].style.display = "none";
		y[i].style.opacity = 0.7;
	}
	x[portIndex-1].style.display = "block";
	y[portIndex-1].style.opacity = 1.0;
	//document.getElementById("slide-index").innerHTML = portIndex;
};


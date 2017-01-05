console.log( "gallery.js running" );

var slideIndex = 1;
var showingGal = false;
showDivs(slideIndex);

function slideDivs(n) {
	showDivs(slideIndex += n);
};

function showDivs(n) {
	//console.log("showing div " + n);
	//showGal();
	slideIndex = n;
	var i;
	var x = document.getElementsByClassName("slide");
	if (n > x.length) {slideIndex = 1};
	if (n < 1) {slideIndex = x.length};
	for (i=0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
	//document.getElementById("slide-index").innerHTML = slideIndex;
};

function showGal(n) {
	document.getElementById("gallery").style.display = "block";
	showDivs(slideIndex = n);
	showingGal = true;
};

function hideGal() {
	document.getElementById("gallery").style.display = "none";
	showingGal = false;
};

document.onkeydown = checkKey;

function checkKey(e) {
	e = e || window.event;

	if (showingGal) {
		if (e.keyCode == '37') {
			slideDivs(-1);
		}
		else if (e.keyCode == '39') {
			slideDivs(1);
		}
	}
};

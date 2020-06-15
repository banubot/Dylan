var backgrounds = new Array(
	'photos/14.jpg',
	'photos/12.jpeg',
	'photos/5.png',
	'photos/6.jpg',
	'photos/9.jpeg',
	'photos/2.png',
	'photos/8.jpeg',
	'photos/1.png',
	'photos/4.png'
);

var current = 0;
var counter = 0;
var opacity = 0;
function nextBackground() {
	var img = document.getElementById("bkg");
	counter++;
	if (counter < 22) {
		img.style.opacity = opacity;
		opacity += 0.05;
	} else if (counter > 100) {
		counter = 0;
		opacity = 0;
		current++;
		current = current % backgrounds.length;
		img.src = backgrounds[current];
	} else if (counter > 79) {
		opacity -= 0.05;
		img.style.opacity = opacity;
	}
}
setInterval(nextBackground, 100);

document.getElementById("bkg").src = backgrounds[0];

function scrollMedia() {
	document.getElementById('media').scrollIntoView();
}

function scrollAbout() {
	document.getElementById('about').scrollIntoView();
}

function scrollPhoto() {
	document.getElementById('photos').scrollIntoView();
}
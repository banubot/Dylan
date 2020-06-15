var backgrounds = new Array(
	'9.jpeg',
	'2.png',
	'5.png',
	'8.jpeg',
	'14.jpg',
	'1.png',
	'6.jpg',
	'4.png',
	'12.jpeg'
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
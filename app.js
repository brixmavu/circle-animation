var ol = 0;
var circleInterval;
var isPlaying = false;

var el = document.getElementById('circle');

function circleAnimation() {
    ol++
    el.style.left = ol + 'px';
    circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked() {
    if (isPlaying) {
        isPlaying = false;
        el.style.backgroundColor = "dimgrey";
        cancelAnimationFrame(circleInterval);
    } else {
        isPlaying = true;
        el.style.backgroundColor = "crimson";
        circleInterval = requestAnimationFrame(circleAnimation);
    }
}

el.addEventListener('click', mouseClicked);
el.style.backgroundColor = "dimgrey";


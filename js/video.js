var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = volumeSlider.value + "%";
	video.play(); 
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	myVideo.pause(); 
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5; 
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		video.play(); 
	}
	console.log("Current location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (myVideo.muted) {
		myVideo.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		myVideo.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});


function onVolumeChange () {
	var volumeSlider = document.querySelector("#volumeSlider");
	video.volume = volumeSlider.value/100.0;
	// console.log(volumeSlider.value);
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = volumeSlider.value + "%";
}
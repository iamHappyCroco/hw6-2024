var video;

window.addEventListener("load", function () {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false; // Turn off autoplay
    video.loop = false; // Turn off looping
    document.querySelector("#volume").textContent = video.volume * 100 + "%"; // Set initial volume display
});


document.querySelector("#play").addEventListener("click", function () {
    console.log("Play Video");
    video.play();
    // Ensure the volume is updated correctly when Play is clicked
    document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

// Pause button functionality
document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
});

// Slow Down button functionality
document.querySelector("#slower").addEventListener("click", function () {
    if (video.playbackRate > 0.1) {
        video.playbackRate -= 0.1;
        console.log("New speed: " + video.playbackRate);
    } else {
        console.log("Speed is already at the minimum");
    }
});

// Speed Up button functionality
document.querySelector("#faster").addEventListener("click", function () {
    if (video.playbackRate < 2.0) {
        video.playbackRate += 0.1;
        console.log("New speed: " + video.playbackRate);
    } else {
        console.log("Speed is already at the maximum");
    }
});

// Skip Ahead button functionality
document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0; // Restart from the beginning
    }
    console.log("Current time: " + video.currentTime);
});

// Mute button functionality
document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
    } else {
        video.muted = true;
        this.textContent = "Unmute";
    }
    console.log("Muted: " + video.muted);
});

// Volume Slider functionality
document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    document.querySelector("#volume").textContent = video.volume * 100 + "%";
    console.log("Volume: " + video.volume);
});

// Styled button functionality
document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
    console.log("Applied oldSchool class");
});

// Original button functionality
document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
    console.log("Removed oldSchool class");
});

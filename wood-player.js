let audio = document.getElementById("audio");
let progress = document.getElementById("progress");

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
    progress.value = 0;
}

// প্রোগ্রেস বার আপডেট করা
audio.addEventListener("timeupdate", function () {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

// ম্যানুয়ালি সময় পরিবর্তন করা হলে
progress.addEventListener("input", function () {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

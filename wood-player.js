document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("audio");
    let progress = document.getElementById("progress");
    let playPauseBtn = document.getElementById("playPause");
    let stopBtn = document.getElementById("stop");
    let isPlaying = false;

    function playPause() {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.innerHTML = "▶️";
            isPlaying = false;
        } else {
            audio.play();
            playPauseBtn.innerHTML = "⏸️";
            isPlaying = true;
        }
    }

    function stopMusic() {
        audio.pause();
        audio.currentTime = 0;
        playPauseBtn.innerHTML = "▶️";
        isPlaying = false;
    }

    audio.addEventListener("timeupdate", () => {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });

    progress.addEventListener("input", () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });

    playPauseBtn.addEventListener("click", playPause);
    stopBtn.addEventListener("click", stopMusic);
});

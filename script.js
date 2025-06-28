const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');
const audio = document.getElementById('notify-audio');

let count = 0;
let soundPlayed = false;

incrementBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    if (count > 100 && !soundPlayed) {
        audio.currentTime = 0;
        audio.play();
        soundPlayed = true;
    }
    if (count <= 100) {
        soundPlayed = false;
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
    soundPlayed = false;
}); 
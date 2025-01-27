window.addEventListener('click', function () {
    var audio = document.getElementById("audioPlayer");
    if (audio) {
        audio.play().catch(error => console.error("Playback failed:", error));
    }
});
document.addEventListener('visibilitychange', function () {
    var audio = document.getElementById("audioPlayer");
    if (audio) {
        if (document.visibilityState === 'visible') {
            audio.play().catch(error => console.error("Playback failed:", error));
        } else {
            audio.pause();
        }
    }
});

let hunger = 50;
let happiness = 75;
let cleanliness = 30;

const hungerBar = document.querySelector('.fill.hunger');
const happinessBar = document.querySelector('.fill.happiness');
const cleanlinessBar = document.querySelector('.fill.cleanliness');
const audioPlayer = document.getElementById('audioPlayer');


function updateBars() {
    hungerBar.style.width = `${hunger}%`;
    happinessBar.style.width = `${happiness}%`;
    cleanlinessBar.style.width = `${cleanliness}%`;
}

document.querySelector('.btn.feed').addEventListener('click', () => {
    hunger = Math.min(hunger + 10, 100); 
    cleanliness = Math.max(cleanliness - 5, 0); 
    updateBars();
});

document.querySelector('.btn.play').addEventListener('click', () => {
    happiness = Math.min(happiness + 10, 100); 
    hunger = Math.max(hunger - 5, 0); 
    updateBars();
});

document.querySelector('.btn.clean').addEventListener('click', () => {
    cleanliness = Math.min(cleanliness + 20, 100); 
    updateBars();
});


window.addEventListener('click', () => {
    audioPlayer.play().catch((error) => console.error('Audio playback failed:', error));
});


function decreaseStats() {
    hunger = Math.max(hunger - 1, 0);
    happiness = Math.max(happiness - 1, 0);
    cleanliness = Math.max(cleanliness - 1, 0);

    updateBars();

    
    if (hunger === 0 || happiness === 0 || cleanliness === 0) {
        alert('Game Over! Your Tamagotchi needs more care.');
        clearInterval(statDecayInterval); 
    }
}


const statDecayInterval = setInterval(decreaseStats, 5000);


updateBars();

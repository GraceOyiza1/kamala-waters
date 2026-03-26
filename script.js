// MODAL LOGIC
const modal = document.getElementById("orderModal");

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

// VIDEO SEQUENCER LOGIC
const v1 = document.getElementById('video1');
const v2 = document.getElementById('video2');

function crossFade(current, next) {
    next.play();
    next.classList.add('active-video');
    current.classList.remove('active-video');
    setTimeout(() => {
        current.pause();
        current.currentTime = 0;
    }, 1500);
}

v1.onended = () => crossFade(v1, v2);
v2.onended = () => crossFade(v2, v1);

// Ensure first video plays on load
window.addEventListener('load', () => {
    v1.play().catch(() => console.log("User interaction required for autoplay"));
});
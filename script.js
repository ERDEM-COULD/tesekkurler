document.addEventListener("DOMContentLoaded", function () {
    let text = document.getElementById("scrollText");
    let position = -100; // Başlangıç konumu (yukarıdan başlat)
    let speed = -1; // Aşağı kayma hızı

    function moveText() {
        position += speed;
        text.style.top = position + "px";

        if (position < window.innerHeight) {
            requestAnimationFrame(moveText);
        }
    }

    moveText();
});

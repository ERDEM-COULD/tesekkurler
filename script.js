document.addEventListener("DOMContentLoaded", function () {
    let text = document.getElementById("scrollText");
    let position = -100; // Başlangıç konumu (yukarıdan başlat)
    let speed = 2; // Aşağı kayma hızı

    // Metni hareket ettirmek için stil ekleyelim
    text.style.position = "absolute"; // Hareket edebilmesi için absolute olmalı
    text.style.left = "50%";
    text.style.transform = "translateX(-50%)"; // Ortalamak için

    function moveText() {
        position += speed;
        text.style.top = position + "px";

        if (position < window.innerHeight / 2) { // Ortaya gelene kadar devam et
            requestAnimationFrame(moveText);
        } else {
            setTimeout(() => {
                let secondLine = document.createElement("div");
                secondLine.textContent = "ERDEM DUMAN";
                secondLine.style.textAlign = "center"; // Ortalamak için
                secondLine.style.fontSize = "24px"; // Boyut ayarı
                text.appendChild(secondLine); // Altına ekleme yap
            }, 1000);
        }
    }

    moveText();
});

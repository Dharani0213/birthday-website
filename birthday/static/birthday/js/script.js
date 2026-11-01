function startSurprise() {

    document.getElementById("welcome")
        .classList.add("hidden");

    let birthday = document.getElementById("birthday");

    birthday.classList.remove("hidden");

    birthday.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();
}


function showMessage() {

    let message = document.getElementById("message");

    message.classList.remove("hidden");

    message.scrollIntoView({
        behavior: "smooth"
    });
}


function showPhotos() {

    let gallery = document.getElementById("gallery");

    gallery.classList.remove("hidden");

    gallery.scrollIntoView({
        behavior: "smooth"
    });

    let photos = document.querySelectorAll(".photo");

    photos.forEach((photo, index) => {

        setTimeout(() => {

            photo.classList.add("show");

        }, index * 400);

    });
}


// Confetti Animation

function createConfetti() {

    let emojis = ["❤️", "💕", "💗", "✨", "🎉"];

    for (let i = 0; i < 40; i++) {

        let item = document.createElement("span");

        item.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-30px";
        item.style.fontSize = "25px";
        item.style.zIndex = "9999";
        item.style.pointerEvents = "none";
        item.style.transition = "transform 3s, opacity 3s";

        document.body.appendChild(item);

        setTimeout(() => {

            item.style.transform =
                `translateY(${window.innerHeight + 100}px) rotate(360deg)`;

            item.style.opacity = "0";

        }, 50);

        setTimeout(() => {
            item.remove();
        }, 3200);

    }
}
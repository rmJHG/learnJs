const images = ["0.jpg", "3.jpg", "2.jpg"];

const ramdomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${ramdomImage}`;

document.body.appendChild(bgImage);

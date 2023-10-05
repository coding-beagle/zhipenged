const image = document.getElementById('movingImage');
const velocity = 1; // Adjust for faster/slower speed
let directionX = (Math.random() < 0.5) ? 1 : -1;
let directionY = (Math.random() < 0.5) ? 1 : -1;

let currentHue = Math.random() * 360;  // random starting hue

function randomStartPosition(offset) {
    const randomX = Math.random() * (window.innerWidth - 2 * offset) + offset;
    const randomY = Math.random() * (window.innerHeight - 2 * offset) + offset;
    return { x: randomX, y: randomY };
}

// Set random starting position with an offset of 100 pixels horizontally and 80 pixels vertically from the edges
const startPosition = randomStartPosition(300, 300);
image.style.left = `${startPosition.x}px`;
image.style.top = `${startPosition.y}px`;

function moveImage() {
    const rect = image.getBoundingClientRect();

    // Check horizontal boundaries
    if (rect.left <= 0 || rect.right >= window.innerWidth) {
        directionX *= -1;
        changeColor();
    }

    // Check vertical boundaries
    if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
        directionY *= -1;
        changeColor();
    }

    image.style.left = (image.offsetLeft + velocity * directionX) + "px";
    image.style.top = (image.offsetTop + velocity * directionY) + "px";
    requestAnimationFrame(moveImage);
}

function randomHueShift(minShift, maxShift) {
    // Get a random hue shift between minShift and maxShift degrees
    return (Math.random() * (maxShift - minShift) + minShift) * (Math.random() < 0.5 ? 1 : -1);
}

function changeColor() {
    currentHue += randomHueShift(45, 90); // This ensures a shift between 45 to 90 degrees. Adjust as needed.
    currentHue %= 360; // Keep it within [0, 360)
    image.style.filter = `hue-rotate(${currentHue}deg)`;
}

moveImage();

function randomStartPosition(offsetX, offsetY) {
    const randomX = Math.random() * (window.innerWidth - 2 * offsetX) + offsetX;
    const randomY = Math.random() * (window.innerHeight - 2 * offsetY) + offsetY;
    return { x: randomX, y: randomY };
}

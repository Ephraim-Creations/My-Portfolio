function swapMedia(element) {
    const image = element.querySelector('.media-image');
    const info = element.querySelector('.media-info');

    if (info.style.opacity === "0") {
        info.style.opacity = "1";
        image.style.transform = "translateX(-100%)"; // Move image out
    } else {
        info.style.opacity = "0";
        image.style.transform = "translateX(0)"; // Move image back
    }
}

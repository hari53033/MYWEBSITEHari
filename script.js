function openPopup(imageSrc, file) {
    document.getElementById("popupImg").src = imageSrc;
    document.getElementById("downloadLink").href = file;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

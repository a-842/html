const imageFileNames = [
    "Inkling.png",
    "Minimpusle.png",
    "NyanCat.png",
    "Thanatos.png",
    "TheKnight.png",
    // Add more file names here
];


const gallery = document.getElementById("cardGallery");
const basePath = "PlayingCardDesigns/"; // Set your base file path here

imageFileNames.forEach(fileName => {
    const image = document.createElement("img");
    image.src = basePath + fileName;
    gallery.appendChild(image);
});

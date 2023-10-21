const imageFileNames = [

    "Minum.png",
    "Plusle.png",
    "Inkling.png",
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
    image.width = window.innerWidth*0.4
    gallery.appendChild(image);
});

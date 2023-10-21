const imageContainer = document.getElementById('Centred-Box-Gallery');

// Function to fetch and display the images
function fetchAndDisplayImages() {
    fetch('/PlayingCardDesigns')
        .then((response) => response.text())
        .then((text) => {
            const files = text.split('\n');

            files.forEach((file) => {
                if (file.endsWith('.png')) {
                    const img = document.createElement('img');
                    img.src = `PlayingCardDesigns/${file}`;
                    imageContainer.appendChild(img);
                }
            });
        });
}

// Call the function to fetch and display the images
fetchAndDisplayImages();

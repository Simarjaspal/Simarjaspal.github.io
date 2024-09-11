document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    const apiKey = "tOQFLoNvCiafeNicwjZfUOb0XlhuxahT3UmN7ztlsbV6GoK8MJRYghqs"; // Replace with your Pexels API key
    const apiUrl = `https://api.pexels.com/v1/search?query=food&per_page=1`;

    for (const image of images) {
        fetch(apiUrl, {
            headers: {
                'Authorization': apiKey
            }
        })
            .then(response => response.json())
            .then(data => {
                image.src = data.photos[0].src.medium;
                image.width = 150;
                image.height = 150;
            })
            .catch(error => console.error('Error fetching the image:', error));
    }
});
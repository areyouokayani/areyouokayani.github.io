function carouselImages() {
  const imageCount = 20;
  const images = [];
  let index = Math.floor(Math.random() * 20);

  for (let i = 0; i < imageCount; i++) {
    const img = new Image();
    img.src = `modelImages/img${i + 1}.jpeg`;
    img.classList.add("carousel-image");
    images.push(img);
  }

  const imgElement = document.getElementById("carousel-image");

  setInterval(() => {
    imgElement.classList.add("hidden");
    setTimeout(() => {
      imgElement.classList.remove("hidden");
      index = (index + 1) % images.length;
      imgElement.src = images[index].src;
    }, 1000);
  }, 5000);
}

window.addEventListener("load", function () {
  carouselImages();
});

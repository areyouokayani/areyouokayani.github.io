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
      let nextIndex = index;
      while (nextIndex === index) {
        nextIndex =Math.floor(Math.random()*20);
      }
      index = (index + 1) % images.length;
      imgElement.src = images[index].src;
    }, 800);
  }, 6000);
}


window.onload = function() {
  carouselImages();
}
function carouselImages() {
    const imageCount = 12;
    const images = [];
  
    for (let i = 0; i < imageCount; i++) {
      const img = new Image();
      img.src = `modelImages/img${i + 1}.jpeg`;
      images.push(img);
    }
  
    let index = Math.floor(Math.random() * 12);
  
    const imgElement = document.getElementById('carousel-image');
  
    setInterval(() => {
      index = (index + 1) % images.length;
      imgElement.src = images[index].src;
    }, 3000);
  }

 window.addEventListener('load', function(){
    carouselImages();
 });

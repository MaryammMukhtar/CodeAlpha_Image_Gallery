const images = ['image-1.png', 'image-2.png', 'image-3.png', 'image-4.png', 'image-5.png', 'image-6.png','image2.jpg','image3.jpg','image4.jpg'];
let currentPage = 0;
const imagesPerPage = 3;

const galleryImages = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateGallery() {
  const start = currentPage * imagesPerPage;
  const end = start + imagesPerPage;
  galleryImages.forEach((img, index) => {
    if (start + index < images.length) {
      img.src = images[start + index];
      img.style.display = 'inline';
    } else {
      img.style.display = 'none';
    }
  });
}

prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updateGallery();
  }
});

nextButton.addEventListener('click', () => {
  if ((currentPage + 1) * imagesPerPage < images.length) {
    currentPage++;
    updateGallery();
  }
});


updateGallery();

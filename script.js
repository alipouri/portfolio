// Select all gallery images
const galleryImages = document.querySelectorAll('.gal');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalImage = document.createElement('img');
modal.appendChild(modalImage);

// Add click event to each image
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    modalImage.src = image.src;
    modal.classList.add('active');
  });
});

// Close modal on click
modal.addEventListener('click', () => {
  modal.classList.remove('active');
});
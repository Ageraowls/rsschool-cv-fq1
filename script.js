const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const showLi = document.querySelector('.rss');

const closeModal = () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
};

modal.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    closeModal();
  }
});

const showModal = () => {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

showLi.addEventListener('click', showModal);
modalClose.addEventListener('click', closeModal);

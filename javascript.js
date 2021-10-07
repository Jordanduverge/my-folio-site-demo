// JavaScript Document
// Get Elements
<script src="javascript.js"/script>
const previewImg = document.querySelectorAll('.img-wrapper img');
const modalImg = document.querySelector('.modal-img img');
const modal = document.querySelector('.modal');

previewImg.forEach((images) => {
  images.addEventListener('click', () => {
    modal.classList.add('open');
    let imgSrc = images.src;
    modalImg.src = imgSrc;
    console.log(modalImg.src);
  });
});

modal.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
  }
});



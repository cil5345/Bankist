'use strict';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Header
const header = document.querySelector('.header')


const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};



btnsOpenModal.forEach( btn => btn.addEventListener('click', openModal))
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
 

//Add Cookie Message to bottom
const message = document.createElement('div')
message.classList.add('cookie-message')
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got It!</button>`
// header.prepend(message)
header.append(message)

//Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove()
})



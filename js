const body = document.querySelector('body.page');
const btnOpenModal = document.querySelector('menu-header-message');
const modal = document.querySelector('#modal-1');
const btnCloseModal = document.querySelector('#modal-1-close');

const handleModalSwitch = () => {
  modal.classList.toggle('modal--closed');
  body.classList.toggle('page-scroll');
}

btnOpenModal.addEventListener('click', handleModalSwitch)

btnCloseModal.addEventListener('click', handleModalSwitch);



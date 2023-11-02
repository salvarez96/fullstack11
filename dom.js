const btnNoPress = document.getElementById('no-press-me');
btnNoPress.textContent = 'don\'t press me';


btnNoPress.addEventListener('click', () => {
    console.error('I told you not to press me!');
})

btnNoPress.addEventListener('contextmenu', () => {
    console.warn('click derecho');
})

btnNoPress.addEventListener('mouseover', () => {
    console.info('pusiste el mouse encima del botón');
})

const mainPhoto = document.getElementById('main-photo');

mainPhoto.addEventListener('mouseenter', () => {
    document.getElementById('main-photo').style.display = 'none';
});

mainPhoto.addEventListener('mouseleave', () => {
  document.getElementById('main-photo').style.display = 'block';
});


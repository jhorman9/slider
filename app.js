const imgContainer = document.querySelector('.img-container');
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');
const btnArea = document.querySelector('.selector');
let paginator = '';
let index = 0;
let buttons = [];
const imgs = [
  'https://fondosmil.com/fondo/79895.jpg',
  'https://www.wallpapertip.com/wmimgs/3-37944_science-fiction-cityscape-futuristic-city-digital-art-futuristic.jpg',
  'https://p4.wallpaperbetter.com/wallpaper/375/507/587/lights-cyberpunk-neon-futuristic-city-wallpaper-preview.jpg',
  'https://images8.alphacoders.com/868/868754.png',
  'https://www.xtrafondos.com/wallpapers/resized/ciudad-futurista-estilo-retro-7822.jpg?s=large'
]

imgContainer.innerHTML = `
<img src=${imgs[index]} alt="img1">
`;

const cleanButton = () => {
  buttons = [];
}

const showButtons = () => {
  cleanButton()
  for(let i= 0; i < imgs.length; i++) {
    buttons.push(`
      <div class="select-image d-flex center scale align-vertical pointer ${index === i ? 'current' : ''}">
        ${i + 1}
      </div>
    `);
  }
  const btnsText = buttons.join('');
  btnArea.innerHTML = btnsText;
  paginator = document.querySelectorAll('.select-image');
  for(let i=0; i<paginator.length; i++) {
    paginator[i].addEventListener('click', (e) => {
      index = e.target.textContent - 1;
      showButtons();
      
      if(index === 0){ 
        prev.style.visibility = 'hidden'
      } else {
        prev.style.visibility = 'visible'
      }
      if(index + 1 === imgs.length){ 
        next.style.visibility = 'hidden'
      } else {
        next.style.visibility = 'visible'
      }
      imgContainer.innerHTML = `
      <img src=${imgs[index]} alt="img1">
      `;
    });
  }
}

showButtons();





next.addEventListener('click', () => {
  index ++;
  showButtons()
  imgContainer.innerHTML = `
    <img src=${imgs[index]} alt="img1">
    `;
  if(index + 1 < imgs.length){ 
    prev.style.visibility = 'visible'
  } else {
    next.style.visibility = 'hidden'
  }
});

prev.addEventListener('click', () => {
  index --;
  showButtons()
  imgContainer.innerHTML = `
    <img src=${imgs[index]} alt="img1">
    `;
    if(index > 0){ 
      next.style.visibility = 'visible'
    } else {
      prev.style.visibility = 'hidden'
    }
});






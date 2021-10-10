// ********************************
// Contribuição :Gabriel Pinheiro
// Contribuição : Leandro Silva
// ********************************
// Criada uma constate com nome de getInputText que recebe
// do DOM por meio da funcao querySelector('#text-input');
// a referência do id do elemento input
const getInputText = document.querySelector('#text-input');
// Criada uma constante que recebe do DOM por meio de
// querySelector('#meme-text') a referência do elemento span
const gettextMeme = document.querySelector('#meme-text');
// Criada uma constante com nome de getMemeInsert que recebe
// do DOM por meio da função querySelector('#meme-insert')
// a referência do elemento input do tipo file
const getMemeInsert = document.querySelector('#meme-insert');
// Criada uma constante com nome de getMemeImage que recebe
// do DOM por meio da função querySelector ('#meme-image')
// a referência do elemento img
const getMemeImage = document.querySelector('#meme-image');

// criando um escutador para o campo input
getInputText.addEventListener('input', () => {
  // O escutador criado tem por funcionalidade fazer com
  // textMeme receba de capureInputText o valor digitado
  // pelo usuario no campo input
  gettextMeme.innerText = getInputText.value;
});
// Contribuição: Gabriel Pinheiro
function showImage() {
  getMemeImage.src = URL.createObjectURL(getMemeInsert.files[0]);
}

getMemeInsert.addEventListener('change', showImage);

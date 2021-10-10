// Criado uma constate com nome de captureInputText que recebe
// do DOM por meio da funcao querySelector('#text-input');
// a referência do id do elemento input
const captureInputText = document.querySelector('#text-input');
// Criado uma constante que recebe do DOM por meio de
// querySelector('#meme-text') a referência do elemento span
const textMeme = document.querySelector('#meme-text');
// criando um escutador para o campo input
captureInputText.addEventListener('input', () => {
  // O escutador criado tem por funcionalidade fazer com 
  // textMeme receba de capureInputText o valor digitado
  // pelo usuario no campo input
  textMeme.innerText = captureInputText.value;
});

// ********************************
// Contribuição :Gabriel Pinheiro
// Contribuição : Leandro Silva
// ********************************
// Criada uma constate com nome de getInputText que recebe
// do DOM por meio da funcao querySelector('#text-input');
// a referência do id do elemento input
const getInputText = document.querySelector('#text-input');
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
  // Criada uma constante que recebe do DOM por meio de
  // querySelector('#meme-text') a referência do elemento span
  const gettextMeme = document.querySelector('#meme-text');

  // O escutador criado tem por funcionalidade fazer com
  // textMeme receba de capureInputText o valor digitado
  // pelo usuario no campo input
  gettextMeme.innerText = getInputText.value;
});
// Contribuição: Gabriel Pinheiro
// Criada uma função chamada showImage()
function showImage() {
  // Neste ponto fazemos uso da constante getMemeImage e acessamos
  // O atributo src do elemento referenciado que irá receber um objeto
  // do tipo URL que possui um método de captura de arquivo createObectURL
  // dentro do métoo é passado como parâmetro a constante getMemeInsert
  // que acessa o arquivo capturado na posicao inicial zero
  getMemeImage.src = URL.createObjectURL(getMemeInsert.files[0]);
}
// agora criamos um evento escutador para a constante getMemeInsert
// do tip change e passamos a função showImage com o arquivo que 
// será setado e atribuido ao elemento src com id meme-image
getMemeInsert.addEventListener('change', showImage);

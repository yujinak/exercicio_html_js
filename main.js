const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let formEValido = false;
    const numeroA = parseInt(document.querySelector('#campoA').value);
    const numeroB = parseInt(document.querySelector('#campoB').value);

    const mensagemSucesso = 'Formulário válido! Obrigado por utilizar.'
    const mensagemErro = 'Formulário inválido. Número A maior que B.'
    const bMaior = numeroB > numeroA;
    formEValido = bMaior;

    if (formEValido) {
        const containerMensagemSucesso = document.getElementById('mensagem');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.backgroundColor = 'rgba(22, 138, 246, 0.967)'
        
    } else {
        const containerMensagemErro = document.getElementById('mensagem');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.backgroundColor = 'rgb(255, 247, 128)';
    }
})


// A entrega desse exercício consiste em:
// • Crie um formulário HTML que possua dois campos numéricos, campo A e campo B e um botão para submeter o formulário.
// • Crie uma validação no JavaScript, onde o formulário será válido caso o número B seja maior que o número A.
// • Exiba uma mensagem positiva quando o formulário for válido e uma mensagem negativa quando for inválido.
// • Suba no Github no repositório do curso em uma branch chamada exercicio_html_js.
// • Copie o link do repositório na plataforma da EBAC.
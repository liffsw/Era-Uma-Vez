function validarCampo(input) {
    const mensagemExistente = input.parentElement.querySelector('.mensagem-erro');
    if (mensagemExistente) {
        mensagemExistente.remove();
    }

    if (!input.checkValidity()) {
        const mensagem = document.createElement('span');
        mensagem.className = 'mensagem-erro';
        mensagem.textContent = input.validationMessage;
        input.insertAdjacentElement('afterend', mensagem);
        return false;
    }

    return true;
}

const conteudoPrincipal = document.getElementById('conteudo');

conteudoPrincipal.addEventListener('submit', (evento) => {
    if (evento.target.id === 'form-cadastro') {
        evento.preventDefault();

        const form = evento.target;
        const alerta = document.getElementById('alerta-form');
        const campos = form.querySelectorAll('input[required]');

        let formularioValido = true;

        campos.forEach((campo) => {
            const valido = validarCampo(campo);
            if (!valido) {
                formularioValido = false;
            }
        });

        if (!formularioValido) {
            alerta.textContent = 'Por favor, revise os campos destacados antes de enviar.';
            alerta.style.display = 'block';
            return;
        }

        alerta.style.display = 'none';

        const dados = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            cpf: document.getElementById('cpf').value,
            telefone: document.getElementById('telefone').value,
            cep: document.getElementById('cep').value,
            interesse: document.querySelector('input[name="interesse"]:checked').value
        };

        localStorage.setItem('cadastroEraUmaVez', JSON.stringify(dados));
        alert('Cadastro realizado com sucesso!');
        form.reset();
    }
});

function verificarCadastroExistente() {
    const dadosSalvos = localStorage.getItem('cadastroEraUmaVez');

    if (dadosSalvos) {
        const cadastro = JSON.parse(dadosSalvos);
        const header = document.querySelector('header');

        const boasVindas = document.createElement('p');
        boasVindas.className = 'boas-vindas';
        boasVindas.textContent = `Olá de novo, ${cadastro.nome}!`;

        header.appendChild(boasVindas);
    }
}

verificarCadastroExistente();
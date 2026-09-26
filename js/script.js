// ===== DADOS DOS PROJETOS =====

const projetos = [
    {
        categoria: 'Acolhimento',
        titulo: 'Casa Acolhedora',
        descricao: 'Oferecemos abrigo seguro, alimentação e cuidado imediato para crianças em situação de abandono ou risco.'
    },
    {
        categoria: 'Educação',
        titulo: 'Reconstruindo Sonhos',
        descricao: 'Apoio psicológico e pedagógico para ajudar as crianças a superarem traumas e retomarem o desenvolvimento escolar.'
    },
    {
        categoria: 'Adoção',
        titulo: 'Novo Lar',
        descricao: 'Programa de reintegração familiar e adoção responsável, conectando crianças a famílias preparadas para acolhê-las.'
    }
];

function gerarCardsProjetos() {
    return projetos.map((projeto) => `
        <article>
            <span class="badge">${projeto.categoria}</span>
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
        </article>
    `).join('');
}

// ===== TEMPLATES DAS PÁGINAS =====

function paginaInicio() {
    return `
        <section class="hero">
            <div class="hero-texto">
                <h2>Toda criança merece um lar</h2>
                <p>Ajude a construir um futuro melhor para quem mais precisa.</p>
            </div>
            <img src="../imagens/img2.jpg" alt="Criança sorrindo em ambiente acolhedor da ONG Era uma Vez" class="hero-imagem">
        </section>

        <section>
            <h2>Nossa Missão</h2>
            <p>Dar lar a todas as crianças.</p>
        </section>

        <section>
            <h2>Nosso Impacto</h2>
            <div class="impacto-numeros">
                <p>200 crianças acolhidas</p>
                <p>10 anos de atuação</p>
                <p>10 a 15 famílias reintegradas por ano</p>
            </div>
        </section>

        <section>
            <h2>Nossos Projetos</h2>
            <div class="projetos-lista">
                ${gerarCardsProjetos()}
            </div>
        </section>
    `;
}

function paginaProjetos() {
    return `
        <section>
            <h2>Como Doar</h2>
            <p>Sua doação, seja em dinheiro ou itens, ajuda diretamente a manter nossos projetos.</p>
        </section>

        <section>
            <h2>Seja Voluntário</h2>
            <p>Doe seu tempo e habilidades para transformar a vida de uma criança.</p>
        </section>
    `;
}

function paginaCadastro() {
    return `
        <div class="alerta alerta-erro" style="display: none;" id="alerta-form"></div>

        <form id="form-cadastro" novalidate>
            <fieldset>
                <legend>Dados Pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" required>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" placeholder="(00) 00000-0000" required>

                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" pattern="\\d{5}-\\d{3}" placeholder="00000-000" required>
            </fieldset>

            <fieldset>
                <legend>Área de Interesse</legend>

                <label for="doacao">
                    <input type="radio" id="doacao" name="interesse" value="doacao" required>
                    Doação
                </label>

                <label for="voluntariado">
                    <input type="radio" id="voluntariado" name="interesse" value="voluntariado" required>
                    Voluntariado
                </label>
            </fieldset>

            <button type="submit">Cadastrar</button>
        </form>
    `;
}

// ===== NAVEGAÇÃO (SPA) =====

const templates = {
    inicio: paginaInicio,
    projetos: paginaProjetos,
    cadastro: paginaCadastro
};

function navegarPara(nomePagina) {
    const conteudo = document.getElementById('conteudo');
    const template = templates[nomePagina];

    if (template) {
        conteudo.innerHTML = template();

        if (nomePagina === 'cadastro') {
            aplicarMascaras();
        }
    }
}

function aplicarMascaras() {
    IMask(document.getElementById('cpf'), {
        mask: '000.000.000-00'
    });

    IMask(document.getElementById('telefone'), {
        mask: '(00) 00000-0000'
    });

    IMask(document.getElementById('cep'), {
        mask: '00000-000'
    });
}

document.querySelectorAll('[data-pagina]').forEach((link) => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault();
        const pagina = link.getAttribute('data-pagina');
        navegarPara(pagina);
    });
});

// ===== MENU HAMBÚRGUER =====

const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('aberto');
});
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
// ===== FORMULÁRIO (delegação de eventos) =====

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
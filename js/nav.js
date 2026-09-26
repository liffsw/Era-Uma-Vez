const templates = {
    inicio: paginaInicio,
    projetos: paginaProjetos,
    cadastro: paginaCadastro
};

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

document.querySelectorAll('[data-pagina]').forEach((link) => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault();
        const pagina = link.getAttribute('data-pagina');
        navegarPara(pagina);
    });
});

const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('aberto');
});
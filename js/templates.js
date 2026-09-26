function gerarCardsProjetos() {
    return projetos.map((projeto) => `
        <article>
            <span class="badge">${projeto.categoria}</span>
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
        </article>
    `).join('');
}

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
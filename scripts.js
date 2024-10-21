document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Cria uma nova linha na tabela
    const tabela = document.getElementById('tabelaCadastro').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    // Adiciona células com os dados
    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);
    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    // Limpa os campos do formulário
    document.getElementById('cadastroForm').reset();
});
// Função para verificar se um valor é um número válido
function isValidNumber(value) {
    return !isNaN(value) && value !== '';
}

// Primeiro Formulário: leadCalculatorForm
document.getElementById("leadCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var Ticketproduto = parseFloat(document.getElementById("Ticketproduto").value);
    var Roas = parseFloat(document.getElementById("Roas").value);
    var Leads = parseFloat(document.getElementById("Leads").value);
    var VendasLancamento = parseFloat(document.getElementById("VendasLancamento").value);

    if (!isValidNumber(Ticketproduto) || !isValidNumber(Roas) || !isValidNumber(Leads) || !isValidNumber(VendasLancamento)) {
        alert('Por favor, insira valores válidos para todos os campos.');
        return;
    }

    var custoPorLead = (Ticketproduto / Roas) / (Leads / VendasLancamento);

    document.getElementById("custoPorLead").textContent = custoPorLead.toFixed(2);
    document.getElementById("resultado").style.display = "block";
});

// Segundo Formulário: QntInvProxLanc_form
document.getElementById('QntInvProxLanc_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores de receita e investimento
    const receita = parseFloat(document.getElementById('Inv_anum').value);
    const investimento = parseFloat(document.getElementById('Receita_anum').value);

    // Verifica se os valores são válidos
    if (!isValidNumber(receita) || !isValidNumber(investimento)) {
        alert('Por favor, insira valores válidos para receita e investimento.');
        return;
    }

    // Calcula o ROAS
    const roas = parseInt(receita / investimento);

    // Exibe o resultado
    document.getElementById('Roas_id').textContent = roas.toFixed(1);
    document.getElementById('resultado_3').style.display = 'block';

    // Verifica se o ROAS é menor que 3 e exibe uma mensagem de aviso
    if (roas < 3) {
        document.getElementById('avisoRoas').style.display = 'block';
        document.getElementById('lucro').style.display = 'none';
    } else {
        document.getElementById('avisoRoas').style.display = 'none';
        // Exibe mensagens de lucro conforme o valor do ROAS
        if (roas === 3) {
            document.getElementById('lucro').textContent = 'Você teve 10% de lucro.';
        } else if (roas == 5) {
            document.getElementById('lucro').textContent = 'Você teve 30% de lucro.';
        } else {
            document.getElementById('lucro').textContent = '';
        }
        document.getElementById('lucro').style.display = 'block';
    }
});
document.getElementById("Invlancamento_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor do investimento
    var investimento = parseFloat(document.getElementById("Investimento_T").value);

    // Verifica se o valor é válido
    if (!isValidNumber(investimento)) {
        alert('Por favor, insira um valor válido para o investimento.');
        return;
    }

    // Calcula as distribuições
    var aumentoDeBase = investimento * 0.10;
    var distribuicaoAce = investimento * 0.05;
    var capturaDeLead = investimento * 0.60;
    var rmktCoca = investimento * 0.02;
    var rmktAce = investimento * 0.02;
    var rmktLembrete = investimento * 0.04;
    var rmktAula = investimento * 0.10;
    var rmktPan = investimento * 0.02;
    var rmktvenda = investimento * 0.05;

    // Exibe os resultados
    document.getElementById("aumentoDeBase").textContent = aumentoDeBase.toFixed(2);
    document.getElementById("distribuicaoAce").textContent = distribuicaoAce.toFixed(2);
    document.getElementById("capturaDeLead").textContent = capturaDeLead.toFixed(2);
    document.getElementById("rmktCoca").textContent = rmktCoca.toFixed(2);
    document.getElementById("rmktAce").textContent = rmktAce.toFixed(2);
    document.getElementById("rmktLembrete").textContent = rmktLembrete.toFixed(2);
    document.getElementById("rmktAula").textContent = rmktAula.toFixed(2);
    document.getElementById("rmktPan").textContent = rmktPan.toFixed(2);
    document.getElementById("rmktvenda").textContent = rmktvenda.toFixed(2);

    // Calcula quanto sobrou após a distribuição
    //var totalDistribuido = (aumentoDeBase + distribuicaoAce + capturaDeLead + rmktCoca + rmktAce + rmktLembrete + rmktAula + rmktPan + rmktvenda);
    //var sobra = investimento - totalDistribuido;
    //document.getElementById("sobra").textContent = sobra.toFixed(2);

    document.getElementById("resultado_2").style.display = "block";
});

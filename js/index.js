// Primeiro Formulário: leadCalculatorForm
document.getElementById("leadCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var Ticketproduto = parseFloat(document.getElementById("Ticketproduto").value);
    var Roas = parseFloat(document.getElementById("Roas").value);
    var Leads = parseFloat(document.getElementById("Leads").value);
    var VendasLancamento = parseFloat(document.getElementById("VendasLancamento").value);

    if (isNaN(Ticketproduto) || isNaN(Roas) || isNaN(Leads) || isNaN(VendasLancamento)) {
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
    const investimento = parseFloat(document.getElementById('Inv_anum').value);
    const receita = parseFloat(document.getElementById('Receita_anum').value);

    // Verifica se os valores são válidos
    if (isNaN(receita) || isNaN(investimento)) {
        alert('Por favor, insira valores válidos para receita e investimento.');
        return;
    }

    // Calcula o ROAS
    const roas = receita / investimento;
    const lucro = (receita - investimento).toFixed(2);

    // Exibe o resultado
    document.getElementById('Roas_id').textContent = roas.toFixed(1);
    document.getElementById('resultado_3').style.display = 'block';

    // Verifica se o ROAS é menor que 3 e exibe uma mensagem de aviso
    if (roas < 3) {
        document.getElementById('avisoRoas').style.display = 'block';
        document.getElementById('lucro').style.display = 'none';
        document.getElementById('reenvestir').style.display = 'none';
        document.getElementById('total').style.display = 'none';
    } else {
        document.getElementById('avisoRoas').style.display = 'none';
        // Exibe mensagens de lucro conforme o valor do ROAS
        if (roas === 3) {
            const valorReinvestir = (lucro * 0.10).toFixed(2);
            document.getElementById('lucro').textContent = 'Você obteve 10% de lucro.';
            document.getElementById('reenvestir').textContent = `Reinvista: R$ ${valorReinvestir}`;
            document.getElementById('total').textContent = `Total: R$ ${investimento + parseFloat(valorReinvestir)}`; // ParseFloat para converter o valorReinvestir de string para número
            document.getElementById('lucro').style.display = 'block';
            document.getElementById('reenvestir').style.display = 'block';
            document.getElementById('total').style.display = 'block'; // Garante que o elemento 'total' seja exibido
        } else if (roas === 5) {
            const valorReinvestir = (lucro * 0.30).toFixed(2);
            document.getElementById('lucro').textContent = 'Você obteve 30% de lucro.';
            document.getElementById('reenvestir').textContent = `Reinvista: R$ ${valorReinvestir}`;
            document.getElementById('total').textContent = `Total: R$ ${investimento + parseFloat(valorReinvestir)}`; // ParseFloat para converter o valorReinvestir de string para número
            document.getElementById('lucro').style.display = 'block';
            document.getElementById('reenvestir').style.display = 'block';
            document.getElementById('total').style.display = 'block'; // Garante que o elemento 'total' seja exibido
        } else {
            document.getElementById('lucro').textContent = '';
            document.getElementById('reenvestir').style.display = 'none';
            document.getElementById('total').style.display = 'none';
        }
    }
    
});

document.getElementById("Invlancamento_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor do investimento
    var investimento = parseFloat(document.getElementById("Investimento_T").value);

    // Verifica se o valor é válido
    if (isNaN(investimento)) {
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


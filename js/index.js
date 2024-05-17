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




// Função para atualizar o link do checkout com as informações de rastreamento
function updateCheckoutLink() {
    const trackingInput = document.getElementById("tracking-input");
    const trackingInfo = trackingInput.value;

    // Verifica se há um código de rastreamento informado
    if (trackingInfo) {
        const checkoutURL = "/checkout.html?src=" + trackingInfo;
        window.location.href = checkoutURL;
    }
}

// Localiza o botão de checkout na página e adiciona um evento de clique
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", updateCheckoutLink);

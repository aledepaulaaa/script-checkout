// Função para obter os parâmetros da URL
function getURLParams(url) {
    const params = {};
    const paramsString = url.slice(url.indexOf("?") + 1);
    const paramPairs = paramsString.split("&");
    for (let pair of paramPairs) {
        const [key, value] = pair.split("=");
        params[key] = value;
    }
    return params;
}

// Função para obter o valor do parâmetro "src" da URL
function getTrackingInfo() {
    const currentURL = window.location.href;
    const params = getURLParams(currentURL);
    return params.src || "";
}

// Função para exibir os dados do checkout na página de checkout
function showCheckoutData() {
    const trackingInfo = getTrackingInfo();
    const trackingElement = document.getElementById("tracking-info");
    trackingElement.textContent = trackingInfo;
}

// Exibe os dados do checkout ao carregar a página de checkout
document.addEventListener("DOMContentLoaded", showCheckoutData);

// Preenchendo o h1 da página thanks

console.log(location.href);

const urlParams = new URLSearchParams(window.location.search);
const strName = urlParams.get("name");

// Preenche o h1 da página
document.querySelector(".nameUser").innerHTML = strName
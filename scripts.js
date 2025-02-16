// Botão "Voltar ao Topo"
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Animações ao rolar a página
const sections = document.querySelectorAll(".section");

const checkVisibility = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
};

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);

// Validação do formulário de contato
const formContato = document.getElementById("form-contato");

formContato.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do formulário

    // Captura os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Validação simples
    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso!");
        formContato.reset(); // Limpa o formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
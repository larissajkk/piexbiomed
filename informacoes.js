
// Seleciona todos os cartões
const cards = document.querySelectorAll('.card');

// Configura a animação de entrada
const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add('visivel');

            observador.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.15
});

// Observa cada cartão
cards.forEach((card) => {
    card.classList.add('animar');
    observador.observe(card);
});

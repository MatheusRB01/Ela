const formulario = document.querySelector("#form");

const dia = document.getElementById('dia')
const data = new Date()
dia.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })


formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    let numeroEscolhido = document.querySelector('.numero').value;

    function Premios() {
        const premios = ["Eu te amo",
            "Voce e incrivel",
            "Voce é uma mulher muito forte",
            "Voce e minha garotinha",
            "Voce e mais que capaz",
            "Saiba que eu tenho muito orgulho de voce meu amor",
            "Saiba que logo seremos nos dois para sempre",
            "Saiba que Deus e conosco",
            "Eu sei que voce é uma mulher muito forte",
            "Voce e meu maior bem",
            "Eu agradeço a Deus todos os dias por ter vc em minha vida",

        ]

        if (numeroEscolhido <= 1) {
            return premios[0];
        }
        if (numeroEscolhido <= 2) {
            return premios[1]
        }
        if (numeroEscolhido <= 3) {
            return premios[2]
        }
        if (numeroEscolhido <= 4) {
            return premios[3]
        }
        if (numeroEscolhido <= 5) {
            return premios[4]
        }
        if (numeroEscolhido <= 4) {
            return premios[5]
        }
        if (numeroEscolhido <= 6) {
            return premios[5]
        }
        if (numeroEscolhido <= 7) {
            return premios[6]
        }
        if (numeroEscolhido <= 8) {
            return premios[7]
        }
        if (numeroEscolhido <= 9) {
            return premios[8]
        }
        if (numeroEscolhido <= 10) {
            return premios[9]
        } else {
            return "eu te amo"
        }
    }
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = "";
    const p = document.createElement('p');

    p.innerHTML = Premios();
    resultado.appendChild(p);
    document.querySelector('.numero').value = '';
});

function msgPersonalizada() {
    window.location ="https://youtu.be/qwXzMp9w32w?si=Q6SMRZuIyIHwrDA6"
}










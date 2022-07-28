const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let getPeso = document.getElementById("peso");
    let getAltura = document.getElementById("altura");

    let peso = Number(getPeso.value);
    let altura = Number(getAltura.value);

    let imc = peso / (altura * altura);

    const divResultado = document.querySelector('.Resultado');
    divResultado.style.display ='block';

    const txtImc = document.querySelector('.Imc');
    const msg = document.querySelector('.Mensagem');

    const titleImc = document.querySelector('.Destaque');
    const emoji = document.querySelector('.Emoji');
    const submitBtn = document.querySelector('.SubmitBtn');

    if (imc < 18.50) {
        divResultado.style.borderColor = '#EF9A36';
        txtImc.innerText = `IMC: ${imc.toFixed(2)}`;
        titleImc.style.color = "#EF9A36";
        txtImc.style.color = "#EF9A36";
        msg.innerText = 'Abaixo do Peso';
        emoji.innerHTML = "<span>&#x1F628;</span>";

    } else if (imc >= 18.5 && imc < 24.9) {
        divResultado.style.borderColor = '#55D85A';
        txtImc.innerText = `IMC: ${imc.toFixed(2)}`;
        titleImc.style.color = "#55D85A";
        txtImc.style.color = "#55D85A";
        msg.innerText = 'Peso Normal';
        emoji.innerHTML = "<span>&#x1F44C;</span>";
        //submitBtn.style.backgroundColor = "#55D85A";

    } else if (imc >= 25 && imc < 29.9) {
        divResultado.style.borderColor = '#EF9A36';
        txtImc.innerText = `IMC: ${imc.toFixed(2)}`;
        titleImc.style.color = "#EF9A36";
        txtImc.style.color = "#EF9A36";
        msg.innerText = 'Acima do Peso';
        emoji.innerHTML = "<span>&#x1F628;</span>";
        
    } else if (imc >= 30 && imc < 34.9) {
        divResultado.style.borderColor = '#EF3651';
        txtImc.innerText = `IMC: ${imc.toFixed(2)}`;
        titleImc.style.color = "#EF3651";
        txtImc.style.color = "#EF3651";
        msg.innerText = 'Obesidade Grau I';
        emoji.innerHTML = "<span>&#x1F628;</span>";

    } else if (imc >= 35 && imc < 39.9) {
        divResultado.style.borderColor = '#EF3651';
        txtImc.innerText = `IMC: ${imc.toFixed(2)}`;
        titleImc.style.color = "#EF3651";
        txtImc.style.color = "#EF3651";
        msg.innerText = 'Obesidade Grau II';
        emoji.innerHTML = "<span>&#x1F628;</span>";

    } else if (imc >= 40) {
        divResultado.style.borderColor = '#EF3651';
        txtImc.innerText = `IMC: ${imc.toFixed(2)}`;
        titleImc.style.color = "#EF3651";
        txtImc.style.color = "#EF3651";
        msg.innerText = 'Obesidade Mórbida';
        emoji.innerHTML = "<span>&#x1F631;</span>";
    }
});
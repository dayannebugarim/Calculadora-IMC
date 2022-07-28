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
    //console.log(divResultado);

    if (imc < 18.50) {
        divResultado.style.backgroundColor = 'green';
        divResultado.innerText = `IMC: ${imc.toFixed(2)}\nAbaixo do Peso`;
        //alert(`IMC: ${imc}\nAbaixo do Peso`);
    } else if (imc >= 18.5 && imc < 24.9) {
        divResultado.style.backgroundColor = 'plum';
        divResultado.innerText = `IMC: ${imc.toFixed(2)}\nPeso Normal`;
    } else if (imc >= 25 && imc < 29.9) {
        divResultado.style.backgroundColor = 'red';
        divResultado.innerText = `IMC: ${imc.toFixed(2)}\nSobrepeso`;
    } else if (imc >= 30 && imc < 34.9) {
        divResultado.style.backgroundColor = 'blue';
        divResultado.innerText = `IMC: ${imc.toFixed(2)}\nObesidade Grau I`;
    } else if (imc >= 35 && imc < 39.9) {
        divResultado.style.backgroundColor = 'yellow';
        divResultado.innerText = `IMC: ${imc.toFixed(2)}\nObesidade Grau II`;
    } else if (imc >= 40) {
        divResultado.style.backgroundColor = 'orange';
        divResultado.innerText = `IMC: ${imc.toFixed(2)}\nObesidade Mórbida`;
    }
});



function CalculoImc() {
    /*let getPeso = document.forms["form"]["txtPeso"].value;
    let getAltura = document.forms["form"]["txtAltura"].value;
    
    //window.alert(`Peso: ${getPeso}, Altura: ${getAltura}`);
*/
    

    let peso = parseFloat(getPeso);
    let altura = parseFloat(getAltura);
    //window.alert(typeof(peso), typeof(altura));

    let imc = peso / (altura * altura);
    //window.alert(`IMC: ${imc}`);

    switch (imc) {
        case (imc < 18.5):
            return alert(`IMC: ${imc}\nAbaixo do Peso`);
            break;
        case (imc >= 18.5 && imc < 24.9):
            return alert(`IMC: ${imc}\nPeso Normal`);
            break;
        case (imc >= 25 && imc < 29.9):
            return alert(`IMC: ${imc}\nSobrepeso`);
            break;
        case (imc >= 30 && imc < 34.9):
            return alert(`IMC: ${imc}\nObesidade Grau I`);
            break;
        case (imc >= 35 && imc < 39.9):
            return alert(`IMC: ${imc}\nObesidade Grau II`);
            break;
        case (imc >= 40):
            return alert(`IMC: ${imc}\nObesidade Mórbida`);
            break;
    }
}
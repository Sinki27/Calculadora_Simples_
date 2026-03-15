// Nome arquivo calculadora.js

// Formas de criar uma variavel 
/*
    var - > Permite criar um espaço na memoria para guardar dados variaveis (De preferencia no escopo global do arquivo)
    let - > Permite criar um espaço na memoria para guardar dados variaveis (global local { })
    const - > Permite criar um espaço na memoria para guardar dados constantes


*/


//Criando um objeto para receber o elemento do HTML
const botaoSomar = document.getElementById('somar');
const botaoSubtrair = document.getElementById('subtrair');
const botaoMultiplicar = document.getElementById('multiplicar');
const botaoDividir = document.getElementById('dividir');
const botaoApagar = document.getElementById('ce');

const displayResultado = document.getElementById('resultado');



function calcularSomar() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    let soma = valor1 + valor2;

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.innerText = "Por favor, digite números válidos.";
        return;
    }

    displayResultado.innerText = soma;

    console.log(soma);
}

function calcularSubtrair() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.innerText = "Por favor, digite números válidos.";
        return;
    }

    let subtrair = valor1 - valor2;

    displayResultado.innerText = subtrair;

    console.log(subtrair);
}

function calcularMultiplicar() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.innerText = "Por favor, digite números válidos.";
        return;
    }

    let multiplicar = valor1 * valor2;

    displayResultado.innerText = multiplicar;

    console.log(resultado);
}

function calcularDividir() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.innerText = "Por favor, digite números válidos.";
        return;
    }

    let dividir = valor1 / valor2;

    displayResultado.innerText = dividir;

    console.log(resultado);
}

function apagarTexto() {
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';

    //let apagar = valor1 && valor2;

    displayResultado.innerHTML = '0';
    // Define o valor do input como vazio
    //document.getElementById('meuInput').value = '';

   
}

botaoSomar.addEventListener('click', function() {
    calcularSomar();
});

botaoSubtrair.addEventListener('click', function() {
    calcularSubtrair();
});

botaoMultiplicar.addEventListener('click', function() {
    calcularMultiplicar();
});

botaoDividir.addEventListener('click', function() {
    calcularDividir();
});
botaoApagar.addEventListener('click', function() {
    apagarTexto();
});
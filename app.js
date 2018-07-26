function calcular(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = calcImc(peso, altura);
}

function calcImc(peso, altura){
    let result = peso/(altura*altura).toFixed(2);
    switch(result) {
        case (result < 17):
            return result + " Muito abaixo do peso";
            break;
        case (result <= 18.49):
            return result + " Abaixo do peso";
            break;
        case (result <= 24.99):
            return result + " Peso normal";
            break;
        case (result <= 29.99):
            return result + " Acima do peso";
            break;
        case (result <= 34.99):
            return result + " Obesidade I";
            break;
        case (result <= 39.99):
            return result + " Obesidade II (severa)";
            break;  
        default:
            return result + " Obesidade III (mórbida)";
    }
}

function reset(){
    document.getElementById("form-group").reset();
}
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let numberA = document.getElementById('numberA').value;
    let numberB = document.getElementById('numberB').value;

    // Converte os valores para números
    numberA = Number(numberA);
    numberB = Number(numberB);

    if (numberB > numberA) {
        alert('O formulário é válido');
    }   else {
        alert('O formulário é inválido');
    }
});


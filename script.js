document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let numberA = document.getElementById('numberA').value;
    let numberB = document.getElementById('numberB').value;

    // Converte os valores para números
    numberA = Number(numberA);
    numberB = Number(numberB);

    if (numberB > numberA) {
        document.getElementById('form-success').style.display = 'block';
        document.getElementById('form-error').style.display = 'none';
    }   else {
        document.getElementById('form-success').style.display = 'none';
        document.getElementById('form-error').style.display = 'block';
    }
});


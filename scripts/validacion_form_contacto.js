    const nombreF = document.getElementById('nombre').value;
    const emailF = document.getElementById('email').value;
    const asuntoF = document.getElementById('asunto').value;

function enviarForm(){         
    if(nombreF === '' || emailF === '' || asuntoF === ''){
        alert('Por favor revisa los datos, faltan completar campos obligatorios.')
    }
};
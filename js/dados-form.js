var btnSalvar = window.document.querySelector('#btnSalvar');

btnSalvar.addEventListener("click", function (event) {
    event.preventDefault();
    
    var form1 = document.querySelector('#form1');
    console.log(form1.nome.value);
    console.log(form1.sobrenome.value);
    console.log(form1.mora.value);
})
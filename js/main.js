$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
    });
    $('.menu-haburger').click(function(){
        $('nav').slideToggle();
    })
    $('#telefone').mask('(00) 00000-0000')
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            mensagem: {
                required: true,
            },
            cep: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})

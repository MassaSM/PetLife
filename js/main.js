$('.btn__mobile').click(function(){
    $('.menu').addClass('active')
});

$('.btnFecharMenu').click(function(){
    $('.menu').removeClass('active')
});

/*Accordeon*/
var elementosDuvida = document.querySelectorAll('.item__faq')

elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('active')
    })
})
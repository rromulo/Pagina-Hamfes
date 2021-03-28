$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href')
        var offSetTop = $(href).offset().top
        $('html,body').animate({
            'scrollTop':offSetTop
        })
        return false
    })
    /******************FUNÇÕES PARA O MENU MOBILE********************/
    $('.fa-bars').click(function(){
        $(this).find('nav ul').slideToggle()

    })

    $('.mobile ul li').hover(function(){
        $('.mobile ul li').css('background-color','rgb(0,0,0,0.2)')
        $(this).css('background-color','rgb(255,255,255,0.8)')
    })
    /******************FIM FUNÇÕES MENU MOBILE**********************/ 
})
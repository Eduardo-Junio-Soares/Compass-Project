$(function () {
    $('.btn-type').click(function () {
        $('.btn-type').removeClass('active')
        $(this).toggleClass('active')
    })

    // $('.header-menu ul li').each(function (event) {
    //     $(this).on('click', function () {
    //         $(this).parent().find('.options-down').removeClass('down')
    //         $(this).toggleClass('click')

    //         if ($(this).hasClass('click')) {
    //             $('.options-down').removeClass('down')
    //         }

    //         $(this).find('.options-down').toggleClass('down')
    //     })
    // })

    $('#compass').click(function (e) {
        e.preventDefault()
        $('#itemCompass').toggleClass('down')
        $('#itemCompass').css('position', 'relative')
        })


    $('#agent').click(function (e) {
        e.preventDefault()
        $('#itemAgent').toggleClass('down')
        // return console.log(e)
    })
    
    $('.nav-toggle, .nav-close').click(function (e) {
        e.preventDefault()
        $('.header-menu').toggleClass('show-bar')
        $('.overlay').toggleClass('overlay-active')
    })

})


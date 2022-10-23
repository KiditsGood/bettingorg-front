$('#burger').click(function () {
    $(this).toggleClass('open')
    $('.burger').toggleClass('active')
    $('html').toggleClass('hidden')
    $('.overlay').toggleClass('active')
})
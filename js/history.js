$('.block__tabs-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$('.visible').click(function () {
    $(this.lastElementChild).slideToggle(200)
})

$('.block__date').click(function () {
    $('.date__hidden').slideToggle(200)

})

$('.date__hidden .block__date-text').click(function () {
    $(this).addClass('active').siblings().removeClass('active')

    $('.date__hidden').slideUp(200)

})
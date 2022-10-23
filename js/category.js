$('.list__sport-item').click(() => {
    $('.list__hidden').addClass('active')
    $('.list__sport').addClass('hidden')
})

$('.list__hidden-name--arrow').click(() => {
    $('.list__hidden').removeClass('active')
    $('.list__sport').removeClass('hidden')
})

$('.list__hidden-item').click(() => {
    $('.list__hidden').addClass('hidden')
    $('.list__matches').addClass('active')
})

$('.list__matches-name--arrow').click(() => {
    $('.list__matches').removeClass('active')
    $('.list__hidden').removeClass('hidden')
})
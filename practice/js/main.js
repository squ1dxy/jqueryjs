$('.ask').on('click', function(event) {
    event.preventDefault();
    $('.answer').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(400)
})


$('button[data-target]').click(function() {
    let attribute = $(this).attr('data-target');
    if(attribute == 'all') {
        $('div[data-target]').slideDown();
    }else {
        $('div[data-target]').slideUp();
    }
    $(`div[data-target="${attribute}"]`).slideDown();
})

$('.js-btn-top').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0,
    },{
        duration: 1000
    })
}) 


$('.js-sroll-to-id').click(function(e) {
    e.preventDefault();
    let attribute = $(this).attr('href');
    let toLink = $(attribute).offset().top;
    $('html,body').animate({
        scrollTop: toLink,
    },{
        duration: 1000
    })
})

// function typing(element) {
//     let text = element.html();
//     let fullText = '';
//     let index = 0;

//     let typingInterval = setInterval(() => {
//         fullText += text[index];
//         element.html(fullText);
//         index++;
//           'Header title' == 'Header title'
//         if(text == fullText) {
//             clearInterval(typingInterval);
//         }
//     }, 300);
   
// }
// typing($('h1'));


let text = $('h1').html();
function typing(element, i = 0, fullText = '') {
    fullText += text[i];
    element.html(fullText);
    i++;
    if(text != fullText) {
        setTimeout(() => typing(element,i,fullText),150);
    }
}
typing($('h1'));

let textType = $('p.loool').html();
let typingd = (element2, l = 0, fullTextP = '') => {
    fullTextP += textType[l];
    element2.html(fullTextP);
    l++;
    if(textType != fullTextP) {
        setTimeout(() => typingd(element2,l,fullTextP),30);
    }
}
typingd($('p.loool'));


$('.js-modal-show').on('click', function(event) {
    event.preventDefault();
    $('.modal').fadeIn(500);
    $('body').css({overflow: 'hidden'})
})
$('.close').click(function(e) {
    e.preventDefault();
    $('.modal').fadeOut();
    $('body').css({overflow: 'visible'})
})

$('.modal').click(function(event) {
    if(event.target == event.currentTarget) {
        $('.modal').fadeOut(300);
        $('body').css({overflow: 'visible'})
    }
})

$(window).on('scroll', function() {
    if($(this).scrollTop() > 200){
        $('.js-btn-top').addClass('show')
    }else {
        $('.js-btn-top').removeClass('show')
    }
})
$('.read-more').click(function(e) {
    e.preventDefault();
    if($(this).html().trim() == 'Read More') {
        $(this).html('Hidden');
    }else {
        $(this).html('Read More')
    }
    $('.text-hidden').toggleClass('hidden');
})



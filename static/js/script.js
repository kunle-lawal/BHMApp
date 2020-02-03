
let xsm = 700;
let sm = 838;
let med = 1258;
let large = 1440;
let xlarge = 1680;
let size = breakPoint();
var openingAnimationPlayed = false;

$(window).resize(function () {
    size = breakPoint();
})

if(size == 'xlarge' || size == 'large') {
    playDesktopAnimation(function() {
        $('.cards').addClass('placedCard');
    });
}

let cardAnimationFinished = true;
$('.card').click(function () {
    if (!openingAnimationPlayed || !cardAnimationFinished) {return}
    let id = $(this).attr('id');
    $(this).toggleClass('openCard');
    $(this).toggleClass('closedCard');
    if ($(this).hasClass('openCard')) {
        // console.log(t2);
        cardAnimationFinished = false;
        anime({
            targets: '#' + id,
            easing: 'linear',
            height: '100%',
            width: '100%',
            margin: 'auto',
            duration: 150,
            // delay: '100',
            complete: function name(params) {
                cardAnimationFinished = true;
                console.log(cardAnimationFinished);
                anime.remove('#'+id)
            }
        })
    } else {
        console.log('got here')
        removeStyling(id);
    }
})

$(".page").scroll(function () {
    $("span").text(x += 1);
});

function removeStyling(attr) {
    let element = document.getElementById(attr);
    element.removeAttribute('style');
}

function getPageWidth() {
    return (window.innerWidth > 0) ? window.innerWidth : screen.width;
}

function breakPoint() {
    let pageWidth = getPageWidth();
    if (pageWidth < xsm) {
       return 'xsm';
    } else if (pageWidth < sm && pageWidth > xsm) {
        return 'sm';
    } else if (pageWidth < med && pageWidth > sm) {
        return 'med';
    } else if (pageWidth < large && pageWidth > med) {
        return 'large'
    } else if (pageWidth > large) {
        return 'xlarge';
    }
}

function playDesktopAnimation(onComplete) {
    let tl = anime.timeline({
        duration: 750,
    })
    tl.add({
        targets: '.page',
        easing: 'easeInOutBack',
        top: "5%",
        bottom: "5%",
        left: "8%",
        right: "8%",
        // maxWidth: "100%",
        delay: 1000,
    })

    tl.add({
        targets: 'h1',
        easing: 'easeInOutBack',
        opacity: [0, 1],
        top: ['-100px', '0'],
        delay: anime.stagger(200, { grid: [3, 3], from: 'center' }),
    }, '-=800')

    tl.add({
        targets: '.title',
        easing: 'linear',
        opacity: [0, 1],
        top: ['50px', '0'],
        duration: 550,
        delay: anime.stagger(200, { grid: [3, 3], from: 'center' }),
    })
    
    // tl.add({
    //     targets: '.card',
    //     easing: 'easeInOutBack',
    //     margin: 0,
    //     backgroundColor: '#211d1d',
    //     backgroundPosition: '50% 0%',
    //     delay: anime.stagger(200, { grid: [3, 3], from: 'center' }),
    // })

    // tl.add({
    //     targets: '.card .photo',
    //     easing: 'spring',
    //     opacity: '1',
    //     delay: anime.stagger(200, { grid: [3, 3], from: 'center' }),
    //     complete: function (anim) {
    //         openingAnimationPlayed = true;
    //         onComplete();
    //     }
    // }, '-=1300')
}

function playMobileAnimation() {

}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
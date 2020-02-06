
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
} else if (size == 'sm' || size == 'xsm') {
    playMobileAnimation(function () {
        $('.cards').addClass('placedCard');
    });
}

let cardAnimationFinished = true;
let hitBottom = false;
$(".page").scroll(function () {
    var pageHeight = $('.page').height();
    var pageScrollHeight = $('.page')[0].scrollHeight;
    var scrollPosition =  $('.page').scrollTop();
    // console.log(`${Math.round(pageScrollHeight - pageHeight) - 10} <=  ${scrollPosition}`);
    console.log(`${Math.round(pageScrollHeight - pageHeight) - 10 <= scrollPosition}`);
    if (Math.round(pageScrollHeight - pageHeight) - 10 <= scrollPosition && !hitBottom) {
        $('.page').css('transition', 'initial');
        anime({
            targets: '.page',
            easing: 'easeInOutBack',
            duration: 450,
            bottom: (size == 'xlarge' || size == 'large') ? ['5%', '20%'] : '100px',
            delay: 100
        })
        $('footer').css('opacity', '1');
        hitBottom = true;
    } else {
        $('.page').css('transition', 'bottom 0.5s');
        $('.page').css('bottom', (size == 'xlarge' || size == 'large') ? '5%' : '0px');
        hitBottom = false;
    }
    $('.card').each(function(i) {
        let id = $(this).attr('id');
        if(isScrolledIntoView(this)) {
            $(this).addClass('slideInCard');
        }
    })
});

function removeStyling(id) {
    let element = document.getElementById(id);
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

function playMobileAnimation(onComplete) {
    let tl = anime.timeline({
        duration: 750,
    })
    tl.add({
        targets: '.page',
        easing: 'spring',
        top: "25%",
        bottom: "25%",
        left: "0px",
        right: "0px",
        delay: 1000,
    })

    tl.add({
        targets: 'h1',
        easing: 'easeInOutBack',
        opacity: [0, 1],
        top: ['-100px', '-25px'],
        delay: anime.stagger(200, { grid: [3, 3], from: 'center' }),
    }, '-=2000')

    tl.add({
        targets: '.page',
        easing: 'spring',
        top: "0%",
        bottom: "0%",
        left: "0px",
        right: "0px",
        // delay: 1000,
    })

    tl.add({
        targets: 'h1',
        easing: 'easeInOutBack',
        top: ['-25px', '25px'],
        delay: anime.stagger(200, { grid: [3, 3], from: 'center' }),
    }, '-=2000')

    tl.add({
        targets: '.title',
        easing: 'linear',
        opacity: [0, 1],
        top: ['100px', '25px'],
        duration: 550,
        delay: anime.stagger(200, { grid: [3, 3], from: 'center' }),
    }, '-=1000')
}

function isScrolledIntoView(elem) {
    var docViewTop = $('.page').scrollTop();
    var docViewBottom = $('.page').height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    // console.log(`${elemBottom} <= ${docViewBottom}, ${elemTop} >= ${docViewTop} = ${((elemBottom <= docViewBottom) && (elemTop <= docViewTop))}`)
    return ((elemBottom <= docViewBottom + 800) && (elemTop <= (docViewTop + 800)));
}
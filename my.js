
$(document).ready(function () {
    let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        },
        gallery: {
            enabled: true
        },
        callbacks: {
            open: function () {
                $('body').css('padding-right', scrollBarWidth + 'px');
            },
            close: function () {
                $('body').css('padding-right', '');
            }
        }
    });
});



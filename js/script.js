//Скролл страниц
$(function() {
    
    $('.panel').css({
        'height':$(window).height(768)
    });
    
    $.scrollify({
        section:'.panel',
        scrollSpeed:800,
        offset: 0,
        scrollbars: false
    });
});


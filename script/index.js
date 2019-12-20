
$(document).ready(function() {
    plansite = $('.map') 
    arrow = $('.map img')
    blockslide = $('#blockPlanSite').hide()

    plansite.on('click', function() {
        blockslide.slideToggle(1000);

        arrow.css({
            "-webkit-transform": "rotate(180deg)",
            "-moz-transform": "rotate(180deg)",
            "transform": "rotate(180deg)" 
        });
    });
});





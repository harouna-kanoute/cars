
$(document).ready(function() {
    plansite = $('.map') 
    arrow = $('.map img')
    blockslide = $('#blockPlanSite').hide()
    
    plansite.on('click', function() {
        blockslide.slideToggle(1000);
        arrow.toggleClass("arrowToggle");
    });
});




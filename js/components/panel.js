$(document).ready(function(){
    $('.js-panel-trigger, .js-panel > header').on('click touchstart',function (e) {
        var openPanels = $('.js-panel.is-open');
        var panel = $(this).closest('.level').find('.js-panel').first();

        panel.toggleClass('is-open');
        
        if (openPanels) {
            openPanels.each( function(index, element) {
                $(element).removeClass('is-open');
            });
        };
            
        e.preventDefault();
    });
});
    

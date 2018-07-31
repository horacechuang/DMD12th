$(function () {
    
    var filterList = {
    
        init: function () {
        
            // MixItUp plugin
            // http://mixitup.io
            $('#galleryPortfolio').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: filterList.hoverEffect()
            });                
        
        },
        
        hoverEffect: function () {
        
            // Simple parallax effect
            $('#galleryPortfolio .portfolio').hover(
                function () {
                    $(this).find('.label').stop().animate({bottom: 0}, 150, 'easeOutQuad');
                    $(this).find('img').stop().animate({top: 30}, 500, 'easeOutQuad');                
                },
                function () {
                    $(this).find('.label').stop().animate({bottom: -80}, 150, 'easeInQuad');
                    $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');                                
                }        
            );                
        
        }
    };
    
    // Run the show!
    filterList.init();
    
});    
//Make sure the document is fully loaded
$(document).ready(function() {
    
    var $menu = $('#menu');
    var $iNav = $('#i-nav');
    
    $iNav.click( function(event) {
        if( $('#menu').is(':hidden') ) {
            $('#menu').show('fast');
        } else {
            $('#menu').hide('fast');
        }
        event.preventDefault();
    } );
    
//    $(window).resize(function() {
//        if( $(window).width() < 825 ){
//                    
//        }
//    });
    
});
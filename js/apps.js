//Make sure the document is fully loaded
$(document).ready(function() {
    // Create Variables
    var $menu = $('#menu');
    var $iNav = $('#i-nav');
    var $window = $(window);
    
    
    //Click on the menu icon aka $iNav
    $iNav.click( function(event) {
        //Test if $menu is :hidden
        if( $('#menu').is(':hidden') ) {
            //If $menu is :hidden, show it.
            $('#menu').show('fast');
        } 
            //If menu is showing, hide it.
            else {
            $('#menu').hide('fast');
        }
        event.preventDefault();
    } );
    
    //TEST BROWSER WINDOW WIDTH
    
    $window.resize(function() {
                       
    });
    
    //IF MORE THAN 750px
    //IF 749 and below
    
    
   
});
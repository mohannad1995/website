/* globl, console, alart */

$(function () {
    
    'use strict';
    // give him full height in window
    $('.nav-side').height($(window).height());
    
    // when resize browser the navbar keep on height size 
    $(window).resize(function () {
        $('.nav-side').height($(window).height());
    });
    
        
    
    
    // show navbar and hide
    $('#bt').click(function () {
        $('.nav-side').toggle().css('left', '0');
    });
    
    // add class active on li menu
    $('.nav-side li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    
});
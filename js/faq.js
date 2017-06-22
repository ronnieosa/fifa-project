/**
 * Created by knrainy on 17/6/8.
 */


'use strict';

$(function() {
    $('.list-tabs li .title').on('click',function(){
        $(this).siblings('.content').addClass('live').parent().parent().siblings('li').children().children('.content').removeClass('live');
        $(this).children('span').removeClass().addClass('top');
        $(this).parent().parent().siblings('li').children().children().children('span').removeClass().addClass('down');

        // $(this).children().children('img').css('-webkit-transform','rotate('+180+'deg)');
    });


});

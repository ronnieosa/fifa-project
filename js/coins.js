/**
 * Created by knrainy on 17/6/7.
 */


'use strict';

$(function(){
   // 菜单栏激活状态切换
    $('.platform li a ').on('click',function(){
        $(this).addClass('active').parent().siblings('li').children().removeClass('active');
    });
    $('.method li a ').on('click',function(){
        $(this).addClass('active').parent().siblings('li').children().removeClass('active');
    })
});

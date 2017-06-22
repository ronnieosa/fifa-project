/**
 * Created by knrainy on 17/6/5.
 */

'use strict';

$(function(){
    var windowWidth = $(window).width();
    var step = 768;
    if(windowWidth < step){
        $('.fifa-li').on('click',function(){
            $(this).children('ul').toggle();
        });
    }else{
        //导航二级菜单显示隐藏
        //  左侧导航
        $('.fifa-li').hover(function(){
            $(this).children('ul').css('display','block');
            $(this).children('a').css('color','#333333');
        },function(){
            $(this).children('ul').css('display','none');
            $(this).children('a').css('color','#f9d600');
        });

        $('#thumb_goods').hover(function(){
            $('.shopcar-thumbnail').css('display','block');
        },function(){
            $('.shopcar-thumbnail').css('display','none');
        });
        // 购物车导航
        $('.shopcar-li').hover(function(){
            $('.shopcar-thumbnail').css('display','block')
        },function(){
            $('.shopcar-thumbnail').css('display','none')
        });
    }
    // 导航选中状态active切换
    // $('#ul_main > li').on('click',function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    // })


    //首页带图片select2插件
    $("#sel_menu").select2({
        minimumResultsForSearch: -1
    });
    $("#sel_menu2").select2({
        templateResult: formatState2,
        templateSelection: formatState2,
        minimumResultsForSearch: -1
    });
});

// function formatState(state) {
//     if (!state.id) { return state.text; }
//     var $state = $(
//         '<span><img src="../img/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
//     );
//     return $state;
// }
function formatState2(state) {
    if (!state.id) { return state.text; }
    var $state2 = $(
        '<span><img src="../img/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state2;
}



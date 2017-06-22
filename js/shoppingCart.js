/**
 * Created by knrainy on 17/6/9.
 */

'use strict';

$(function(){
    // 购物车功能(计数,删除)
    // 计数
    $('.add').each(function(){
        $(this).on('click',function(){
            var count= $(this).siblings('input').val();
            count++;
            $(this).siblings('input').val(count);
        })
    });
    $('.reduce').each(function(){
        $(this).on('click',function(){
            var count= $(this).siblings('input').val();
            if(count <= 1){
                count = 1;
                $(this).siblings('input').val(count);
            }else{
                count--;
                $(this).siblings('input').val(count);
            }
        })
    });
    // 移除
    $('.del').each(function(){
        $(this).on('click',function(){
            $(this).parent().parent('tr').hide();
        })
    });

    // 添加球员板块
    var str= '';
    str += '<div class="player-info">';
    str +=    '<div class="container">';
    str +=    '<div class="player-content">';
    str +=       '<span class="closeIcon">&times</span>';
    str +=        '<h3>Player Information</h3>'
    str +=        '<div class="row">'
    str +=             '<div class="col-md-7">'
    str +=                 '<ul class="playerInfo-list">'
    str +=                     '<li>'
    str +=                         '<p><em class="red">*</em>Player Name：</p>'
    str +=                         '<select class="selectpicker" data-live-search="true" data-size="5" title="please choise the player">'
    str +=                            '<option></option>'
    str +=                             '<option>Casillas</option>'
    str +=                             '<option>Reyna</option>'
    str +=                             '<option>Diego - Lopez</option>'
    str +=                             '<option>Albiol</option>'
    str +=                             '<option>Ramos</option>'
    str +=                            '<option>Arbeloa</option>'
    str +=                             '<option>Capdevila</option>'
    str +=                             '<option>Peak</option>'
    str +=                             '<option>Puyol</option>'
    str +=                             '<option>Marchena</option>'
    str +=                         '</select>'
    str +=                     '</li>'
    str +=                     '<li>'
    str +=                         '<p><em class="red">*</em>Start Price：</p>'
    str +=                         '<input type="text">'
    str +=                    '</li>'
    str +=                     '<li>'
    str +=                         '<p><em class="red">*</em>Buy Now Price：</p>'
    str +=                         '<input type="text" value="10 k" class="bg" disabled="disabled">'
    str +=                     '</li>'
    str +=                     '<li>'
    str +=                         '<p><em class="red">*</em>Time Remaining：</p>'
    str +=                         '<input type="text">'
    str +=                     '</li>'
    str +=                     '<li>'
    str +=                         '<p><em class="red">*</em>Quantity of listed players：</p>'
    str +=                         '<em>'
    str +=                             '<button class="reduce" type="button">-</button>'
    str +=                             '<input type="text" value="1">'
    str +=                             '<button class="add" type="button">+</button>'
    str +=                         '</em>'
    str +=                    '</li>'
    str +=                '</ul>'
    str +=             '</div>'
    str +=             '<div class="col-md-5 infoImg">'
    str +=                '<img src="../img/info.jpg" class="img-responsive">'
    str +=            '</div>'
    str +=            '<div class="col-md-12 infoNotice">'
    str +=                 '<h5>Notice：</h5>'
    str +=                 '<p>1 if you have 2 or more same players, please fill the Numbers of listed players.</p>'
    str +=                '<p>2 if you have differents players, please click Add more players.</p>'
    str +=             '</div>'
    str +=        '</div>'
    str +=     '</div>'
    str +=     '</div>'
    str += '</div>'

    // alert(str)
    $('.btn-add').on('click',function(){
        $('#addPlayerModel').append(str);
        // 实例化
        $('.selectpicker').selectpicker({});
        // 调用+-方法
        $('.add').each(function(){
            $(this).on('click',function(){
                var count= $(this).siblings('input').val();
                count++;
                $(this).siblings('input').val(count);
            })
        });
        $('.reduce').each(function(){
            $(this).on('click',function(){
                var count= $(this).siblings('input').val();
                if(count <= 1){
                    count = 1;
                    $(this).siblings('input').val(count);
                }else{
                    count--;
                    $(this).siblings('input').val(count);
                }
            })
        });
        // 关闭按钮
        $('.closeIcon').each(function(){
            $(this).on('click',function(){
                $(this).parent().parent().parent('.player-info').hide()
            })
        })
    })




    // $("#sel_menu3").select2({
    //     placeholder: "please choise the player"
    //     // minimumResultsForSearch: -1
    // });
    // $("#sel_menu4").select2({
    //     placeholder: "please choise the player"
    //     // minimumResultsForSearch: -1
    // });
});

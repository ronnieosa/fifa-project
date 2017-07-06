/**
 * Created by knrainy on 17/6/9.
 */

'use strict';

$(function(){
    // 购物车部分
    var sum = 0;            //总金币
    var final= 0;           //总价格
    //获取总金币
    $.sumPrice = function () {
        var sumGoods = $('tr.model');
        sum = 0;
        sumGoods.each(function(){
            var price = $(this).data('price');
            var num = $(this).data('num');
            sum += Number(price) * Number(num);
        });
    }
    //获取最终价格
    $.finalP = function () {
        var sumGoods = $('tr.model');
        final = 0;
        sumGoods.each(function(){
            var price = $(this).data('money');
            var num = $(this).data('num');
            final += Number(price) * Number(num);
        });
        $('.total').html(final);
    }
    //加
    $.plus = function (button) {
        var tr = $(button).parent().parent().parent();
        var input = $(button).prev('input');
        var num = Number(tr.data('num'));
        tr.data('num', num + 1);
        input.val(num + 1);
        $.sumPrice();
        $.finalP();
    }
    //减
    $.subtract = function (button) {
        var tr = $(button).parent().parent().parent();
        var input = $(button).siblings('input');
        var num = Number(tr.data('num'));
        if (num > 1)
        {
            tr.data('num', num - 1);
            input.val(num - 1);
        }
        $.sumPrice();
        $.finalP();
    }
    // 删除
    $.del = function(span){
        var tr = $(span).parent().parent();
        $(tr).remove();
        $.sumPrice();
        $.finalP();
    }

    $.sumPrice();       //初始化
    $.finalP();

    // console.log(sum)
    // 调用
    $('.add').on('click',function(){
        $.plus(this);
        console.log(sum)
    });
    $('.reduce').on('click',function(){
        $.subtract(this);
        console.log(sum)
    });
    $('.del').on('click',function(){
        $.del(this);
        console.log(sum)
    })

    // 球员表单输入
    $('.buyp').keyup(function(){
        if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}
        $(this).on('afterpaste',function(){
            if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}
        });
        var con = parseInt($(this).parent().parent("ul").children("li:last").find("input").val());
        var buyp = parseInt($(this).val() * con);
        if(buyp >= sum){
            $(this).val(sum/con);
        }
    });

    var put = 0;       //待计算的总值

    $('.p-add').each(function(){
        $(this).on('click',function(){
            var count= $(this).siblings('input').val();
            count++;
            $(this).siblings('input').val(count);
            // 获取当前计数
            var a = $('.p-count').val();
            put = sum/a;
            var total =parseInt($(this).parent("em").parent("li").parent("ul").children("li:eq(2)").find("input").val());
            if(total * a > sum){
                $(this).parent("em").parent("li").parent("ul").children("li:eq(2)").find("input").val(put)
            }
        })
    });
    $('.p-reduce').each(function(){
        $(this).on('click',function(){
            var count= $(this).siblings('input').val();
                if(count <= 1){
                    count = 1;
                    $(this).siblings('input').val(count);
                }else{
                    count--;
                    $(this).siblings('input').val(count);
                    var b = $('.p-count').val();
                    put = sum/b;
                    var total =parseInt($(this).parent("em").parent("li").parent("ul").children("li:eq(2)").find("input").val());
                    if(total * b > sum){
                        $(this).parent("em").parent("li").parent("ul").children("li:eq(2)").find("input").val(put)
                    }
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
    str +=                     '<li class="clearfix">'
    str +=                          '<p><em class="red">*</em>Player Name：</p>'
    str +=                          '<div class="player-search">'
    str +=                              '<input type="text" class="searchInput" placeholder="Please enter the playerName">'
    str +=                              '<div class="player-modal">'
    str +=                                 '<ul>'
    str +=                                     '<li>'
    str +=                                          '<img src="../img/ceshi.png" alt="">'
    str +=                                          '<span> Eden Hazard</span>'
    str +=                                          '<span class="pull-right">94</span>'
    str +=                                     '</li>'
    str +=                                     '<li>'
    str +=                                           '<img src="../img/ceshi.png" alt="">'
    str +=                                           '<span> Eden Hazard2</span>'
    str +=                                           '<span class="pull-right">12</span>'
    str +=                                     '</li>'
    str +=                                 '</ul>'
    str +=                              '</div>'
    str +=                           '</div>'
    str +=                     '</li>'
    str +=                     '<li>'
    str +=                         '<p><em class="red">*</em>Start Price：</p>'
    str +=                         '<input type="text" class="stap" value="">'
    str +=                    '</li>'
    str +=                     '<li>'
    str +=                         '<p><em class="red">*</em>Buy Now Price：</p>'
    str +=                         '<input type="text" value="" class="buyp">'
    str +=                     '</li>'
    str +=                     '<li>'
    str +=                         '<p><em class="red">*</em>Time Remaining：</p>'
    str +=                         '<input type="text">'
    str +=                     '</li>'
    str +=                     '<li>'
    str +=                         '<p><em class="red">*</em>Quantity of listed players：</p>'
    str +=                         '<em>'
    str +=                             '<button class="p-reduce" type="button">-</button>'
    str +=                             '<input type="text" value="1">'
    str +=                             '<button class="p-add" type="button">+</button>'
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

    // 添加球员信息事件
    $('.btn-add').on('click',function(){
        // var sp = parseInt($('.stap').val());
        // if(sp > 0){
        //     $('#addPlayerModel').append(str);
        // }else{
        //     $('.stap')[0].focus();
        //     // $('.buyp').val(0)
        //     return false;
        // }
        $('#addPlayerModel').append(str);

        // 调用+-方法
        $('.p-add:last').on('click',function(){
                var count= $(this).siblings('input').val();
                count++;
                $(this).siblings('input').val(count);
        });
        $('.p-reduce:last').on('click',function(){
                var count= $(this).siblings('input').val();
                if(count <= 1){
                    count = 1;
                    $(this).siblings('input').val(count);
                }else{
                    count--;
                    $(this).siblings('input').val(count);
                }
        });
        // 关闭按钮
        $('.closeIcon').each(function(){
            $(this).on('click',function(){
                $(this).parent().parent().parent('.player-info').remove();
            })
        });
        $('.searchInput').each(function(){
            $(this).on('keyup',function(){
                var key = $(this).val();
                if(key == ""){
                    $(this).siblings('.player-modal').css('display','none');
                }else{
                    $(this).siblings('.player-modal').css('display','block');
                    // 发起ajax请求
                    $.ajax({
                        type: "POST",
                        url: "xxx.php",
                        data: key,
                        success: function(json){
                            var liList = '';
                            // 修改的地方
                            liList += '<li>xxxx</li>';


                            $('.player-modal ul').html(liList);
                        }
                    });
                }
            })
        });
        // 选值,input赋值
        $('.player-modal').each(function(){
            $(this).delegate('li','click',function(){
                var key1 = $(this).children('span:first').html();
                var key2 = $(this).children('span:last').html();
                var key = key1 + key2;
                $(this).parent().parent().siblings('input').val(key);
                $(this).parent().parent().css('display','none');
            })
        });
        // 多个球员
        var buyps = 0;
        $('.buyp').each(function() {
            var buyp = parseInt($(this).val());
            buyps += buyp;
        }).keyup(function() {
            if (this.value.length == 1) {
                this.value = this.value.replace(/[^1-9]/g, '')
            } else {
                this.value = this.value.replace(/\D/g, '')
            }
            $(this).on('afterpaste', function () {
                if (this.value.length == 1) {
                    this.value = this.value.replace(/[^1-9]/g, '')
                } else {
                    this.value = this.value.replace(/\D/g, '')
                }
            })
            //获取当前输入的值
            var temp = parseInt($(this).val());
            var cons = parseInt($(this).parent().parent("ul").children("li:last").find("input").val());
            buyps = 0;
            $('.buyp').each(function () {
                var con = parseInt($(this).parent().parent("ul").children("li:last").find("input").val());
                var buyp = parseInt($(this).val()*con);
                // alert(buyp);
                buyps += buyp;
            });
            //相互当前外的剩余
            var rest = buyps - temp*cons;
            // alert(temp);
            // alert(buyps);
            // alert(rest);
            var mostp = parseInt(sum - rest);
            // alert(mostp);
            if(buyps > sum){
                $(this).val(mostp/cons);
            }
        });

        $(".p-add").click(function () {
            var buym = 0;
            $('.buyp').each(function () {
                var con = parseInt($(this).parent().parent("ul").children("li:last").find("input").val());
                var th = parseInt($(this).val()*con);
                buym = buym + th;
            });
            var totals = $(this).parent("em").parent("li").parent("ul").children("li:eq(2)").find("input").val();
            var conp = parseInt($(this).prev().val());
            var tt = buym - totals*conp;
            var rr =  parseInt(sum - tt);
            var tem = rr/conp;
            if(totals > tem){
                $(this).parent("em").parent("li").parent("ul").children("li:eq(2)").find("input").val(tem);
            }
        });
        $(".p-reduce").click(function () {
            var buym = 0;
            $('.buyp').each(function () {
                var con = parseInt($(this).parent().parent("ul").children("li:last").find("input").val());
                var th = parseInt($(this).val()*con);
                buym = buym + th;
            });
            var totals = $(this).parent("em").parent("li").parent("ul").children("li:eq(2)").find("input").val();
            var conp = parseInt($(this).next().val());
            var tt = buym - totals*conp;
            var rr =  parseInt(sum - tt);
            var tem = rr/conp;
            if(totals > tem){
                $(this).parent("em").parent("li").parent("ul").children("li:eq(2)").find("input").val(tem);
            }
        });
    });

    // search搜索框功能
    // 数据库传值
    $('.searchInput').each(function(){
        $(this).on('keyup',function(){
            var key = $(this).val();
            if(key == ""){
                $(this).siblings('.player-modal').css('display','none');
            }else{
                $(this).siblings('.player-modal').css('display','block');
                //发起ajax请求
                $.ajax({
                    type: "POST",
                    url: "xxx.php",
                    data: key,
                    success: function(json){
                        var liList = '';
                        // 修改的地方
                        liList += '<li>xxxx</li>';


                        $('.player-modal ul').html(liList);
                    }
                });
            }
        })
    });
    // 选值,input赋值
    $('.player-modal').each(function(){
        $(this).delegate('li','click',function(){
            var key1 = $(this).children('span:first').html();
            var key2 = $(this).children('span:last').html();
            var key = key1 + key2;
            $(this).parent().parent().siblings('input').val(key);
            $(this).parent().parent().css('display','none');
        })
    });

    // 表单正则验证
    // 个人信息模块
    var flag=0;
    $('#email').blur(function(){
        if($(this).val()=="") {
            $(this).siblings('.reminder').html("Please enter your email address").css("color", "red");
        }else if($(this).val().match(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/)){
            $(this).siblings('.reminder').html("The email address is correct").css("color","green");
            flag++;
        }else{
            $(this).siblings('.reminder').html("Invalid mailbox address").css("color","red");
        }
    });
    //	登录
    $("#check").click(function(){
        if(flag==1){
            $("form").submit();
            alert("1")
        }else{
            $('#email').blur();
            alert();
            // return false;
        }

    });

});


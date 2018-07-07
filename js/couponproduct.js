$(function(){
    var couponid =+location.search.slice(-1);
    
    
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        data:{
            couponid:couponid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('tmp',info);
            $('.m_product ul').html(htmlStr);
            
        }
    });

    // 图片轮播还没完成
    function imgReload(){
 
        var imgHeight = 0;
        var wtmp = $("body").width();
        $("#b06 ul li").each(function(){
            $(this).css({
                width:wtmp + "px"
            });
        });
     
        $(".sliderimg").each(function(){
            $(this).css({width:wtmp + "px"});
            imgHeight = $(this).height();
        });
    }
     
    $(window).resize(function(){
        imgReload();
    });
     
    // $(document).ready(function(e) {
    //     imgReload();
    //     var unslider06 = $('#b06').unslider({
    //         dots:false,
    //         fluid: true
    //     }),
     
    //     data06 = unslider06.data('unslider');
     
    //     $('.unslider-arrow06').click(function() {
     
    //         var fn = this.className.split(' ')[1];
     
    //         data06[fn]();
     
    //     });
     
    // });
    
})
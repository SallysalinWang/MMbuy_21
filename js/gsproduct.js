$(function(){
    var shopid = 0;
    var areaid = 0;
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshop',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('shopTmp',info);
            $('.shop_list ul').html(htmlStr);

            // 列表卷帘效果
            $('.pro_title li:first-child').click(function(){
               
                $('.shop_list').slideToggle();
                $('.area_list').hide();
               
            })
            
        }
    });


    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshoparea',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('areaTmp',info);
            $('.area_list ul').html(htmlStr);
             // 列表卷帘效果
            $('.pro_title li:nth-child(2)').click(function(){
                $('.area_list').slideToggle();
                $('.shop_list').hide();
                
            })
        }
    });

    $('.shop_list ul').on('click','li',function(){
        shopid = $(this).data('id');
        render(shopid,areaid);
        $(this).find('i').addClass('icon-check').parent().siblings().find('i').removeClass('icon-check');
        var str = $(this).find('span').text();
        // console.log(str);
        $('.pro_title li:first-child span').text(str);
        $('.shop_list').hide();
        
       

       
        
        
        
    });
    
    
    $('.area_list ul').on('click','li',function(){
        areaid = $(this).data('id');
        
        render(shopid,areaid);
        $(this).find('i').addClass('icon-check').parent().siblings().find('i').removeClass('icon-check');
        var str = $(this).find('span').text();
        // console.log(str);
        var str1 =str.slice(0,2);
        $('.pro_title li:nth-child(2) span').text(str1);
        $('.area_list').hide();
         
        
        
    });
    
    
    render(shopid,areaid);
    function render(shopid, areaid){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
                shopid :shopid,
                areaid :areaid
            },
            dataType:'json',
            success:function(info){
                // console.log(info);
                var htmlStr = template('listTmp',info);
                $('.pro_list ul').html(htmlStr);

                
            }
        })
    }
   
})
$(function(){
    var obj = {};
    var str = location.search.slice(1);
    var arr = str.split('=');
    var pagesize = 6;
    var productid = 1;
   
    obj[arr[0]] = +arr[1];
    console.log(obj);
    

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrand',
        data:{
            brandtitleid:obj.brandid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('brandTmp',info);
            $('.brand_list ul').html(htmlStr);
            $('.brand_list li:first-child').find('.img_box').css('backgroundColor','red');
            $('.brand_list li:nth-child(2)').find('.img_box').css('backgroundColor','orange');
            $('.brand_list li:nth-child(3)').find('.img_box').css('backgroundColor','lightgreen');
            
            
            
        }
    });
    $.ajax({
       
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrandproductlist',
        data:{
            pagesize:pagesize,
            brandtitleid:obj.brandid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('proTmp',info);
            $('.brand_pro ul').html(htmlStr);
            
        }
            
       
    });
    render(productid);
    $('.brand_pro ul').on('click','li',function(){
        var productid = $(this).data('id');
        render(productid);
    })
    function render(productid){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getproductcom',
            data:{
                productid :productid
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                var htmlStr = template('comTmp',info);
                $('.detail ul').html(htmlStr);
                
            }
        });
    }
  
})
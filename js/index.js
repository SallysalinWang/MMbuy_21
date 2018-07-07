$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getindexmenu',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('navTmp',{obj:info.result});
            $('.m_nav').html(htmlStr);
            $('.more').nextAll().hide();
            
        }

    });
    $('.m_nav').on('click','.more',function(){
        $(this).nextAll().slideToggle();
    });

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:'json',
        success:function(info){
            console.log(info);
            var comCountArr = [];
            var comCountObj = {};
           
            info.result.forEach(function(v,i){
                comCountArr.push(v.productComCount.slice(1).split('人')[0]);

            });
            comCountArr.forEach(function(v,i){
                info.result[i].comCount = v;
            })
            console.log(info.result);
            var htmlStr = template('proTmp',{obj:info.result});
            $('.m_product ul').html(htmlStr);
        }
    });

   
})
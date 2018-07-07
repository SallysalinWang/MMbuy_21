$(function(){
   var currentid = 0;
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('navTmp',info);
            // 区域滚动效果没实现，文字也没有显示
            $('#wrapper ul').html(htmlStr);
            
            var ulWidth=0;
            $(' #wrapper li').each(function(i ,ele){
                ulWidth += $(ele).outerWidth(true);
            });
            console.log(ulWidth);
            $('#wrapper ul').css('width',ulWidth);

            
            new IScroll("#wrapper", {
                scrollX: true,
                scrollY: false
              })

          
            
        }
    });

    // 实现导航栏区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    render(currentid);
// 点击导航栏，变样式
   
$('.m_bcjnav ul').on('click','.nav_item',function(){
    $(this).addClass('current').siblings().removeClass('current');
    currentid = $(this).data('id');
    render(currentid);

});
    
    function render(currentid){
        
       
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            data:{
                titleid :currentid
            },
            dataType:'json',
            success:function(info){
                console.log(currentid)
                console.log(info);
                var htmlStr = template('listTmp',info);
                $('.m_bcjproduct ul').html(htmlStr);
                
            }

        })
}
   
   
   
})
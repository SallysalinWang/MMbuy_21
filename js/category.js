$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorytitle',
        dataType:'json',
        success:function(info){
            console.log(info.result);
            var htmlStr = template('listTmp',{obj:info.result});
            $('.list_title').html(htmlStr);
            $('.list_title .item').hide();
        }
    });
   
    $('.list_title').on('click','.m_title',function(){
        var id = $(this).data('id');
        var that = $(this);
        // console.log(id);
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getcategory',
            data:{
                titleid:id
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                // 动态渲染二级列表
                var htmlStr =template('categoryTmp',{obj:info.result});
               that.next().html(htmlStr);
               that.next().slideToggle();

            }
        })
    });
    $('.list_title').on('click','.list_item',function(){
        var categoryId = $(this).data('id');
       location.href = "productlist.html?categoryId=" +categoryId;
        
    });


   
})
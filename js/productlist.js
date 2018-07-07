$(function(){
    // 获取地址栏中的分类id
    var obj = {};
    var arr = location.search.slice(1).split("=");
    obj[arr[0]] =arr[1];
   var categoryid = +obj.categoryId;
   var totalPage ;
   var category;
   var currentPage = 1;
   
// 通过后台传递的数据，渲染导航的分类名
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        data:{
            categoryid:categoryid
        },
        dataType:'json',
        success:function(info){
            var obj = info.result[0]
            console.log(obj);
           
            var htmlStr = template('siftTmp',obj);
            $('.m_sift').html(htmlStr);
            category = obj.category;
            console.log(category);
        }
    });

    // 通过后台传递的数据，动态渲染商品列表
    function render(pageid){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getproductlist',
            data:{
                categoryid :categoryid,
                pageid :pageid
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                 totalPage = Math.ceil(info.totalCount / info.pagesize);
                 info.category = category;
                 var  list= {
                     category:category,
                     obj:info.result
                 }
                //  console.log(totalPage);
                //  console.log(currentPage);
                 console.log(list);
                var htmlStr = template('goodsTmp',list);
                $('.list_item').html(htmlStr);
                $('.page select option').text(currentPage+"/"+totalPage);
            }
        });
    }
    render(currentPage);
    // 点击下一页显示下一页的内容
    $('.next').click(function(){
        if(currentPage>=totalPage){
            return false;
        }
        currentPage++;
        render(currentPage);
    });
    // 点击上一页显示上一页的内容

    $('.prev').click(function(){
        if(currentPage<= 0){
            return false;
        };
        currentPage--;
        render(currentPage);
    })
   

})
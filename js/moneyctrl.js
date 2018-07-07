$(function(){
    var total;
    var currentPage=Number(tools.getParam('pageid')) || 1;
   function render(currentPage){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        data:{
            pageid :currentPage
        },
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
            var totalPage=[];
            total = Math.ceil(info.totalCount / info.pagesize);
            for(var i = 1; i<= total;i++){
                totalPage.push(i+"/"+total);
            }
            info.totalPage = totalPage;
            info.currentPage = currentPage;
            info.prev = currentPage -1;
            info.next = currentPage + 1;
            console.log(info)
            var htmlStr = template('proTmp',info);
            $('.m_product').html(htmlStr);
            // $('.page select option').text(currentPage+"/"+totalPage);

            // 多选框点击option可以跳转到对应的页面的功能
        }
    });
   }
   render(currentPage);
   console.log($('select'));
   $('.m_product').on('change','select',function(){
        location.href = "moneyctrl.html?pageid="+(Number($(this).val())+1);
   });
     // 点击下一页显示下一页的内容
   $('.m_product').on('click','.next',function(){
    if(currentPage>=totalPage){
                  return false;
        }
        currentPage++;
        render(currentPage);
   });
    // 点击上一页显示上一页的内容
   $('.m_product').on('click','.prev',function(){
    if(currentPage<= 0){
          return false;
        };
       currentPage--;
       render(currentPage);
   })



  
})
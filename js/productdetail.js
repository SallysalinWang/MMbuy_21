$(function(){
    // 解析地址栏数据，拼接成对象
    var obj = {}
    var url = decodeURI(location.search).slice(1).split("&");
    console.log(url);
    url.forEach(function(element,index){
       var arr = element.split("=");
       obj[arr[0]] = arr[1];
        
    });
    console.log(obj)
    
    // 1、通过地址栏传递过来的数据，进行分割拼接成对象，进行数据和模板渲染
   var htmlStr = template('siftTmp',obj);
   $('.m_sift').html(htmlStr);

   $.ajax({
       type:'get',
       url:'http://127.0.0.1:9090/api/getproduct',
       data:{
        productid: obj.productId
       },
       dataType:'json',
       success:function(info){
           console.log(info);
           var arr = info.result[0];
           var htmlStr = template('proTmp',arr);
           console.log(arr);
           $('.pro_detail').html(htmlStr);
       }
   });
   $.ajax({
       type:'get',
       url:'http://127.0.0.1:9090/api/getproductcom',
       data:{
        productid: obj.productId
       },
       dataType:'json',
       success:function(info){
           console.log(info);
           var htmlStr = template('evaluateTmp',{obj:info.result});
           $('.eva_info').html(htmlStr);
       }
   })
})
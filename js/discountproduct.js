$(function(){
    var arr = location.search.slice(1).split("=");
   
    var productid = +arr[1];
    // console.log(productid);
    
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getdiscountproduct',
        data:{
            productid:productid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var info1 = info.result[0];
           var htmlStr = template('discountTmp',info1);
           $('.pro_detail').html(htmlStr);
            
            
        }
    })
})
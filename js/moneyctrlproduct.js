$(function(){
    var arr = location.search.slice(1).split("=");
    var obj = {};
    obj[arr[0]] = arr[1];

    console.log(obj);
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data:{
            productid:obj.productid 
        },
        dataType:'json',
        success:function(info){
            var obj = info.result[0];
            console.log(obj);
            var htmlStr = template('Tmp',obj);
            $('.pro_detail').html(htmlStr);
        }
    })
})
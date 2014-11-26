/**
 * Created by lsc on 2014/11/25.
 */
$.ajax({
    url: '/getFirstData',
    dataType:'json',
    type:'get',
    success:function(data){
        console.log(data);
    },
    error:function(error){
        console.log(error);
    }
});
$.ajax({
    url: '/getSecondData',
    dataType:'json',
    type:'get',
    success:function(data){
        console.log(data);
    },
    error:function(error){
        console.log(error);
    }
});

function requestData(url){
    return Q.promise(function(resolve, reject, notify){
        $.ajax({
            url:url,
            dataType:'json',
            type:'get',
            success:function(data){
                resolve(data);
            },
            error:function(error){
                reject(new Error('error'));
            }
        });
    });
}
requestData('/getFirstData').then(function(data){
    console.log('success:%o',data);
    return requestData('/getSecondData');
}).done(function(data){
    console.log('second:%o',data);
});
$(function(){
    var page = 0;  //页码;
    $('body').dropload({
        scrollArea : window,
        loadDownFn : function(me){
            page++;
            $.ajax({
                type: 'POST',
                url: '/pages',
                data: {
                    pages : page
                },
                dataType: 'json',
                success: function(data){
                    if( data.code == 1 ){
                        var html = '';
                        var len = data.message.length;
                        for( var i = 0;i<len;i++ ){
                            html += '<li><a href="'+data.message[i]._id+'" flex="">'
                                    +'<div class="car-img" flex-box="1">'
                                        +'<img src="'+data.message[i].imgs[0]+'">'
                                    +'</div>'
                                    +'<div class="car-infolist" flex-box="9">'
                                        +'<div class="car-infolist" flex-box="9">'
                                            +'<div class="car-name">'+data.message[i].info+'</div>'
                                    +'<div class="car-km">'
                                    +'    <span>'+data.message[i].time+'年/'+data.message[i].mileage+'</span>'
                                    +'</div>'
                                    +'<div class="car-price">'
                                    +'    <strong>'+data.message[i].money+'</strong>'
                                    +'</div>'
                                    +'</div>'
                                    +'</div>'
                                +'</a></li>';
                        }
                        $('.car-ul').append(html);
                        
            
                    }else if( data.code == 2 ){
                        $('.dropload-refresh').html('无数据~~');
                    }

                    // 每次数据加载完，必须重置
                    me.resetload();
                },
                error: function(xhr, type){
                    console.log('Ajax error!');
                    // 每次数据加载完，必须重置
                    me.resetload();
                }
            });
        }
    });

});
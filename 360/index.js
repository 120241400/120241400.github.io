$(function(){var url1="https://api.web.360kan.com/v1/rank?cat=2&size=18";$.ajax({type:"get",dataType:'jsonp',url:url1,data:"",cache:true,async:true,jsonp:'callback',jsonpCallback:'_jpg7',timeout:8000,contentType:"application/json;utf-8",success:function(data){var timu1="";for(var i=0,l=data.data.length;i<l;i++){timu1+='<li><a class="movie-item" href="./play.html?q='+data.data[i].ent_id+'&id='+data.data[i].cat+'&zy=360&html=1.html" target="_blank"><div class="movie-cover"><img src="'+data.data[i].cover+'" ><span class="movie-description"><i class="description-bg"></i><p>评分：'+data.data[i].doubanscore+'</p><p>日期：'+data.data[i].pubdate+'</p><p>&gt; 在线观看</p></span></div><div class="movie-title"><p class="movie-name">'+data.data[i].title+'</p><p class="movie-tags">'+data.data[i].comment+'</p></div></a></li>'}
document.getElementById("lie1").innerHTML=timu1;}})})
$(function(){var url2="https://api.web.360kan.com/v1/rank?cat=3&size=18";$.ajax({type:"get",dataType:'jsonp',url:url2,data:"",cache:true,async:true,jsonp:'callback',jsonpCallback:'_jpg3',timeout:8000,contentType:"application/json;utf-8",success:function(data){var timu2="";for(var i=0,l=data.data.length;i<l;i++){timu2+='<li><a class="movie-item" href="./play.html?q='+data.data[i].ent_id+'&id='+data.data[i].cat+'&zy=360&html=1.html" target="_blank"><div class="movie-cover"><img src="'+data.data[i].cover+'" ><span class="movie-description"><i class="description-bg"></i><p>评分：'+data.data[i].doubanscore+'</p><p>日期：'+data.data[i].pubdate+'</p><p>&gt; 在线观看</p></span></div><div class="movie-title"><p class="movie-name">'+data.data[i].title+'</p><p class="movie-tags">'+data.data[i].comment+'</p></div></a></li>'}
document.getElementById("lie2").innerHTML=timu2;}})})
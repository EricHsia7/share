$('body').append("<style>.sharebtn{width:60px;height:60px;background:#fff url(https://erichsia7.github.io/share/share.png);background-position:center;background-size:35px;background-repeat:no-repeat;position:fixed;bottom:10px;right:10px;border-radius:30px;box-shadow:0 0 15px 1px rgba(0,0,0,.05);transition:.5s}.sharebox{width:60px;height:60px;background:#fff;position:fixed;bottom:10px;right:10px;border-radius:30px;box-shadow:0 0 15px 1px rgba(0,0,0,.05);overflow:hidden;transition:.5s}.sharebg{position:fixed;bottom:0;right:0;width:100%;height:0;background:rgba(0,0,0,.5);opacity:0;transition:.5s}@media only screen and (min-width:400px){.shopen{width:280px;height:350px;transition:.5s;border-radius:15px 15px 30px 15px}.btnopen{box-shadow:0 0 15px 1px transparent;background:#f5f5f5 url(https://erichsia7.github.io/share/x.png);background-position:center;background-size:25px;background-repeat:no-repeat;transition:.5s;border-radius:30px}.sharebgopen{width:100%;height:0;bottom:0;right:0;opacity:0;transition:.5s}}@media only screen and (max-width:400px){.shopen{width:100%;height:280px;transition:.5s;bottom:0;right:0;border-radius:20px 20px 0 0;box-shadow:0 0 15px 1px transparent}.btnopen{box-shadow:0 0 15px 1px transparent;background:#f5f5f5 url(https://erichsia7.github.io/share/x.png);background-position:center;background-size:25px;background-repeat:no-repeat;transition:.5s}.sharebgopen{width:100%;height:100%;bottom:0;right:0;opacity:1;transition:.5s}}.shareboxtitle{width:100%;height:40px;background:#fff;font-size:20px;display:flex;justify-content:center;align-items:center;border-bottom:1px #e3e3e3 solid}.shareboxbtnfr{width:100%;position:absolute;top:41px;left:0;height:calc(100% - 41px);background:#fff;overflow:scroll}.sharesf{width:60px;height:60px;background:#fafafa;border-radius:99em;margin:calc((100% - (60px * 4))/ 8);overflow:hidden;float:left;transform:scale(.8);transition:.3s;transition-delay:.5s;opacity:0}.sharesff{width:100%;height:100%;background:url(https://erichsia7.github.io/share/all3.png);border-radius:0;background-size:400%;background-position:0 0;transform:scale(.5);background-repeat:no-repeat}.sharesfspace{width:100%;height:60px;background:#fff;margin-top:calc((100% - (60px * 4))/ 8);margin-bottom:calc((100% - (60px * 4))/ 8);overflow:hidden}</style>");
$('body').append('<div class="sharebg"></div><div class="sharebox"><div class="shareboxtitle">分享</div><div class="shareboxbtnfr"><div class="sharesf" shareurl="https://erichsia7.github.io/Dg6LZUJK9oOPRsTE/tools/copy/?text="><div class="sharesff" style="background-position:-60px 0px"></div></div><div class="sharesf" shareurl="https://www.facebook.com/sharer/sharer.php?u="><div class="sharesff" style="background-position:-120px 0px"></div></div><div class="sharesf" shareurl="https://twitter.com/intent/tweet?text="><div class="sharesff" style="background-position:-180px 0px"></div></div><div class="sharesf" shareurl="https://social-plugins.line.me/lineit/share?url="><div class="sharesff" style="background-position:0px -120px"></div></div><div class="sharesf" shareurl="https://telegram.me/share/url?url="><div class="sharesff" style="background-position:-60px -60px"></div></div><div class="sharesf" shareurl="https://www.reddit.com/submit?url="><div class="sharesff" style="background-position:-180px -60px"></div></div><div class="sharesf" shareurl="https://www.facebook.com/dialog/send?app_id=951821888683232&display=popup&link="><div class="sharesff" style="background-position:-60px -120px"></div></div><div class="sharesf" shareurl="https://api.whatsapp.com/send?text="><div class="sharesff" style="background-position:-120px -120px"></div></div><div class="sharesf" shareurl="https://www.linkedin.com/sharing/share-offsite/?url="><div class="sharesff"></div></div><div class="sharesfspace"></div></div></div><div class="sharebtn"></div>');
var shclickfn = 2 ;
$('.sharebtn').click(function(){
if(shclickfn > 1) { 
$('.sharebox').attr('class','sharebox shopen');
$('.sharebtn').attr('class','sharebtn btnopen');

$('.sharebg').attr('class','sharebg sharebgopen');
$('.sharesf').css({'transform':'scale(1)','opacity':'1','transition-delay':'0.5s'});
shclickfn = 0.5 ;
}
else {
$('.sharebox').attr('class','sharebox');
$('.sharebtn').attr('class','sharebtn');
$('.sharebg').attr('class','sharebg');

$('.sharesf').css({'transform':'scale(0.8)','opacity':'0','transition-delay':'0s'});

shclickfn = 2 ;
}
});

$('.sharebg').click(function(){
$('.sharebtn').click();
});

$('.sharesf').click(function() {
location.href = $(this).attr('shareurl') + location.href ;
});

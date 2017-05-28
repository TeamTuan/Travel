$(function () {
  var height=$(".m_search")[0].offsetTop;
  var nav_fix=$(".nav_fix").height();
  $(document).scroll(function(){
    var stop = $("body").scrollTop();//滚动条距离顶部的距离
    if(stop>=height-nav_fix){
      $(".m_search").addClass("navbar-fixed-top");
      $(".m_search").addClass("new_search");
      console.log(nav_fix);
      $(".m_search").css("marginTop",nav_fix);
    }else if(stop<height-nav_fix){
      $(".m_search").removeClass("navbar-fixed-top");
      $(".m_search").removeClass("new_search");
      $(".m_search").css("marginTop",0);
    }
  });
});

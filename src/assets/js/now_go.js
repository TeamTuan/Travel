$(function () {

  var mask = document.getElementById('mask');
  var startPosition, endPosition, deltaX, deltaY, moveLength;
  var indexcount=$(".nav_list").width()-$(".nav2").width();


  /*手指按下瞬间触发touchstart事件*/
  var left=0;
  $(".nav_list").on('touchstart', function (e) {
    var touch = e.targetTouches[0];  //targetTouches位于当前DOM元素上的手指动作的列表
    startPosition = {   //取屏幕上第一个手指相对于页面的坐标
      x: touch.pageX,
      y: touch.pageY
    };
    left=$(".nav_list").css("left").replace("px","");
  });

  /*手指移动触发touchmove事件*/
  $(".nav_list").on('touchmove', function (e) {
    var touch = e.targetTouches[0];
    endPosition = {
      x: touch.pageX,
      y: touch.pageY
    };

    deltaX = endPosition.x - startPosition.x;   //移动到最后的坐标x - 开始时的坐标x
    moveLength = Math.abs(deltaX);   //获得移动的x方向的距离
    /*向左移动的函数*/
    var swipeLeft=function(){
      if( deltaX<(-30)){   //这里以30作为判断是否触发、如果deltaX小于-30，说明向左移动
        var now_left=$(".nav_list").css("left").replace("px","");
        if(now_left>=-indexcount) {
          $(".nav_list").css("left", left-moveLength);
        }
        console.log(left);
      }
    };
    swipeLeft();   //执行该函数

    /*向右移动的函数*/
    var swipeRight=function(){
      if( deltaX>30 ){
        var now_left2=$(".nav_list").css("left").replace("px","");
        if(now_left2<0){
          $(".nav_list").css("left",parseInt(left)+moveLength);
        }
        console.log(left);
      }
    };
    swipeRight();

  });


});

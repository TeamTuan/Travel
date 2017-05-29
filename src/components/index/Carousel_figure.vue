<template>
  <!--<div class="img_banner">-->
    <!--<div class="imgs row" id="a">-->
      <!--<div><img src="../../assets/img/1.jpg" alt=""></div>-->
      <!--<div><img src="../../assets/img/2.jpg" alt=""></div>-->
      <!--<div><img src="../../assets/img/3.png" alt=""></div>-->
      <!--<div><img src="../../assets/img/4.jpg" alt=""></div>-->
      <!--<div><img src="../../assets/img/5.jpg" alt=""></div>-->
    <!--</div>-->
    <!--<div class="icon">-->
      <!--<ul>-->

      <!--</ul>-->
    <!--</div>-->
  <!--</div>-->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
  import "../../assets/js/swiper-3.4.2.min";
  import "../../assets/js/Carousel_figure.js";
  export default {}
</script>



<style scoped>
  @import "../../assets/lib/bootstrap/css/bootstrap.css";
  @import "../../assets/css/common.css";
  @import "../../assets/css/swiper-3.4.2.min.css";
  *{
    padding: 0;
    margin: 0;
  }
  .row{
    margin: 0;
    padding: 0;
  }
  .img_banner{
    height: 5.2rem;
    width: 100%;
    background: gray;
  }
  .imgs{
    height: 5.2rem;
    width: 100%;
    position: relative;
  }
  .imgs div{
    height: 5.2rem;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .imgs img{
    height: 5.2rem;
    width: 100%;
  }
  .swiper-container {
    width:10rem;
    height: 300px;
    border: 1px solid black;
  }
</style>

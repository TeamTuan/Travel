<template>
  <div class="img_banner">
    <div class="imgs row" id="a">
      <div><img src="../../assets/img/1.jpg" alt=""></div>
      <div><img src="../../assets/img/2.jpg" alt=""></div>
      <div><img src="../../assets/img/3.png" alt=""></div>
      <div><img src="../../assets/img/4.jpg" alt=""></div>
      <div><img src="../../assets/img/5.jpg" alt=""></div>
    </div>
    <div class="icon">
      <ul>

      </ul>
    </div>
  </div>

</template>

<script>
  import "../../assets/js/zepto.min.js";
  import "../../assets/js/Carousel_figure.js";
  export default {}
</script>



<style>
  @import "../../assets/lib/bootstrap/css/bootstrap.css";
  @import "../../assets/css/common.css";
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

</style>

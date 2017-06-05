<template>
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-item"><img src="../../assets/img/1.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-item"><img src="../../assets/img/2.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-item"><img src="../../assets/img/3.png" alt=""></swiper-slide>
      <swiper-slide class="swiper-item"><img src="../../assets/img/4.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-item"><img src="../../assets/img/5.jpg" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          direction: 'horizontal',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          mousewheelControl: true
        }

      }
    }
  }
</script>



<style scoped>
  @import "../../assets/lib/bootstrap/css/bootstrap.css";
  @import "../../assets/css/common.css";
  *{
    padding: 0;
    margin: 0;
  }

  .swiper-box {
    width: 100%;
    height: 5.2rem;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }



</style>

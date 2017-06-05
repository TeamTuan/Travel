<template>
  <div>

    <div class="blog" v-for="blog in bloglist">
      <div class="blog_one">
        <img src="../../assets/img/1.jpg" alt="" class="big_img">
      </div>
      <div class="blog_second">
        <div style="text-align: center;">
          <img src="../../assets/img/morentouxiang.jpeg" alt="" class="small_img img-circle">
        </div>
        <div style="text-align: center;margin-top: 0.5rem;">我在午夜醒来</div>
        <div style="text-align: center;margin-top: 0.5rem;font-size: 30px;">{{ blog.title }}</div>
        <div style="padding: 0.4rem 0.8rem 0 0.8rem;">{{ blog.content }}</div>
      </div>
    </div>
  </div>

</template>

<script>
  import Axios from "axios";
  export default {
    data:function () {
      return {
        bloglist:[]
      }
    },
    created:function () {
      var _this=this;

      Axios.get("http://127.0.0.1/Travel_hou/blog/index")
        .then(function (res) {
          _this.bloglist=res.data;
      });


    }
  }
</script>



<style scoped>
  @import "../../assets/lib/bootstrap/css/bootstrap.css";
  @import "../../assets/css/common.css";
  .blog{
    height: 11rem;
    border-bottom: 1px solid dimgray;
    margin-bottom: 0.5rem;
    width: 100%;
  }
  .blog_one{
    height: 4rem;
    background: #000;
  }
  .blog_second{
    height: 7rem;
  }
  .big_img{
    height: 4rem;
    width: 100%;
  }
  .small_img{
    height: 1.5rem;
    width: 1.5rem;
    margin-top: -0.75rem;
  }
</style>

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
        <div style="text-align: center;margin-top: 0.5rem;font-size: 30px;margin-bottom: 0.5rem;">{{ blog.title }}</div>
        <p style="width: 9rem;margin-left: 0.5rem;">{{ blog.content }}</p>
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

      Axios.get("http://localhost:3000/get_blog")
        .then(function (res) {
          _this.bloglist=JSON.parse(res.data);
      });

    },
    methods:{

    }
  }
</script>



<style scoped>
  @import "../../assets/lib/bootstrap/css/bootstrap.css";
  @import "../../assets/css/common.css";
  .blog{

    border-bottom: 1px solid dimgray;
    margin-bottom: 0.5rem;
    width: 100%;
  }
  .blog_one{
    height: 4rem;
    background: #000;
  }
  .blog_second{

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

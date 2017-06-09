<template>
<div>
  <div  class="row header"  style="height:1.5rem;background:#439865;width:10rem;margin: 0;">
    <div class="col-xs-1"><router-link to="/travel_notes"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link></div>
    <div class="col-xs-10"><span>我的游记</span></div>

    <div class="col-xs-1"><span @click="save_blog" class="glyphicon glyphicon-ok"  style="font-size:30px;" aria-hidden="true"></span></div>
  </div>
  <div class="row my_row" style="margin: 0;">
    <div class="col-xs-6">
      <h2>标题</h2>
      <input type="text" value="" name="title" size="45" style="width:8rem; height:1rem; border-radius: 0.75rem; font-size:33px;" v-model="blog_title">
    </div>
  </div>

  <div class="row my_row1" style="margin: 0;">
    <div class="col-xs-6">
      <h2>我的游记</h2>
      <textarea type="text" value="" name="content" size="45" style="width:7rem; height:7rem; border-radius: 0.3rem; font-size:33px;" v-model="blog_content"></textarea>
    </div>
  </div>

  <div class="row my_row1" style="margin: 0;">
  <div class="col-xs-6">
  <h2>添加图片</h2>
  </div>
    </div>
  <div class="img_border">
    <div class="my_footer">
      <span class="glyphicon glyphicon-plus" aria-hidden="true">
        <input type="file" style="font-size: 1px" name="img">
        <img src="" alt="">
      </span>
     </div>
  </div>
</div>


</template>

<script>
  import Axios from "axios";
  export default {
    data:function () {
      return {
        timer:"",
        blog_title:"",
        blog_content:"",
        blog_img:"",
//        login_id:0
      }
    },
//    mounted:function(){
//      if(document.cookie){
//        var arr = document.cookie.split((";")[1]);
//        var new_arr = arr.split("=")[1];
//        this.login_id = Number(new_arr[1]);
//      }
//
//    },

    methods:{
      save_blog:function(){
        var blog_title = this.blog_title;
        var blog_content = this.blog_content;
        var blog_img = this.blog_img;

        var _this=this;
        Axios.get("http://localhost:3000/save_blog",{
          params:{
//            id:_this.login_id,
            blog_title:blog_title,
            blog_content:blog_content,
            blog_img:blog_img,



          }
        }).then(function(res){
          console.log(res.data);
        })


      }


    }
  }
</script>


<style src="">
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  @import "../assets/css/common.css";
  @import "../assets/css/add_notes.css";
</style>

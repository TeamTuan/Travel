<template>
<div>
  <div  class="row header"  style="height:1.5rem;background:#439865;width:10rem;margin: 0;">
    <div class="col-xs-1" style="text-align: center"><router-link to="/travel_notes"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link></div>
    <div class="col-xs-10"><span>添加游记</span></div>

    <div class="col-xs-1"></div>
  </div>
  <div class="row my_row" style="margin-top: 0.3rem;">
    <div class="col-xs-6">
      <span style="margin-left: 0.5rem;">标题</span>
      <input type="text" style="width:8rem; margin-left:0.5rem;height:1rem; border-radius: 10px; font-size:33px;border: 1px solid black;" v-model="blog_title">
    </div>
  </div>

  <div class="row my_row1" style="margin-top: 0.2rem;">
    <div class="row"><span style="margin-left: 0.4rem;">游记内容</span></div>
    <div class="row"><textarea style="width:9rem; margin-left:0.5rem;height:7rem; border-radius: 10px; font-size:30px;border: 1px solid black;" v-model="blog_content"></textarea></div>
  </div>
  <div class="row" style="height: 1.5rem;margin-top: 0.2rem;">
    <button @click="save_blog" style="height: 100%;width: 5rem;margin-left: 2.5rem;background:#439865;color: whitesmoke;border-radius: 10px;">添加</button>
  </div>
</div>


</template>

<script>
  import Axios from "axios";
  export default {
    data: function () {
      return {
        blog_title: "",
        blog_content: "",
        login_id:0
      }
    },
    methods:{
      save_blog:function() {
        var blog_title = this.blog_title;
        var blog_content = this.blog_content;
        var _this=this;
        //var blog_img = this.blog_img;
        if(document.cookie){
          var arr=document.cookie.split(";")[1];
          var new_arr=arr.split("=")[1];
          this.login_id=Number(new_arr[1]);
        }
        Axios.get("http://localhost:3000/save_blog", {
          params: {
            id:this.login_id,
            blog_title: blog_title,
            blog_content: blog_content
          }
        }).then(function (res) {
          if(res.data=="success"){
              _this.$router.push("/travel_notes");
          }
        })

      }
    }
  }
</script>


<style scoped>
  *{
    font-size: 30px;
    margin: 0;
    padding: 0;
  }
  .row{
    margin: 0;
    padding: 0;
  }
  .row div{
    margin: 0;
    padding: 0;
  }
</style>
<style src="">
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  @import "../assets/css/common.css";
  @import "../assets/css/add_notes.css";
</style>


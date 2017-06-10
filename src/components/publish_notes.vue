<template>
  <div>
    <div  class="row header"  style="height:1.5rem;background:#439865;width:10rem;margin: 0;">
      <div class="col-xs-1" style="text-align: center;"><router-link to="/travel_notes"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link></div>
      <div class="col-xs-10"><span>修改游记</span></div>

      <div class="col-xs-1"></div>
    </div>
    <div class="row my_row" style="margin-top: 0.3rem;">
      <div class="col-xs-6">
        <span style="margin-left: 0.5rem;">标题</span>
        <input type="text" style="width:8rem; height:1rem; border-radius: 10px; margin-left: 0.5rem; font-size:33px;border: 1px solid black;" v-model="blog_title">
      </div>
    </div>

    <div class="row my_row1" style="margin-top: 0.2rem;">
      <div class="col-xs-6">
        <span style="margin-left: 0.5rem;">游记内容</span>
        <textarea style="width:9rem; margin-left:0.5rem;height:7rem; border-radius: 10px; font-size:30px;border: 1px solid black;" v-model="blog_content"></textarea>
      </div>
    </div>

    <div class="row" style="height: 1.5rem;margin-top: 0.2rem;">
      <button @click="save_blog" style="height: 100%;width: 5rem;margin-left: 2.5rem;background:#439865;color: whitesmoke;border-radius: 10px;">保存</button>
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
        login_id:0,
        blog_id:0
      }
    },
    methods:{
      save_blog:function() {
        var id=this.blog_id;
        var blog_title = this.blog_title;
        var blog_content = this.blog_content;
        var _this=this;
        Axios.get("http://localhost:3000/update_blog", {
          params: {
            id:id,
            blog_title: blog_title,
            blog_content: blog_content
          }
        }).then(function (res) {
            console.log(res.data);
          if(res.data=="success"){
            _this.$router.push("/travel_notes");
          }
        });
      }
    },
    mounted:function () {
      var blog_id=this.$route.params.id;
      this.blog_id=blog_id;
      var _this = this;
      Axios.get("http://localhost:3000/publish_blog", {
        params: {
          id:blog_id
        }
      }).then(function (res) {
        _this.blog_title=JSON.parse(res.data).title;
        _this.blog_content=JSON.parse(res.data).content;
      })
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    font-size: 30px;
  }
  .row{
    margin: 0;
    padding: 0;
  }
  .row div{
    padding: 0;
    margin: 0;
  }
</style>

<style src="">
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  @import "../assets/css/common.css";
  @import "../assets/css/add_notes.css";
</style>

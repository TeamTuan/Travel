<template>
  <div>
    <div class="header" style="width:10rem;height:1.5rem;background:#439865;">
      <div class="col-xs-2">
        <router-link to="/change_user" style="color:white;"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link>
      </div>
      <div class="col-xs-8"></div>
      <div class="col-xs-2">
        <span class="glyphicon glyphicon-ok"  style="font-size:30px;" aria-hidden="true"></span>
      </div>
    </div>
    <div style="width: 100%;">
      <div class="row" style="height: 2rem;color: gray;font-size:50px;text-align: center;line-height: 2rem;width: 100%;">
        个人简介
      </div>
      <div class="row" style="height: 4rem;width: 100%;">
        <textarea name="" id="text" placeholder="一段话介绍你自己，140字以内">{{ intro }}</textarea>
      </div>
    </div>
  </div>
</template>
<script>
  import Axios from "axios";
  export default{
    data:function () {
      return {
        intro:"",
        login_id:0
      }
    },
    mounted:function () {
      if(document.cookie){
        var arr=document.cookie.split(";")[1];
        var new_arr=arr.split("=")[1];
        this.login_id=Number(new_arr[1]);
      }

      var _this=this;
      Axios.get("http://localhost:3000/user_by_id",{
        params:{
          id:this.login_id
        }
      }).then(function (res) {
        _this.intro=JSON.parse(res.data).construction;
      });

    }
  }
</script>
<style scoped>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  .row{
    margin: 0;
    padding: 0;
  }
  #text{
    width: 9rem;
    margin-left: 0.5rem;
    border: 1px solid gray;
    border-radius: 10px;
    font-size: 30px;
    height: 3.5rem;
    margin-top: 0.25rem;
    text-indent: 20px;
    outline: none;
  }

</style>

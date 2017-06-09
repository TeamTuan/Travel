<template>
<div>
  <div class="header" style="width:10rem;height:1.5rem;background:#439865;">
    <div class="col-xs-2">
      <router-link to="/change_user"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link>
    </div>
    <div class="col-xs-8"></div>
    <div class="col-xs-2">
      <span class="glyphicon glyphicon-ok"  style="font-size:30px;" aria-hidden="true" @click="save"></span>
    </div>
  </div>
  <div style="width: 100%;">
     <div class="row" style="height: 2rem;color: gray;font-size:50px;text-align: center;line-height: 2rem;width: 100%;">
       用户昵称
     </div>
    <div class="row" style="height: 1.5rem;width: 100%;">
      <input type="text" style="width: 9rem;margin-left: 0.5rem;height:1.3rem;margin-top:0.1rem;border:1px solid gray;border-radius: 10px;" class="user_name" v-model="name">
    </div>
    <div class="row" style="color: gray;height: 1.5rem;text-align: center;line-height: 1.5rem;width: 100%;">
      可免费修改用户昵称一次，以后每次修改将消耗1600穷币
    </div>
  </div>
</div>
</template>
<script>
  import Axios from "axios";
  export default{
    data:function () {
      return {
          name:"",
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
        _this.name=JSON.parse(res.data).name;
      });

    },
    methods:{
        save:function () {
          var value=this.name;
          var _this=this;
          Axios.get('http://localhost:3000/save_name',{
            params:{
              id:_this.login_id,
              value:value
            }
          }).then(function(res){
            console.log(JSON.parse(res.data));
          })
        }
    }
  }
</script>
<style scoped>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  .row{
    margin: 0;
    padding: 0;
  }
  .user_name{
    text-indent: 20px;
    outline: none;
    font-size: 30px;
  }
</style>

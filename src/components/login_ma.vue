<template>
<div class="container">
  <div class="row row1" style="height: 1.5rem;background:#439865;">
    <router-link to="/user">
      <div class="col-xs-1"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></div>
    </router-link>

    <div class="col-xs-3">账号密码</div>
    <div class="col-xs-5"></div>
    <router-link to="/register_ma"><div class="col-xs-3">注册</div></router-link>

  </div>
  <div class="row" style="height: 0.5rem;background:#439865;"></div>
  <div class="row" style="height: 3rem;background:#439865;text-align: center;line-height: 3rem;">登陆</div>
  <div class="row input" style="height: 1rem;background:#439865;">
    <input type="text" v-model="tel" placeholder="输入手机号">
  </div>
  <div class="row input" style="height: 1rem;background:#439865;">
    <input type="password" v-model="password" placeholder="输入密码">
  </div>
  <div class="row" style="height: 1rem;background:#439865;text-align: center;line-height: 1rem;">忘记密码？</div>
  <div class="row" style="height: 2rem;background:#439865;">
    <button style="height: 1.2rem;width: 4rem;color: #439865;margin-top: 0.4rem;margin-left: 3rem;background:white;border-radius: 10px;" @click="login">登陆</button>
  </div>
  <div class="row" style="height: 1rem;text-align: center;line-height: 1rem;background:#439865;">邮箱登陆</div>
  <div class="row" style="height: 3rem;background:#439865;"></div>
  <div class="row" style="height: 1rem;background:#439865;text-align: center;line-height: 1rem;">第三方账号登陆</div>
  <div class="row icon" style="height: 3rem;background:#439865;">
    <div class="col-xs-4"><img src="../assets/img/qq_icon.png" alt=""></div>
    <div class="col-xs-4"><img src="../assets/img/weibo_icon.png" alt=""></div>
    <div class="col-xs-4"><img src="../assets/img/weixin_icon.png" alt=""></div>
  </div>
</div>
</template>
<script>
  import Axios from "axios";
export default{
    data:function () {
      return {
          tel:"",
          password:""

      }
    },
    methods:{
        login:function(){
            var _this=this;
            Axios.get("http://localhost:3000/login",{
                params:{
                    tel:this.tel,
                    password:this.password
                }
            }).then(function (res) {
                var token=res.data.id;
                document.cookie="logined="+token;
                document.cookie="login_id="+res.data.body;
                var id=JSON.parse(res.data.body);
                _this.$router.push("/user");

            });
        }
    }
}
</script>
<style src="../assets/css/common.css" scoped></style>
<style scoped>
  *{
    font-size: 30px;
    color: white;
    margin: 0;
    padding: 0;
  }
  .row,.row div{
    margin: 0;
    padding: 0;
    border: 0;
  }
  .row{

  }
  .row1{
    padding: 0 0.5rem 0 0.5rem;
  }
  .row1 div{
    height: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
  }
  .input input{
    height: 0.8rem;
    margin-top: 0.1rem;
    width: 7rem;
    margin-left: 1.5rem;
    background: #439865;
    border: 0;
    outline: none;
  }
  ::-webkit-input-placeholder{
    color: ghostwhite;
    opacity: 0.5;
  }
  .icon img{
    width: 1rem;
    height: 1rem;
    margin-top: 0.75rem;
  }
  .icon div{
    height: 100%;
    text-align: center;
  }
</style>

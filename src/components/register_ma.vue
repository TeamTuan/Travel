<template>
  <div class="container" style="background:#439865;width: 10rem;height: 18rem;">
    <div class="header" style="width:10rem;height:1.5rem;background:#439865;">
      <div class="col-xs-2">
        <router-link to="/login_ma"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link>
      </div>
      <div class="col-xs-4" style="text-align: left;line-height:1.5rem;">手机号注册</div>
      <div class="col-xs-6">
      </div>
    </div>
    <div class="row" style="height: 5rem;background:#439865;margin-top: -2px;">
      <div class="banner">
        <div class="row">
          <div class="col-xs-2" style="text-align: center;color:red;line-height: 1.5rem;">{{ before_tel }}</div>
          <div class="col-xs-10">
            <input type="text" placeholder="填写您的手机号" style="background:#439865;height: 1rem;margin-top: 0.25rem;width: 100%;" v-model="tel" @blur="check_tel">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2"></div>
          <div class="col-xs-6">
            <input type="text" style="height: 1rem;margin-top: 0.25rem;width: 100%;" placeholder="输入验证码">
          </div>
          <div class="col-xs-4" style="text-align: center;line-height: 1.5rem;height: 100%;">发送验证码</div>
        </div>
      </div>
    </div>

    <div class="row" style="height: 5rem;background:#439865;margin-top: -2px;">
      <div class="banner banner2">
        <div class="row">
          <div class="col-xs-2" style="text-align: center;line-height: 1.5rem;"></div>
          <div class="col-xs-10">
            <input type="password" placeholder="请输入8-30位字符数字特殊符号密码" style="background:#439865;height: 1rem;margin-top: 0.25rem;width: 100%;" v-model="password">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2"></div>
          <div class="col-xs-10">
            <input type="password" style="height: 1rem;margin-top: 0.25rem;width: 100%;" placeholder="请确认密码" v-model="repass">
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="height: 1.5rem;background:#439865;">
      <button style="height: 100%;width: 4rem;background:white;border-radius: 10px;margin-left: 3rem;border: 2px solid white;color: #439865" @click="check">注册</button>
    </div>
  </div>
</template>
<script>
  import Axios from "axios";
  export default{
    data:function () {
       return {
            tel:"",
            password:"",
            repass:"",
            before_tel:""
       }
    },
    methods:{
        check:function () {
          var tel=this.tel;
          var password=this.password;
          var repass=this.repass;
          var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
          var regex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}');
          if(myreg.test(tel)&&(password==repass)&&(regex.test(password)))
          {
            this.insert_user();
            this.$router.push("/login_ma");
          }
        },
        insert_user:function () {
          var tel=this.tel;
          var password=this.password;
          Axios.get('http://localhost:3000/insert_user',{
            params:{
              tel:tel,
              password:password
            }
          }).then(function(res){
            console.log(res.data);
          })
        },
        check_tel:function () {
          var _this=this;
          Axios.get('http://localhost:3000/check_tel',{
            params:{
              value:_this.tel
            }
          }).then(function(res){
            if(res.data=="success"){
                _this.before_tel="X";
            }else if(res.data=="failed"){
                _this.before_tel="";
            }
          })
        }
    }
  }
</script>
<style scoped>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  *{
    font-size: 30px;
    color: white;
  }
  body{
    background: #439865;
  }
  .container{
    margin: 0;
    padding: 0;
  }
  .row{
    margin: 0;
    padding: 0;
  }
  .banner{
    height: 3rem;
    background: #439865;
    margin-top: 2rem;
  }
  .banner2{
    margin-top: 0;
  }
  .banner .row{
    height: 1.5rem;
  }
  .row input{
    border: 0;
    background: #439865;
  }
  ::-webkit-input-placeholder{
    color: white;
    opacity: 0.6;
  }
</style>

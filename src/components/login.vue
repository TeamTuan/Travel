<template>
  <div class="container">
       <div class="nav">
         <div class="row row1">
            <div class="col-xs-9">
              <div class="glyphicon glyphicon-arrow-left col-xs-3" aria-label="Left Align"></div>
               <div class="col-xs-6">账号密码</div>
            </div>
           <div>
             <div class="col-xs-3">注册</div>
           </div>
         </div>
       </div>
       <div class="login">
         <div class="row row2">
           <div class="col-xs-12">登录</div>
         </div>
       </div>
       <div class="row row3">
           <u><p>请输入邮箱/手机号</p></u>
       </div>
       <div class="row row4">
      <u><p>请输入密码</p></u>
    </div>
       <div class="row row5">
      <u><p>忘记密码?</p></u>
    </div>
       <div class="row row6">
         <input type="text" value="登录" class="col-xs-3">
       </div>
       <div class="row row7">
          <u><p>手机号登录</p></u>
       </div>
        <div class="row row8">
          <u><p>第三方账号登录</p></u>
        </div>
       <div class="logo">
          <div class="weixin col-xs-5">
             <img src="../assets/img/weixin.jpg">
          </div>
         <div class="weibo col-xs-2">
           <img src="../assets/img/weibo.jpg">
         </div>
         <div class="qq col-xs-5">
           <img src="../assets/img/qq.jpg">
         </div>
       </div>
  </div>
</template>
<script>
  import $ from 'jquery';
  export default {
    data:function () {
      return {
        timer:""
      }
    },
    methods:{

    },
    components:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  @import "../assets/css/common.css";
  @import "../assets/css/login.css";
  @import "../assets/lib/bootstrap/css";
</style>

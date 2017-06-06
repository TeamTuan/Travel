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
    <div class="row" style="height: 7rem;background:#439865;margin-top: -2px;">
      <div class="banner">
        <div class="row">
          <div class="col-xs-2" style="text-align: center;line-height: 1.5rem;">+86</div>
          <div class="col-xs-10">
            <input type="text" placeholder="填写您的手机号" style="background:#439865;height: 1rem;margin-top: 0.25rem;width: 100%;">
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
    <div class="row" style="height: 1.5rem;background:#439865;">
      <button style="height: 100%;width: 4rem;background:white;border-radius: 10px;margin-left: 3rem;border: 2px solid white;color: #439865">下一步</button>
    </div>
  </div>
</template>
<script>
  export default{

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

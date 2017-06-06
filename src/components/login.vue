<template>
  <div class="container" style=" height:17.8rem;width: 10rem;background:#40c895;">
    <div class="row" style="height:2rem;">
      <div class="col-xs-5" style="height: 100%;;width: 4rem;">
        <div class="row" style="height: 100% ;">
          <router-link to="/user" style="text-decoration:none;color:#f5f7f2;">
          <div class="glyphicon glyphicon-arrow-left col-xs-3" aria-hidden="true" style="color:white;height:100%;padding: 0;
              line-height:2rem;font-size:40px;text-align:center;">
          </div>
          </router-link>
          <div class="col-xs-9" style="color:white;font-size:40px;text-align:center;height: 100%;padding: 0;line-height: 2rem;" >
            账号密码
          </div>
        </div>
      </div>
      <router-link to="/register" style="text-decoration:none;color:#f5f7f2;" >
      <div class="col-xs-3 col-xs-offset-4" style="height: 100%;" >
        <div style="height:100%;font-size:30px;color:white;text-align:center;" >
          <button style="border:1px solid white;display:inline-block;background:#40c895;width: 2rem;height:1rem;text-align: center;line-height: 1rem;margin-top: 0.5rem;">注册</button>
        </div>
      </div>
      </router-link>
    </div>
    <div class="row" style="height: 2rem;color: white;font-size: 30px;" >
      <div style="text-align: center;line-height: 2rem;" >
        登录
      </div>
    </div>
    <div style="height: 7rem;" >
      <div style="border-bottom:2px solid white;height: 1.5rem;text-align:center;" >
        <input value="输入邮箱/用户名" style="background:#40c895;border:none;text-align:center;font-size:30px;color:white;line-height:1.5rem;opacity:0.8;" scoped/>
      </div>
      <div style="border-bottom:2px solid white;height: 1.5rem;text-align:center;" >
        <input value="输入密码" style="background:#40c895;border:none;text-align:center;font-size:30px;color:white;line-height:1.5rem;text-align:center;opacity:0.8;" scoped/>
      </div>
      <div style="height:1rem;font-size:30px;color:white;line-height:1rem;text-align:center;"  >忘记密码？</div>
      <div style="height:2rem;text-align:center;" >
        <button style="height:1rem;width: 1.5rem;color:#40c895;font-size:30px;">登录</button>
      </div>
      <router-link to="tel_login">
      <div id="tel_login" style="height:1rem;color:white;text-align:center;font-size:30px;" >手机号登录</div>
      </router-link>
    </div>
    <div>
      <div style="height:1rem;color:white;text-align:center;font-size:30px;margin-top:3rem;">第三方账号登录</div>
      <div class="logo" style="height:2rem;">
        <div class="weixin col-xs-4" style="text-align: center">
          <img src="../assets/img/weixin.jpg" style="height:1rem;width: 1rem;">
        </div>
        <div class="weibo col-xs-4" style="text-align: center">
          <img src="../assets/img/weibo.jpg"  style="height:1rem;width: 1rem;">
        </div>
        <div class="qq col-xs-4" style="text-align: center">
          <img src="../assets/img/qq.jpg"  style="height:1rem;width: 1rem;">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>


<style src="../assets/css/common.css" scoped>
</style>
<style src="../assets/lib/bootstrap/css/bootstrap.css" scoped>

</style>

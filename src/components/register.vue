<template>
  <div class="container" style=" height: 17.8rem;width:10rem;background:#40c895;">
    <div class="row row1__" style=" color:#f5f7f2; height: 1.5rem; line-height:1.5rem;font-size:40px;">
      <router-link to="/login" style="text-decoration:none;color:#f5f7f2;" >
      <span class="glyphicon glyphicon-arrow-left col-xs-2" aria-hidden="true" style="text-align:center; line-height:1.5rem;" ></span>
      </router-link>
        <div class="col-xs-10">手机号注册</div>
    </div>
    <div class="row row2__" style="height: 12rem;">
      <div class="row" style="height: 1.5rem;width: 10rem;">
        <span class="col-xs-2" style="float:left;color:white;text-align:center;line-height:1.5rem;font-size:40px;" >+86</span>
        <span class="glyphicon glyphicon-chevron-down col-xs-1" aria-hidden="true" style="float:left;font-size:40px;color:white;text-align:center;line-height:1.5rem;"></span>
        <div style="width:7rem;float:left;border-bottom:5px solid white;">
          <input  type="text" placeholder="请填写您的手机号" style="opacity:0.8; background:#40c895;width:7rem;color:white;font-size:30px;text-align:center;line-height:1.5rem;border:none;" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3"></div>
        <div class="col-xs-9">
          <div class="row">
            <div class="col-xs-6 " style="border-bottom:5px solid white;width:3.5rem;height: 1.5rem;z-index:1;" >
                <input  placeholder="输入验证码" style="background:#40c895;text-align:center;height:1rem;width:2rem;margin-top:10px;font-size:30px;color:white;line-height:1rem;opacity:0.8;border:none;" />
            </div>
            <div class="col-xs-6">
              <button style="font-size:30px;color:white;border:2px solid white;margin-top:10px;width:3.5rem;height: 1.3rem;text-align:center;line-height:1.3rem;background:#40c895;">发送验证码</button>
            </div>
          </div>
        </div>
        <div style="    border-bottom: 2px solid white; height: 1.5rem;text-align: center;margin-top: 1.5rem;
               line-height: 1.4rem;" >
          <input placeholder="输入密码" style="background:#40c895;border:none;text-align:center;font-size:30px;color:white;opacity:0.8;"/>
        </div>
        <div style="border-bottom:2px solid white;height: 1.5rem;text-align:center;" >
          <input placeholder="确认密码" style="background:#40c895;border:none;text-align:center;font-size:30px;color:white;line-height:1.5rem;opacity:0.8;"/>
        </div>
        <router-link to="/user">
          <div class="row" style="height:6rem; text-align:center;">
            <button style="height: 1rem;width:2rem;margin-top:2.5rem;color:#40c895;" >下一步</button>
          </div>
        </router-link>
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



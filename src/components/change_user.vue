<template>
  <div class="all">
    <div  class="row header"  style="height:1.5rem;background:#439865;width:10rem;">
      <div class="col-xs-1"><router-link to="/setting" style="color:white;"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link></div>
      <div class="col-xs-4"><span>编辑个人信息</span></div>
    </div>
    <div class="row bannerlist" style="padding: 0;margin: 0;">
      <div class="row list">
        <div class="col-xs-3">头像</div>
        <div class="col-xs-5"></div>
        <div class="col-xs-3"><img src="../assets/img/morentouxiang.jpeg" alt=""  class="img-circle" style="height:0.8rem;width:0.8rem;"></div>
        <div class="col-xs-1"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div>
      </div>

      <router-link to="/user_name" style="color: #2c3e50;">
        <div class="row list"><div class="col-xs-3">用户昵称</div>
          <div class="col-xs-5"></div>
          <div class="col-xs-3">小魔女1111</div>
          <div class="col-xs-1"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div>
        </div>
      </router-link>

      <div class="row list"><div class="col-xs-3">性别</div>
        <div class="col-xs-5"></div>
        <div class="col-xs-3"></div>
        <div class="col-xs-1"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div>
      </div>
      <div class="row list"><div class="col-xs-3">常居城市</div>
        <div class="col-xs-5"></div>
        <div class="col-xs-3"></div>
        <div class="col-xs-1"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div>
      </div>
      <div class="row list"><div class="col-xs-3">个人简介</div>
        <div class="col-xs-5"></div>
        <div class="col-xs-3"></div>
        <div class="col-xs-1"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{};
</script>
<style scoped>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  .row{
    margin:0;
  }
  .header div{
    height: 100%;
  }
  .header span{
    height: 100%;
    text-align: center;
    line-height:1.5rem;
    color:white;
  }
  .footer{
    height: 1.5rem;
    background: #FD7F4E;
    position: fixed;
    bottom:0;
    width: 10rem;
    text-align: center;
    line-height: 1.5rem;
    color: white;
  }
  .bannerlist .list{
    background: white;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #d8d8d8;
  }
  .bannerlist{
    height: 16.3rem;
    background: #d8d8d8;
    padding: 0;
    margin:0;
  }
  .bannerlist div{
    height: 1.2rem;

  }
  .list div{
    text-align: left;
    line-height: 1.2rem;
  }
  img{

  }
</style>

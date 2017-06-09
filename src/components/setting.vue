<template>
  <div>
    <div  class="row header"  style="height:1.5rem;background:#439865;width:10rem;">
      <div class="col-xs-1"><router-link to="/user"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link></div>
      <div class="col-xs-3"><span>设置</span></div>
    </div>
    <div class="row title">个人设置</div>
    <div class="bannerr">
      <router-link to="/tel_pass_manage"  style="color:#2c3e50;">
        <div class="row">
          <div class="col-xs-2">
            <span class="glyphicon glyphicon-wrench" aria-hidden="true"></span>
          </div>
          <div class="col-xs-7">
            <span>账号密码</span>
          </div>
          <div class="col-xs-2">
            <img src="../assets/img/morentouxiang.jpeg" alt=""  class="img-circle">
          </div>
          <div class="col-xs-1">
            <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true"></span>
          </div>
        </div>
      </router-link>
      <router-link to="/change_user" style="color:#2c3e50;">
        <div class="row">
          <div class="col-xs-2">
            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
          </div>
          <div class="col-xs-9">
            <span>个人信息</span>
          </div>
          <div class="col-xs-1">
            <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true"></span>
          </div>
        </div>
      </router-link>

      <div class="row">
        <div class="col-xs-2">
          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </div>
        <div class="col-xs-9">
          <span>常用信息</span>
        </div>
        <div class="col-xs-1">
          <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true"></span>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2">
          <span class="glyphicon glyphicon-bell" aria-hidden="true"></span>
        </div>
        <div class="col-xs-9">
          <span>推送设置</span>
        </div>
        <div class="col-xs-1">
          <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true"></span>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2">
          <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </div>
        <div class="col-xs-8">
          <span>清除缓存</span>
        </div>
        <div class="col-xs-2">38.81KB</div>
      </div>
    </div>
    <div class="row title">应用相关</div>
    <div class="bannerr">
      <div class="row">
        <div class="col-xs-2">
          <span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
        </div>
        <div class="col-xs-7">
          <span>检测最新版本</span>
        </div>
        <div class="col-xs-2">

        </div>
        <div class="col-xs-1">

        </div>
      </div>
      <div class="row">
        <div class="col-xs-2">
          <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>
        </div>
        <div class="col-xs-9">
          <span>意见反馈</span>
        </div>
        <div class="col-xs-1">

        </div>
      </div>
      <div class="row">
        <div class="col-xs-2">
          <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
        </div>
        <div class="col-xs-9">
          <span>评价穷游</span>
        </div>
        <div class="col-xs-1">

        </div>
      </div>
      <div class="row">
        <div class="col-xs-2">
          <span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span>
        </div>
        <div class="col-xs-9">
          <span>分享穷游</span>
        </div>
        <div class="col-xs-1">

        </div>
      </div>
      <div class="row">
        <div class="col-xs-2">
          <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
        </div>
        <div class="col-xs-8">
          <span>关于穷游</span>
        </div>
        <div class="col-xs-2"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{

  };
</script>
<style scoped>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  .row{
    margin:0;
    padding-left:0.5rem;
    padding-right:0.5rem;
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
  .bannerr{
    height:6.5rem;
    width:100%;
    background:white;
  }
  .title{
    height:1rem;
    line-height:1rem;
  }
  .bannerr .row{
    height:1.3rem;
    border-bottom: 1px solid #d8d8d8;
  }
 .bannerr .row div{
   height: 100%;
   line-height: 1.3rem;
   padding:0;
 }
  .bannerr .row div img{
    height: 0.8rem;
    width: 0.8rem;
  }

</style>

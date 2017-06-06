<template>
 <div class="all">
   <div  class="row header"  style="height:1.5rem;background:#439865;width:10rem;">
     <div class="col-xs-1"><router-link to="/setting" style="color:white;"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link></div>
     <div class="col-xs-3"><span>账号管理</span></div>
   </div>
   <div class="row bannerlist" style="padding: 0;margin: 0;">
     <div class="row list">
       <div class="col-xs-3">绑定手机</div>
       <div class="col-xs-5"></div>
       <div class="col-xs-3">未绑定</div>
       <div class="col-xs-1"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div>
     </div>
     <div class="row list"><div class="col-xs-3">绑定邮箱</div>
       <div class="col-xs-5"></div>
       <div class="col-xs-3">未绑定</div>
       <div class="col-xs-1"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div></div>
     <div class="row list" style="margin-top: 0.2rem;"><div class="col-xs-3">微信账号</div>
       <div class="col-xs-5"></div>
       <div class="col-xs-3">未绑定</div>
       <div class="col-xs-1"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div></div>
     <div class="row list"><div class="col-xs-3">QQ账号</div>
       <div class="col-xs-5"></div>
       <div class="col-xs-3">未绑定</div>
       <div class="col-xs-1"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div></div>
     <div class="row list"><div class="col-xs-3">微博账号</div>
       <div class="col-xs-5"></div>
       <div class="col-xs-3">未绑定</div>
       <div class="col-xs-1"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div></div>
     <div class="row list" style="margin-top: 0.2rem;"><div class="col-xs-3">修改密码</div>
       <div class="col-xs-5"></div>
       <div class="col-xs-3"></div>
       <div class="col-xs-1"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div></div>
   </div>
     <div class="row footer" @click="exit">
     退出当前帐号
     </div>

 </div>
</template>
<script>
  export default{
      methods:{
          exit:function () {
            this.$router.push("/user_login/null/false");
          }
      }
  };
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
    height: 15.2rem;
    background: #d8d8d8;
    padding: 0;
    margin:0;
  }
  .bannerlist div{
    height: 1.2rem;

  }
  .list div{
    text-align: center;
    line-height: 1.2rem;
  }
</style>

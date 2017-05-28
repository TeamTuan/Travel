
<template>
  <div>
    <div class="container-fluid headerr">
      <div class="row nav">

        <div class="col-xs-10">
          <ul class="menu row" style="padding: 0;">
            <div class="col-xs-3">首页</div>
            <div class="col-xs-3">目的地</div>
            <div class="col-xs-3">商城</div>
            <div class="col-xs-3">社区</div>
          </ul>
        </div>

        <div class="col-xs-2 user_icon col-xs-offset-2">
          <router-link to="/user" style="color: white;"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></router-link>
        </div>

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
  @import "../../assets/lib/bootstrap/css/bootstrap.css";
  @import "../../assets/css/common.css";
  .headerr{
    margin: 0;
    padding: 0;
    height: 1.6rem;
    width: 100%;
  }
  .nav{
    height: 1.6rem;
    background: #11bf79;
  }
  .nav div{
    height: 100%;
  }
  .menu{
    height: 1.6rem;
    width: 100%;
    margin: 0;
  }
  .menu div{
    height: 1.6rem;
    float: left;
    line-height: 1.6rem;
    text-align: center;
    color: white;
    padding: 0;
  }
  .menu a{
    color:white;
    font-size: 30px;
  }
  .user_icon{
    font-size: 40px;
    text-align: center;
    line-height: 1.6rem;
    color:white;
    margin: 0;
  }


</style>

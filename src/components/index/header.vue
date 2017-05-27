
<template>
  <div>
    <div class="container-fluid headerr">
      <div class="row nav">

        <div class="col-xs-8">
          <ul class="menu">
            <li><a href="">首页</a></li>
            <li><a href="">目的地</a></li>
            <li><a href="">商城</a></li>
            <li><a href="">社区</a></li>
          </ul>
        </div>

        <div class="col-xs-2 user col-xs-offset-2"><img src="../../assets/img/user.png" alt=""></div>

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
    height: 1.73rem;
    width: 100%;
  }
  .nav{
    background: #11bf79;
  }
  .menu{
    height: 1.73rem;
    width: 100%;
    margin: 0;
  }
  .menu li{
    height: 1.73rem;
    float: left;
    line-height: 1.73rem;
    text-align: center;
    margin-left: 0.53rem;
  }
  .menu a{
    color:white;
    font-size: 30px;
  }
  .user{
    height: 1.73rem;
  }
  .user img{
    height: 1.06rem;
    width: 80%;
    margin-top: 0.33rem;
  }


</style>

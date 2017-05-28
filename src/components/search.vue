<template>


  <div class="travel-notes">

    <div class="header">
      <div><a class="arrows" href=""><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a></div>
      <div class="search"><div class="col-xs-8"><input type="text" name="search" size="45" style="width:600px; height:70px; border-radius: 10px; font-size:33px;" id="search" placeholder="搜索国家或景点"></div></div>
    </div>

    <div class="nav" >

      <div class="col-xs-8">
        <img src="../assets/img/xianggang.jpg">
        <h2>香港</h2>
        <h2>xianggang</h2>
        <h2>已有20000人去过</h2>
      </div>
      <div class="col-xs-2 user col-xs-offset-2"><a href=""><span class="glyphicon glyphicon-plus"
                                                                  aria-hidden="true"></span></a></div>





      <div class="col-xs-8">
        <img src="../assets/img/harbin.jpg">
        <h2>哈尔滨</h2>
        <h2>harbin</h2>
        <h2>已有20000人去过</h2>
      </div>
      <div class="col-xs-2 user col-xs-offset-2"><a href=""><span class="glyphicon glyphicon-plus"
                                                                  aria-hidden="true"></span></a></div>
    </div>


  </div>








  <!--<banner></banner>-->
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
      banner
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  @import "../assets/css/common.css";
  @import "../assets/css/search.css";
</style>

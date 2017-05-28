<template>


  <div class="review">

    <div class="a_header">
      <div><a class="arrows" href=""><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a></div>
      <div class="col-xs-8"><h2>香港的去过</h2></div>
    </div>
    <div class="nav" >
      <div class="row">
        <div class="col-xs-8">
          <img src="../assets/img/xianggang.jpg">
          <h2>香港海洋公园</h2>
          <h2>xianggang</h2>
          <h2>已有20000人去过</h2>
        </div>
        <div class="col-xs-2 user col-xs-offset-2"><a href=""><span class="glyphicon glyphicon-edit"
                                                                    aria-hidden="true"></span></a></div>

      </div>



<div class="row">
  <div class="col-xs-8">
    <img src="../assets/img/harbin.jpg">
    <h2>香港湿地公园</h2>
    <h2>xianggang</h2>
    <h2>已有20000人去过</h2>
  </div>
  <div class="col-xs-2 user col-xs-offset-2"><a href=""><span class="glyphicon glyphicon-edit"
                                                              aria-hidden="true"></span></a></div>
</div>


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
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  @import "../assets/css/common.css";
  @import "../assets/css/review.css";
</style>

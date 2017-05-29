<template>
<div>
  <div  class="row header"  style="height:1.5rem;background:#439865;width:10rem;">
    <div class="col-xs-1"><router-link to="/travel_notes"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link></div>
    <div class="col-xs-10"><span>我的游记</span></div>
    <div class="col-xs-1"><span class="glyphicon glyphicon-ok"  style="font-size:30px;" aria-hidden="true"></span></div>
  </div>
  <div class="row my_row">
    <div class="col-xs-6">
      <h2>标题</h2>
      <input type="text" value="" name="" size="45" style="width:8rem; height:1rem; border-radius: 0.75rem; font-size:33px;" >
    </div>
  </div>

  <div class="row my_row1">
    <div class="col-xs-6">
      <h2>我的游记</h2>
      <textarea type="text" value="" name="" size="45" style="width:7rem; height:7rem; border-radius: 0.3rem; font-size:33px;" ></textarea>
    </div>
  </div>

  <div class="row my_row1">
  <div class="col-xs-6">
  <h2>添加图片</h2>
  </div>
    </div>
  <div class="img_border">
    <div class="my_footer"> <span class="glyphicon glyphicon-plus"
                                               aria-hidden="true"></span></div>
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

    }
  }
</script>


<style>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  @import "../assets/css/common.css";
  @import "../assets/css/add_notes.css";
</style>

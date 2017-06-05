<template>
<div>
  <div class="header" style="width:10rem;height:1.5rem;background:#439865;">
    <div class="col-xs-2">
      <span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span>
    </div>
    <div class="col-xs-8"></div>
    <div class="col-xs-2">
      <span class="glyphicon glyphicon-ok"  style="font-size:30px;" aria-hidden="true"></span>
    </div>
  </div>
  <div style="width: 100%;">
     <div class="row" style="height: 2rem;color: gray;font-size:50px;text-align: center;line-height: 2rem;width: 100%;">
       用户昵称
     </div>
    <div class="row" style="height: 1.5rem;width: 100%;">
      <input type="text" style="width: 9rem;margin-left: 0.5rem;height:1.3rem;margin-top:0.1rem;border:1px solid gray;border-radius: 10px;" class="user_name">
    </div>
    <div class="row" style="color: gray;height: 1.5rem;text-align: center;line-height: 1.5rem;width: 100%;">
      可免费修改用户昵称一次，以后每次修改将消耗1600穷币
    </div>
  </div>
</div>
</template>
<script>
  export default{

  }
</script>
<style scoped>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  .row{
    margin: 0;
    padding: 0;
  }
  .user_name{
    text-indent: 20px;
    outline: none;
    font-size: 30px;
  }
</style>

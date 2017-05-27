<template>
  <div class="container">
        <div class="row row1">
           <span class="glyphicon glyphicon-arrow-left col-xs-3" aria-label="Left Align"></span>
           <div class="col-xs-9">手机号注册</div>
        </div>
        <div class="row row2">
          <div class="telp col-xs-4">
            <div class="value col-xs-1">+86</div>
            <span class="glyphicon glyphicon-chevron-down col-xs-3" aria-hidden="true"></span>
          </div>
          <u class="tel col-xs-8">填写您的手机号</u>
        </div>
        <div class="row row3">
      <u class="input value col-xs-8">输入验证码</u>
      <div class="push value col-xs-4">发送验证码</div>
    </div>
        <div class="row row4">
          <button class="col-xs-4">下一步</button>
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
<style>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  @import "../assets/css/register.css";
  @import "../assets/css/common.css";

</style>

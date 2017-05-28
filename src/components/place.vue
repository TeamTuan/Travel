<template>
  <div class="place">
    <div class="h-search">
      <form class="search">
        <spanc class="glyphicon glyphicon-search"></spanc>
        <input type="text" placeholder="搜索目的地、锦囊、游记、特价、穷游er"/>
        <span>取消</span>
      </form>
    </div>
    <div class="s-classify">
      <div class="s-c">
        单独搜素指定分类
      </div>
      <ul class="s-c-list">
        <li>目的地</li>
        <li>问答</li>
        <li>酒店</li>
        <li>用户</li>
      </ul>
    </div>
    <div class="histroy">
      <div class="his-header">
        <span>历史记录</span>
        <span class="his-clean">清空历史</span>
        <br><hr />
      </div>
      <div class="his-place">
        <span>东京</span>
      </div>
      <div class="his-color" ></div>
    </div>
    <div class="hot-search">
      <div class="h-s-header">热门搜索</div>
      <br><hr />
      <div class="h-s-place">
        <span><img src="../assets/img/place/hot-place-icon.png">巴黎的特惠酒店</span>
        <span><img src="../assets/img/place/hot-place-icon.png">大阪的特惠酒店</span>
        <span><img src="../assets/img/place/hot-place-icon.png">自驾租车</span>
        <span>阿根廷</span>
        <span>北海道></span>
        <span>日本</span>
        <span>冰岛</span>
        <span>冲绳</span>
        <span>新西兰</span>
        <span>台湾</span>
        <span>东京</span>
        <span>英国</span>
        <span>名古屋</span>
        <span>摩洛哥</span>
        <span>意大利</span>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data:function () {
      return {
        timer:""
      }
    },
    methods:{

    },


    components:{}
  }
</script>
<style src="../assets/css/place.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap-theme.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap-theme.min.css" scoped></style>

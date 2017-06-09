<template>
  <div class="place">
    <div class="h-search">
      <form class="search">
        <span class="glyphicon glyphicon-search"></span>
        <input class="place-in" v-model="mudidi" type="text" placeholder="搜索目的地、锦囊、游记、特价、穷游er"/>
        <span class="submit" @click="sousuo" >搜索</span>
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
    <div class="hot-search">
      <div class="h-s-header">热门搜索</div>
      <br><hr />
      <div class="h-s-place">
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 4rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span><img src="../assets/img/place/hot-place-icon.png">巴黎的特惠酒店</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 4rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span><img src="../assets/img/place/hot-place-icon.png">大阪的特惠酒店</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 4rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span><img src="../assets/img/place/hot-place-icon.png">自驾租车</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>阿根廷</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>北海道</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>日本</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>冰岛</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>冲绳</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>新西兰</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>台湾</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>东京</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>英国</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>名古屋</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>摩洛哥</span>
        </router-link>
        <router-link to="" style="height: 1rem;display: inline-block;border-radius: 45%;margin-left: 3%;width: 2.5rem;text-align: center;line-height: 1rem;margin-top: 2%;text-decoration: none">
          <span>意大利</span>
        </router-link>
      </div>
    </div>
  </div>

</template>
<script src="../assets/js/jquery-3.2.1.min.js"></script>
<script src="../assets/js/jquery.mobile-1.4.5.js"></script>
<script src="../assets/js/place.js"></script>
<script>
  import Axios from "axios";
  export default{
    data:function(){
      return {
        mudidi:''
      }
    },
    methods:{
      sousuo:function () {
        var value=this.mudidi;
        this.$router.push("/child_place/"+value);
      }
    }
  }
</script>
<style src="../assets/css/place.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap-theme.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap-theme.min.css" scoped></style>

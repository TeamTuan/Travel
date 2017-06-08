<template>
  <div>
    <div class="main_img">
      <div class="row row1">
        <div class="col-xs-3" style="height: 1rem;line-height: 1rem;text-align: center;"><router-link to="/" style="color: white;"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link></div>
        <div class="col-xs-6" style="height:1rem;"></div>
        <div class="col-xs-3" style="height: 100%;">
          <div class="row row2" style="">
            <div class="col-xs-6" style="line-height: 1rem;text-align: center;"><span class=" glyphicon glyphicon-bell" aria-hidden="true" style="font-size:35px;"></span></div>
            <div class="col-xs-6" style="line-height: 1rem;text-align: center;"><router-link to="/setting" style="color: white;height: 0.5rem;width: 0.5rem;display: inline-block;margin-left: -0.5rem"><span class="glyphicon glyphicon-cog" aria-hidden="true" style="font-size:35px;"></span></router-link></div>


          </div>
        </div>
      </div>
      <div v-show="this.flag">
        <div class="row row3"  style="height:2rem;">
          <div class="col-xs-4"  style="height:100%">
            <img src="../assets/img/morentouxiang.jpeg" alt=""  class="img-circle user">
          </div>
          <div class="col-xs-6"  style="height:100%;line-height: 2rem;">
            <span>{{ user_info.name }}</span>&gt;
          </div>
          <div class="col-xs-2" style="height:100%">
            <span class="glyphicon glyphicon-calendar" style="position: relative;top:50%;margin-top:-1rem;font-size: 70px" aria-hidden="true"></span>
          </div>
        </div>
        <div class="row" style="line-height:2rem;height: 2rem;">
          <div class="col-xs-2 col-xs-offset-1">
            <span>0</span>粉丝
          </div>
          <div class="col-xs-2">
            <span>0</span>关注
          </div>
        </div>
      </div>
      <div class="unlogined" v-show="!this.flag">
        <div class="row" style="height: 3rem;line-height:3rem;text-align:center;">
          <router-link to="/login_ma"><img src="../assets/img/morentouxiang.jpeg" class="img-circle" style="height:100%;" alt=""></router-link>
        </div>
        <div class="row" style="height: 1rem; line-height:1rem;text-align:center;">
          登录体验更多
        </div>
      </div>
    </div>
    <div  class="mine row">
      <div class="col-xs-4">
        <div class="div1">
          <span class="glyphicon glyphicon-list-alt" aria-hidden="true"  style="font-size:40px;"></span>
          <div>我的收藏</div>
        </div>
      </div>
      <div class="col-xs-4">
        <div class="div1">
          <span class="glyphicon glyphicon-inbox" aria-hidden="true" style="font-size:40px;"></span>
          <div>我的锦囊</div>
        </div>
      </div>
      <div class="col-xs-4">
        <div class="div1">
          <span class="glyphicon glyphicon-map-marker" aria-hidden="true" style="font-size:40px;"></span>
          <div>我的行程</div>
        </div>

      </div>
    </div>
    <div class="banner">
      <div class="banner1">
        <div class="row list">
          <span class="glyphicon glyphicon-file icons"  aria-hidden="true"></span>
          <span>我的折扣订单</span>
        </div>
        <div class="row list">
          <span class="glyphicon glyphicon-tag" aria-hidden="true"></span>
          <span @click="click">我的折扣优惠券</span>
          <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true"></span>
        </div>
      </div>
      <div class="banner2">
        <router-link to="/travel_notes" style="color: #2c3e50;"><div class="row list">
          <span class="glyphicon glyphicon-flag" aria-hidden="true"></span>
          <span>我的游记</span>
          <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true"></span>
        </div>
        </router-link>


        <div class="row list">
          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          <span>等我评价的目的地</span>
          <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true"></span>
        </div>
        <div class="row list">
          <span class="glyphicon glyphicon-send" aria-hidden="true"></span>
          <span>我发布的帖子</span>
          <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true"></span>
        </div>
        <div class="row list">
          <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
          <span>我的问答</span>
          <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true"></span>
        </div>
        <div class="row list">
          <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
          <span>我的结伴</span>
          <span class="glyphicon glyphicon-chevron-right right" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default{
    data:function () {
      return {
          user_info:{},
          flag:false
      }
    },
    methods:{
      click:function () {
        Axios.get("http://localhost:3000/check_login").then(function (res) {
          console.log((res.data));
        });
      }
    },
    mounted:function () {
      console.log(document.cookie);
      if(document.cookie){
        this.flag=true;
      }else{
        this.flag=false;
      }
      var id=this.$route.params.id;
      var _this=this;
      Axios.get("http://localhost:3000/user_by_id",{
        params:{
          id:id
        }
      }).then(function (res) {
        _this.user_info=JSON.parse(res.data);
      });

    }

};
</script>
<style scoped>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  body{
    margin: 0;
    padding: 0;
  }
  .row{
    margin: 0;
  }
.main_img{
  background: #439865;
  height:6rem;
  width:10rem;
  overflow: hidden;
  color:white;
}
  .row1{
    height:1rem;
    margin-top: 0.3rem;
  }
  .row1 div{
    margin: 0;
    padding: 0;
  }
  .row2{
    height: 100%;
    width: 100%;
  }
  .row2 div{
    height: 100%;
    text-align: center;
    line-height: 1rem;
  }
  .user{
    height: 2rem;
    width:2rem;
    margin-left:40px;
  }
  .mine{
    height:2rem;
    background:white;
    color: green;
  }
  .div1{
    margin-top: 0.6rem;
    text-align: center;
  }
  .banner{
    height:12rem;
    background: #D8D8D8;
    overflow:hidden;
  }
  .banner1{
    margin-top:0.5rem;
    height:3rem;
    width: 9rem;
    margin-left: 0.5rem;
  }
  .banner2{
    margin-top:0.5rem;
    height:7.5rem;
    margin-bottom:0.5rem;
    width: 9rem;
    margin-left: 0.5rem;
  }
  .banner div{

    background:#fff;
  }
  .list{
    height:1.5rem;
    line-height:1.5rem;
    position: relative;
    border-bottom: 1px solid gray;
    padding-left:0.5rem;
  }
  .right{
    position: absolute;
    right:0;
    margin-top: 0.5rem;
  }
  .icons{
    font-size:30px;
  }
  .unlogined{
    height:4rem;
  }
</style>

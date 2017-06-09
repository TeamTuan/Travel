<template>
  <div class="reply-place">
    <div class="row r-p-header">
      <span class="col-xs-4">
        <img src="../assets/img/logo.png" alt=""/>
      </span>
      <span class="col-xs-3 r-place">
        {{scene_info.name}}
      </span>
      <span class="col-xs-2">
        <span class="glyphicon glyphicon-search"></span>
        <span class="glyphicon glyphicon-plus"></span>
      </span>
    </div>
    <div class="r-p-body-img">
      <img src="../assets/img/child-place/c-p-picture.jpg">
    </div>

    <div class="row">
      <div class="row" style="height: 1rem;"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
    </div>





















    <div class="r-p-youji">
      <div class="r-yj-header">
        <span class="glyphicon glyphicon-pencil"></span>
        <span>东京评论推荐</span>
      </div>
      <div class="r-yj-body">
        <div class="r-yj-1">
          <router-link to="/travel_notes" style="text-decoration: none; color: #222222">
            <div class="yj-1-container">
              【Fiorelady】跟着日剧游东京、京都、关西（1日东京人-东京寺庙静心/浴衣穿越-奈良梅花鹿-大阪买买买）
            </div>
          </router-link>
          <div class="yj-1-xs">
            <span>yinyuyinyu</span>
            <span>|</span>
            <span>2017-5-27</span>
            <span>|</span>
            <span>201人喜欢</span>
            <span class="glyphicon glyphicon-heart"></span>
            <router-link to="/travel_notes" style="text-decoration: none; color: #222222">
              <span class="yj-pinglun">评论</span>
            </router-link>
          </div>
          <br><hr>
        </div>
        <div class="r-yj-1">
          <router-link to="/travel_notes" style="text-decoration: none; color: #222222">
            <div class="yj-1-container">
              【Fiorelady】跟着日剧游东京、京都、关西（1日东京人-东京寺庙静心/浴衣穿越-奈良梅花鹿-大阪买买买）
            </div>
          </router-link>
          <div class="yj-1-xs">
            <span>yinyuyinyu</span>
            <span>|</span>
            <span>2017-5-27</span>
            <span>|</span>
            <span>201人喜欢</span>
            <span class="glyphicon glyphicon-heart"></span>
            <router-link to="/travel_notes" style="text-decoration: none; color: #222222">
              <span class="yj-pinglun">评论</span>
            </router-link>
          </div>
          <br><hr>
        </div>
        <div class="r-yj-1">
          <router-link to="/travel_notes" style="text-decoration: none; color: #222222">
            <div class="yj-1-container">
              【Fiorelady】跟着日剧游东京、京都、关西（1日东京人-东京寺庙静心/浴衣穿越-奈良梅花鹿-大阪买买买）
            </div>
          </router-link>
          <div class="yj-1-xs">
            <span>yinyuyinyu</span>
            <span>|</span>
            <span>2017-5-27</span>
            <span>|</span>
            <span>201人喜欢</span>
            <span class="glyphicon glyphicon-heart"></span>
            <router-link to="/travel_notes" style="text-decoration: none; color: #222222">
              <span class="yj-pinglun">评论</span>
            </router-link>
          </div>
          <br><hr>
        </div>
        <router-link to="/travel_notes" style="text-decoration: none;color: #11bf79">
          <div class="yj-more">
            更多东京评论
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import Axios from 'axios';
  export default{
    data:function(){
      return{
        scene_info:'',
        scene_id:0
      }
    },
    mounted:function () {
      var scene_id=this.$route.params.id;
      this.scene_id=scene_id;
      var _this = this;
      Axios.get("http://localhost:3000/publish_scene", {
        params: {
          id:scene_id
        }
      }).then(function (res) {
        _this.scene_info=JSON.parse(res.data);
        console.log(JSON.parse(res.data));
      })
    }
  }
</script>
<style src="../assets/css/reply.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap-theme.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap-theme.min.css" scoped></style>


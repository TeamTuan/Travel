<template>
  <div>
    <div class="header" style="width:10rem;height:1.5rem;background:#11bf79;">
      <div class="col-xs-2">
        <router-link to="/" style="color:white;"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link>
      </div>
      <div class="col-xs-8" style="color:white;text-align:center;line-height:1.5rem;">当前搜索:{{value}}</div>
      <div class="col-xs-2">
        <span class="glyphicon glyphicon-search"  style="font-size:30px;" aria-hidden="true"></span>
      </div>
    </div>
    <div class="row">
      <div class="row" @click="go_scene(scene.scene_id)" style="height: 3rem;border-bottom: 2px solid #d8d8d8;" v-for="scene in scene_info">
        <div class="col-xs-1" style="height: 100%;"></div>
        <div class="col-xs-3" style="height: 100%;">
          <img src="../assets/img/morentouxiang.jpeg" alt="" style="height:2.5rem;margin-top:0.25rem;">
        </div>
        <div class="col-xs-1" style="height: 100%;"></div>
        <div class="col-xs-5" style="height: 100%;">
          <div class="row" style="height: 0.75rem;text-align:left;line-height:0.75rem;">{{scene.name}}</div>
          <div class="row" style="height: 0.75rem;text-align:left;line-height:0.75rem;">{{scene.englishname}}</div>
          <div class="row" style="height: 0.75rem;text-align:left;line-height:0.75rem;">{{scene.position}}</div>
          <div class="row" style="height: 0.75rem;text-align:left;line-height:0.75rem;">{{scene.count}}</div>
        </div>
        <div class="col-xs-2" style="height: 100%;text-align:center;line-height:3rem;">城市</div>
      </div>
    </div>
  </div>
</template>
<script>
  import Axios from 'axios';
export default{
  data:function(){
    return{
      value:'',
      scene_info:{}
    }

  },
  mounted:function(){
    this.value=this.$route.params.value;
    var _this=this;
    Axios.get('http://localhost:3000/get_scene_like',{
      params:{
        value:_this.value
      }
    }).then(function(res){
      _this.scene_info=JSON.parse(res.data);
    })
  },
  methods:{
    go_scene:function(scene_id){
      this.$router.push("/reply/"+scene_id+"/"+this.value);
    }
  }
}
</script>
<style  scoped>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  *{
    font-size:30px;
  }
  .row{
    margin:0;
    padding: 0;
  }
  .row div{
    margin: 0;
    padding: 0;
  }
</style>

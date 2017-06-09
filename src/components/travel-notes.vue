<template>
<div>
  <div class="travel-notes"  >
    <div class="a_header">
      <router-link to="/user/null/null" style="color: white;"><div><span class="arrows"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></span></div></router-link>

      <div class="col-xs-8"><h2>我的游记</h2></div>
    </div>
    <div class="my_nav" v-for="travel in travellist">

      <div class="row my_row" style="margin: 0;">

        <div class="col-xs-9">
          <img src="../assets/img/xianggang.jpg">
          <h2>{{travel.title}}</h2>
        </div>
        <div class="col-xs-2"><router-link to="/add_notes"><span class="glyphicon glyphicon-pencil"
                                                                 aria-hidden="true"></span></router-link></a></div>
        <div class="col-xs-1"><a href=""><span class="glyphicon glyphicon-remove"
                                               aria-hidden="true"></span></a></div>
      </div>



    </div>
    <div class="footer_add">
      <router-link to="/add_notes">
                  <span class="glyphicon glyphicon-plus"
                        aria-hidden="true"></span>
      </router-link>




    </div>
  </div>
</div>



</template>
<script>
  import Axios from "axios";
  export default {
    data:function () {
      return {
        travellist:[],
        login_id:0
      }
    },


        created:function () {
         var _this=this;

      Axios.get("http://localhost:3000/travel_notes")
        .then(function (res) {
          _this.travellist=JSON.parse(res.data);
//          console.log(JSON.parse(res.data));
        });

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/travel-notes.css" scoped>
    @import "../assets/lib/bootstrap/css/bootstrap.css";
    @import "../assets/css/common.css";
</style>

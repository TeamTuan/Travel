<template>


        <div class="travel-notes">
            <div class="a_header">
              <router-link to="/user" style="color: white;"><div><span class="arrows"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></span></div></router-link>

                    <div class="col-xs-8"><h2>我的游记</h2></div>
            </div>
            <div class="my_nav" >

                <div class="row my_row">

                  <div class="col-xs-9">
                    <img src="../assets/img/xianggang.jpg">
                    <h2>香港</h2>
                  </div>
                  <div class="col-xs-2"><router-link to="/add_notes"><span class="glyphicon glyphicon-pencil"
                                                                              aria-hidden="true"></span></router-link></a></div>
                  <div class="col-xs-1"><a href=""><span class="glyphicon glyphicon-remove"
                                                                              aria-hidden="true"></span></a></div>
                </div>

                <div class="row my_row">
                  <div class="col-xs-9">
                    <img src="../assets/img/harbin.jpg">
                    <h2>哈尔滨</h2>
                  </div>
                  <div class="col-xs-2"><router-link to="/add_notes"><span class="glyphicon glyphicon-pencil"
                                                                              aria-hidden="true"></span></router-link></a></div>
                  <div class="col-xs-1"><a href=""><span class="glyphicon glyphicon-remove"
                                                         aria-hidden="true"></span></a></div></div>

                </div>
            <div class="footer_add">
                <router-link to="/add_notes">
                  <span class="glyphicon glyphicon-plus"
                        aria-hidden="true"></span>
                </router-link>




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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/travel-notes.css" scoped>
    @import "../assets/lib/bootstrap/css/bootstrap.css";
    @import "../assets/css/common.css";
</style>

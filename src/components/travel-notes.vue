<template>


        <div class="travel-notes">
            <div class="header">
                    <div><a class="arrows" href=""><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a></div>
                    <div class="col-xs-8"><h2>我的游记</h2></div>
                </div>
            <div class="nav" >

                    <div class="col-xs-8">
                        <img src="../assets/img/xianggang.jpg">
                        <h2>香港</h2>
                    </div>
                    <div class="col-xs-2 user col-xs-offset-2"><a href=""><span class="glyphicon glyphicon-pencil"
                                                                                aria-hidden="true"></span></a></div>





                <div class="col-xs-8">
                    <img src="../assets/img/harbin.jpg">
                    <h2>哈尔滨</h2>
                </div>
                <div class="col-xs-2 user col-xs-offset-2"><a href=""><span class="glyphicon glyphicon-pencil"
                                                                            aria-hidden="true"></span></a></div>
            </div>
            <div class="footer">
                <a href="Hello.vue">
                    <span class="glyphicon glyphicon-plus"
                          aria-hidden="true"></span>
                </a>


            </div>
        </div>


        <!--<banner></banner>-->
</template>
<script>
    import $ from 'jquery';
//    import banner from './Carousel_figure.vue';
    export default {
        data:function () {
            return {
                timer:""
            }
        },
        methods:{

        },
        components:{
            banner
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import "../assets/lib/bootstrap/css/bootstrap.css";
    @import "../assets/css/common.css";
    @import "../assets/css/travel-notes.css";
</style>

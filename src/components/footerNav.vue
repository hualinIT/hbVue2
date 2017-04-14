<template>
    <footer class="footer" :class="{'go-style':showNav}" v-show="showNav">
        <section >
        <Row>
            <Col span="8">
                <nav class="nav" :class="{'cur-page': route =='/'}">
                    <router-link to="/">
                        <div class="nav-icon nav-home">
                            <img src="../assets/img/ico/home_01.jpg" v-show ="route =='/'" />
                            <img src="../assets/img/ico/home.jpg" v-show="route !=='/'" />
                            <p>首页</p>
                        </div>
                    </router-link>
                </nav>
            </Col>

            <Col span="8">
                <nav class="nav nav-pro" :class="{'cur-page':route == '/products'}">
                    <router-link to="/products">
                        <div class="nav-icon ">
                             <img src="../assets/img/ico/products_01.jpg" v-show ="route =='/products'" />
                            <img src="../assets/img/ico/products.jpg" v-show="route !=='/products'" />
                            <p>产品</p>
                        </div>
                    </router-link>
                </nav>
            </Col>
            <Col span="8">
                <nav class="nav nav-more" :class="{'cur-page':route == '/hello'}">
                    <router-link to="/hello">
                        <div class="nav-icon ">
                             <img src="../assets/img/ico/myaccount_01.jpg" v-show ="route =='/hello'" />
                            <img src="../assets/img/ico/myaccount.jpg" v-show="route !=='/hello'" />
                            <p>关于我们</p>
                        </div>
                    </router-link>
                </nav>
            </Col>
        </Row>



        </section>
    </footer>
</template>

<script >
    export default {
        name:'footerNav',
        props:{
            'showNav':{
                type:Boolean,
                default:true,
            }
        },
        computed:{
            route () {
                return this.$route.path;
            }
        }
    }
</script>

<style lang="scss">
    .go-style {
        border-top: 1px solid #ccc;


    }
    .footer{
        position: fixed;
        bottom: 0px;
        height: 70px;
        width: 100%;
        padding-top: 7px;
        padding-bottom: 15px;
        z-index: 10000;
        background: #fff;
        box-sizing: border-box;
        nav {
            text-align: center;
            // line-height: 50px;
            display: inline-block;
            width: 100%;
            img{
                height: 20px;
                width: 20px;
            }
            p {
                color: #000;
            }
       }
       .cur-page {
            .nav-icon{
                p{
                    color:#39f;
                }

            }
       }

    }
</style>
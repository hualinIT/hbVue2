<template>
    <div class="home">
        <div class="head-car">
            <Carousel v-model="value1" autoplay>
               <!--  <template v-for="item in linksArr">
                <Carousel-item >
                    <div class="demo-carousel" >
                      <img :src="item.imgUrl">
                    </div>
                </Carousel-item>
                </template> -->
                <Carousel-item >
                    <div class="demo-carousel" >
                      <img src="../assets/img/m1.jpg">
                    </div>
                </Carousel-item>
                <Carousel-item >
                    <div class="demo-carousel" >
                      <img src="../assets/img/m2.jpg">
                    </div>
                </Carousel-item>
                <Carousel-item >
                    <div class="demo-carousel" >
                      <img src="../assets/img/m3.jpg">
                    </div>
                </Carousel-item>
            </Carousel>
        </div>

        <div class="home-nav">
            <div class="homenav-t">
                <Row>
                    <Col span="8">
                        <router-link to="/noticelist">
                            <img src="../assets/img/ico/icon_13.png">
                            <p>网站公告</p>
                        </router-link>
                    </Col>
                    <Col span="8">
                        <router-link to="/">
                            <img src="../assets/img/ico/icon_03.png">
                            <p>媒体报道</p>
                        </router-link>
                    </Col>
                    <Col span="8">
                        <router-link to="/">
                            <img src="../assets/img/ico/icon_09.png">
                            <p>相关问题</p>
                        </router-link>
                    </Col>
                </Row>
            </div>
            <div class="homenav-b">
                <Row>
                    <Col span="4"><div class="hv-b-style hv-b-img"><img src="../assets/img/express.png"></div></Col>
                    <Col span="20"><div class="hv-b-style">
                    <router-link :to="noticeId">{{noticeTitle}}</router-link>
                    </div></Col>

                </Row>
            </div>
        </div>

        <div class="total">
            <div class="t-column">
                <p>{{sum}}<span>亿元</span></p>
                <h3>累计交易金额</h3>
            </div>
            <div class="t-column">
                <p>{{total}}<span>万人</span></p>
                <h3>累计注册用户数</h3>
            </div>
        </div>

        <div class="products">
            <template v-for="item in products ">
                <div class="product-item">
                    <Card :bordered="false">
                            <p slot="title" class="product-title">
                                {{item.name}}
                            </p>
                            <p slot="extra" class="product-percent">
                               {{item.probability}}%用户推荐
                            </p>
                            <div class="product-interest">
                                <p>{{item.interest}}<span>%</span></p>
                                <h4  v-if="item.name=='新手包'">封闭期5天 100元起投</h4>
                                <h4  v-if="item.name=='零钱宝'">随存随取 100元起投</h4>
                                <h4  v-if="item.name=='厚钱包30'">封闭期30天 100元起投</h4>
                                <div class="btn-box">
                                    <Button type="primary" @click="willOnline">即将上线</Button>
                                </div>
                            </div>
                        </Card>
                </div>
            </template>
        </div>
    </div>
</template>
<style lang="scss">
    .home {
        background: #f5f5f5;
        .head-car {
          height: 200px;
          width: 100%;
          div {
            height: 100%;
            width: 100%;
            div {
              height: 100%;
            }
          }
        }
        .home-nav {
            // height: 80px;
            background: #fff;
            margin-bottom: 40px;
            .homenav-t {
                // height: 60px;
                border-bottom: 1px solid #ccc;
                img{
                    margin-top: 10px;
                    width: 40px;
                    height: 40px;
                }
                p{
                    color: #000;
                }
            }
            .homenav-b {
                padding: 15px;
                font-size: 18px;
            }
            .hv-b-style {
                height: 40px;
                line-height: 40px;
            }
            .hv-b-img {
                padding-left: 50px;
                img {
                    width: 69px;
                    height: 29px;
                }
            }
        }
        .total {
            width: 100%;
            height: 200px;
            border-top: 1px solid #ccc;
            .t-column {
                display: inline-block;
                width: 33%;
                height: 100%;
                font-size: 12px;
                text-align: center;
                background:#fff;
                p {
                    font-size: 18px;
                    color: #000;
                    line-height: 100px;
                    font-weight: 700;
                    span {
                        font-size: 12px;
                        font-weight: 200;
                    }
                }
                h3 {
                    color: #000 ;
                    font-size: 12px;
                    line-height: 50px;
                }
            }

        }
        .products {
            .product-item {
                margin: 15px 0;
                .product-title {
                    text-align: left;
                    font: 12px 700 #000;
                    padding-left: 15px;
                }
                .product-interest {
                    p {
                        padding: 15px;
                        color: #ff0000;
                        font-size: 20px;
                        font-weight: 700;
                        span {
                            font-size: 12px;
                            font-weight: 200;
                        }
                    }
                    .btn-box{
                        margin: 10px 0;
                        button {
                            background: #ff0000;
                            width: 200px;
                            border: 1px solid #ff0000;
                        }
                    }
                }
            }
        }
    }
</style>
<script >
    export default {
        name:'home',
        data () {
            return {
                api_sum:"web-api//trade/order/amt/sum",
                api_total:"/web-api//trade/register/user/total",
                sum:"",
                total:"",
                value1:0,
                products:[],
                expressList:[],
                noticeTitle:'',
                noticeId:'',
                imgs:[{src:'https://www.houbank.com/banner/1488875791271.jpg'},{src:'https://www.houbank.com/banner/1484817760922.jpg'},{src:'../assets/img/m3.jpg'}],
                linksArr:[],
                imgs:[{src:'../assets/img/m1.jpg'},{src:'../assets/img/m2.jpg'},{src:'../assets/img/m3.jpg'}]
            }
        },
        computed:{
            sum () {

            }
        },
        methods: {
            getSum () {
                this.$http.get(this.api_sum).then((response)=>{
                    this.sum = response.data.result.value;
                })
            },
            getTotal () {
                this.$http.get(this.api_total).then((response)=> {
                    this.total = response.data.result.value;
                })
            },
            getProducts () {
                this.$http.get('/web-api//products/recommend?time=1491875896483').then((response)=> {
                    this.products = response.data.result;
                })
            },
            willOnline () {
                this.$Modal.confirm({
                    title: '提示',
                    content: '<p>即将上线，敬请期待</p>',
                    onOk: () => {
                      this.$Message.info('点击了确定');
                    },
                    onCancel: () => {
                      this.$Message.info('点击了取消');
                    }
                });
            },
            getNoticeList (i=1) {
                this.$http.get('web-api/information/affiches/?size=10&sort=updated&order=desc&page='+i).then((response)=> {
                    var nlist = response.data.result;
                    var ii = 0;
                    var self = this;
                    setInterval(function(){
                        if(ii == nlist.length){ ii = 0;}
                        self.noticeTitle = nlist[ii].title;
                        self.noticeId = '/noticelist/'+nlist[ii].id;
                        ii++;
                    },2000)

                })
            },
            getBanners () {

                this.$http.get('web-api//settings/banners').then((response)=> {
                    var bannersList = response.data.result;
                    this.linksArr = bannersList;


                })
            },
        },
        created (){
            this.getSum();
            this.getTotal();
            this.getProducts();
            this.getNoticeList();
            this.getBanners();

        }
    }
</script>
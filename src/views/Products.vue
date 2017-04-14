<template>
   <div class="products">
        <div>我的num数据：{{numss}}</div>
        <div class="item-bottom item-btn" @click="addNum">
            <Button type="primary">change num</Button>
        </div>

        <ul class="products-list">
            <template v-for="item in products">
                <li class="products-item">
                    <Row>
                        <Col span="12"><div class="prdt-name item-top">{{item.name}}</div></Col>
                        <Col span="12"><div class="prdt-people item-top">累计投资<span>{{item.investPeopleTotal}}人次</span></div></Col>
                    </Row>
                    <Row>
                        <Col span="8">
                            <div class="item-bottom item-interest">
                                <h3>年收益率</h3>
                                <p>{{item.interest}}<span>%</span></p>
                            </div>
                        </Col>
                        <Col span="16">
                            <Row>
                                <Col span="12">
                                    <div class="item-bottom item-date">
                                        <div>封闭期:{{item.lockTime}} 天</div>
                                        <div>投资金额:{{item.minInvestAmt}}天</div>
                                    </div>
                                </Col>
                                <Col span="12">
                                    <div class="item-bottom item-btn" @click='willOnline'><Button type="primary">即将上线</Button></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </li>
            </template>
        </ul>
   </div>
</template>
<style lang="scss">
.products {
    background: #ccc;
    padding: 15px 30px;
    .products-item {
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        margin-bottom: 25px;
        background: #ffffff;
        .item-top {
            height: 40px;
            line-height: 40px;
        }
        .prdt-name {
            font-weight: bold;
            text-align: left;
            padding-left: 20px;
        }
        .item-bottom {
            height: 80px;
        }
        .item-interest {
            text-align: left;
            padding-left: 40px;
            h3 {
                height: 40px;
                line-height: 40px;

            }
            p {
                height: 30px;
                line-height: 30px;
                color: #ff0000;
                font-size: 18px;
                span {
                    font-size: 12px;
                }
            }
        }
        .item-date {
            div {
                height: 40px;
                line-height: 40px;
            }
        }
        .item-btn {
            line-height: 80px;
        }
    }
}
</style>
<script >
    export default {
        name:'products',
        data () {
            return {
                products:[],
            }
        },
        computed:{
            numss () {
                console.log("------------------------999")
                return this.$store.state.num;
            }
        },
        methods: {
            getProducts () {
                this.$http.get('web-api/products/list').then((response)=> {
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
            addNum: function() {
                this.$store.commit('addNum',{account:5})
            },
        },
        created (){
            this.getProducts()
        }
    }
</script>
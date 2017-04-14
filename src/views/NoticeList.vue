<template>
   <div class="noticeList">
        <div class="n-title">
            <h3>网站公告</h3>
            <p><router-link to="/">返回主页</router-link></p>
        </div>
        <template v-for="item in nList">
            <div class="border-bottom">
                <Row>
                    <Col span="18">
                        <router-link :to="{ name: 'noticedetail', params: { nid: item.id }}">
                            <div class="notice-title notice-item">
                                {{item.title}}
                            </div>
                        </router-link>
                    </Col>
                    <Col span="6">
                        <div class="notice-time notice-item">
                             {{item.createTime}}
                        </div>
                    </Col>
                </Row>
            </div>
        </template>

        <div id="parent">
        <Page :total="pages" show-elevator show-sizer show-total @on-change="change" on-page-size-change="pChange"></Page>
        </div>
      <!--   <Page :total="163" on-change="change"></Page> -->
        <!-- <div class="page">
            <span v-for="i in pageArr" @click="getNoticeList(i)">{{i}}</span>
        </div> -->
   </div>
</template>
<style lang="scss">
 .noticeList {
    padding: 15px 30px;
    .n-title {
        h3 {
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            font-weight: 700;
        }
    }
    .notice-item {
        height: 50px;
        line-height: 50px;
        font-size: 18px;
    }
    .border-bottom {
        border-bottom: 1px solid #ccc;
    }
    .page {
        height: 40px;
        margin-top: 20px;
        border-right: 1px solid #ccc;
        span{
            display: inline-block;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border:1px solid #ccc;
            border-radius: 5px;
            border-right: none;
            cursor: pointer;
            :last {
                border:1px solid #ccc;
            }
        }
    }
 }
</style>

<script >
    export default {
        name:'noticelist',
        data () {
            return {
                nList:[],
                products:[],
                pageTotal:'',
                pageArr:[],
                pages:0
            }
        },
        computed:{

        },
        methods: {
            getNoticeList (i=1) {
                this.$http.get('web-api/information/affiches/?size=10&sort=updated&order=desc&page='+i).then((response)=> {
                    this.nList = response.data.result;
                    this.pageTotal = response.data.total_count;
                    let page = Math.ceil(response.data.total_count/10);
                    console.log(this.pageTotal)
                    this.pages = response.data.total_count;
                    var pageArr=[];
                   // for(let a=1;a<=page;a++){
                   //      pageArr.push(a)
                   // }
                   // this.pageArr = pageArr;
                   // console.log(page)
                })
            },
            change (page) {
                console.log(page)
                this.getNoticeList(page)
            },
            pChange () {
                console.log('111111111111111111111')
            }
        },
        created (){
            this.getNoticeList()
        }
    }
</script>
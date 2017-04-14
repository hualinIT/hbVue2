<template>
   <div class="noticeDetail">
        <div class="notice-context">
            <h3 class="notice-title">{{cTitle}}</h3>
            <p><router-link to="/noticelist">返回列表</router-link></p>
            <div class="notice-context">{{context}}</div>
        </div>
        <div class="siblings">
            <p></p>
            <p v-if="prevTitle!=null">上一条:<router-link :to="{ name: 'noticedetail', params: { nid: prevNid }}">{{prevTitle}} {{prevNid}}</router-link> </p>
            <p v-if="nextTitle!=null">下一条:<router-link :to="{ name: 'noticedetail', params: { nid: nextNid }}">{{nextTitle}} {{nextNid}}</router-link> </p>
        </div>
    </div>
</template>
<style lang="scss">
.noticeDetail {
    padding: 15px 30px;
    .notice-title {
        font-size: 20px;
        height: 50px;
        line-height: 50px;
    }
    .notice-context {
        font-size: 16px;
        line-height: 30px;
        text-indent: 2em;
    }
    .siblings {
        p {
            text-align: left;
        }
    }
}
</style>

<script >
    export default {
        name:'noticedetail',
        data () {
            return {
                cTitle:'',
                context:'',
                api:"web-api/information/affiche/",
                prevNid:'0',
                prevTitle:'',
                nextNid:'1',
                nextTitle:'',
            }
        },
        computed:{

        },
        watch:{
            '$route':function(){
                if( /^\/noticelist\/[0-9]{4}/.test(this.$route.path)){
                    this.getNoticeDetail();
                    this.getSiblings()
                }
            }
        },
        methods: {
            getNoticeDetail () {
                console.log(this.$route.params.nid)
                let nid = this.$route.params.nid;
                this.$http.get(this.api+nid).then((response)=> {
                    console.log(response.data.result)
                    this.cTitle = response.data.result.title;
                    this.context = response.data.result.content;
                })
            },
            getSiblings () {
                console.log(this.$route.params.nid)
                let nid = this.$route.params.nid;
                this.$http.get("web-api/information/queryNextOrPrevious?id="+nid+"&queryType=notice").then((response)=> {
                    let result     = response.data.result;
                    this.nextNid   = result.next;
                    this.nextTitle = result.nextTitle;
                    this.prevNid   = result.previous;
                    this.prevTitle = result.previousTitle;

                    console.log(response.data.result.next)
                    console.log(this.nextNid)
                    console.log(response.data.result)

                })
            },

        },
        created (){
            this.getNoticeDetail();
           this.getSiblings()
        }
    }
</script>
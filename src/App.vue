<template>
  <div id="app" :class="{'PaddBottom':need}">

   <!--  <img src="./assets/logo.png"> -->
   <keep-alive>
       <router-view></router-view>
    </keep-alive>
    <footer-nav :showNav="showNav"></footer-nav>
  </div>
</template>

<script>
import footerNav from "./components/footerNav.vue"
export default {
  name: 'app',
  data (){
    return {
      value1: 0,
      showNav: true,
      car:[],
      cars:[],
      need:true,
    }
  },
  components:{
    footerNav:footerNav
  },
  watch:{
    '$route':function() {
      this.routeChange();
    }
  },
  methods: {
    routeChange () {
      let path = this.$route.path;
      if(path ==='/' || path ==="/nav" || path ==="/hello" || path ==="/products"){
        this.showNav = true;
        this.need = true;
      }else {
        this.showNav = false;
        this.need = false;
      }
    }
  },
  created () {
    this.routeChange()
    // this.$http.get('web-api//information/newses/?page=1&size=8').then(function(response){
    //    console.log('99999999999999')
    //    console.log(response.data.result)
    //    this.car = [{icon:"/static/img/m1.jpg"},{icon:"/static/img/m2.jpg"},{icon:"/static/img/m3.jpg"}]
    // })
  }
}
</script>
<style lang="scss">
@import './assets/app.scss';
$color:#ff0000;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 60px;
}
#apps h1 {
  color:$color;
}
</style>

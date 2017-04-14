<template>
  <div class="hello">
    <router-link to="/nav">Go to nav</router-link>
    <h1>{{ msg }}</h1>
    <h2>投资人数 : {{ nums }}</h2>

    <h2>状态管理store的num：{{ num }}</h2>

    <h2>fetch的数据:{{ fecthnum }}</h2>

    <div>
      <Button type="primary" v-on:click="getCustomers">获取数据</Button>
      <Button type="primary" v-on:click="addNum">addnum状态管理</Button>
      <Button type="primary" v-on:click="getFecth">fecth获取数据</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '关于我们',
      nums:'0',
      apiUrl: 'web-api/trade/register/user/total',
      fecthnum:'0'
    }
  },
  computed :{
      num () {
          return this.$store.state.num;
      }
  },
  ready: function() {
        this.getCustomers()
  },
  methods: {
      getCustomers: function() {
          var vm = this;
          vm.$http.get(this.apiUrl)
              .then((response) => {
                // vm.$set(vm.num, response.data.result.value)
                 console.log(response.data.result.value)
                 vm.nums = response.data.result.value;
              })
              .catch(function(response) {
                  console.log(response)
              })
      },
      addNum: function() {

          this.$store.commit('addNum',{account:5})
      },
      getFecth: function() {
       // fetch(this.apiUrl, {method: 'GET',}).then(function(response) {
        //  console.log('000000000000000000000000')
        //  console.log(response.status)
        //  console.log(response)

       // })

       var self = this;
       var promise =  fetch(this.apiUrl)
          .then(function(response) {
              if(response.status === 200){
                   //json是返回的response提供的一个方法,会把返回的json字符串反序列化成对象,也被包装成一个Promise了
                   return response.json();
                 }else{
                   return {}
                 }
          })

          promise = promise.then(function(data){
            //响应的内容
            console.log('8888888888888888')
            console.log(data);
            self.fecthnum = data.result.value;
          }).catch(function(err){
            console.log(err);
          })


    },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
h2 {
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: left;
  margin-bottom: 15px;
  padding-left: 40px
}
</style>

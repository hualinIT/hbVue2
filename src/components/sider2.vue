<template>
  <div class="sider">
    <h1>我是sider2</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'sider2',
  data () {
    return {
      msg: '一个左侧栏目sider2'
    }
  },
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
</style>

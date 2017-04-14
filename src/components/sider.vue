<template>
  <div class="sider">
    <p >我是sider侧边栏模块</p>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'sider',
  data () {
    return {
      msg: '一个左侧栏目sider1111111111111',
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$siderColor:#ccc;
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
.sider{
  p{
    color:$siderColor;
  }
}
</style>

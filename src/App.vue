<template>
  <div id="app">
    <el-container class="article">
      <mheader></mheader>
      <router-view></router-view>
    </el-container>
  </div>
</template>
<script>
import Mheader from  './components/mheader'

export default {
  data () {
    return {
      logoUrl: require('./assets/logo.png'),
      boyUrl: require('./assets/boy.jpeg'),
      girlUrl: require('./assets/girl.jpeg'),
      activeIndex: '1',
      show: 'false'
    }
  },
  components:{
    Mheader
  },
  methods: {

  },


}
</script>



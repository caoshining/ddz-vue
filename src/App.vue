<template>
  <div id="app">  
    <transition name="el-fade-in-linear">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import login from './comments/login/login.vue'

export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  },
  components: {
    login
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body {
  height: 100%;
  width: 100%;
  font-family: Helvetica, sans-serif;
}
#app{
  height: 100%;
  width: 100%;
}
</style>

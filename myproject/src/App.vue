<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-container>
      <el-header>
        <Head></Head>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Head from './components/Head.vue'
import Aside from './components/Aside.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Head,
    Aside,
    Main
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.el-container .el-header{
  padding: 0;
}
.el-container .el-main{
  padding: 20px 0 0 0;
  
}
</style>

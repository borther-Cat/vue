<template>
   <div class="nh_header">
      <div class="hd_dowm">
        <el-dropdown>
          <span class="el-dropdown-link">
            你好，测试<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>xxx</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Head',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nh_header{
    height: 60px;
    background-color: #4491E0;

    position: relative;
  }
  .hd_dowm{
    
    position: absolute;
    top: 30%;
    right: 30px;
  }
  .hd_dowm .el-dropdown-link{
    color: #fff;
    font-size: 12px;
  }
 
</style>

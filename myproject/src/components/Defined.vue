<template>
	<div class="nh_defined">
		<div class="left">
			<el-button type="primary" size="small" @click="changeflag">自定义表单</el-button>
		</div>
		<div class="right" v-show="flag">
      <vue-editor v-model="content" />
    </div>
	</div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: 'Defined',
  props: {

  },
  components: { VueEditor },
   data: () => ({
    content: "",
    flag:false
  }),
  methods: {
    changeflag(){
      this.flag = !this.flag
    }
  }
}
</script>

<style scoped>
.nh_defined{
  width: 100%;
  font-size: 0; 
  overflow: hidden;
  margin-bottom: 50px
}
.left{
  overflow: hidden;
  margin-bottom: 10px;
}
.el-button--small{
	float: left;
}

</style>

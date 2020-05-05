<template>
	<div class="nh_info">
		<p class="msg">用户信息采集分析</p>
		<div id="main"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
export default {
 name: 'Info',
 props: {

 },
 data(){
	return {
		myChart: ''

	}
 },
 computed:{
	option(){
		return this.$store.state.home.option
	}
 },
 mounted () {
	this.myChart = echarts.init(document.getElementById('main'));
	// this.myChart.setOption(this.option,true)
 },
	watch: {
    option: function(curVal){
			this.myChart.setOption(curVal,true)
    },
	}
}
</script>

<style scoped>
.nh_info{
	height: 320px;
}
.msg{
	height: 20px;
	line-height: 20px;
	font-size: 12px;
	text-align: center;
	color: #409EFF;
}
#main{
	height: 280px;
}
</style>

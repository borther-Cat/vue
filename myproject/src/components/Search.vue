<template>
	<div class="nh_search">
		<div class="select">
			<el-select v-model="value" :multiple="true" size="small" placeholder="渠道">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
		</div>
		<div class="date">
			<div class="date1">
				<div class="block">
					<el-date-picker
						v-model="value1"
						type="date"
						size="small"
						placeholder="选择日期">
					</el-date-picker>
				</div>
			</div>
			<span>-</span>
			<div class="date2">
				<div class="block">
					<el-date-picker
						v-model="value2"
						size="small"
						type="date"
						placeholder="选择日期">
					</el-date-picker>
				</div>
			</div>
		</div>
		<div class="btn1 btn">
			<el-button size="mini" @click="reSet">重置</el-button>
		</div>
		<div class="btn2 btn">
			<el-button size="mini" type="primary">查询</el-button>
		</div>
		<div class="btn3 btn">
			<el-button size="mini" type="primary" @click="add" plain>添加</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Search',
	data() {
		return {
			value1:'',
			value2:'',
			options: [{
				value: '选项1',
				label: '渠道一'
			}, {
				value: '选项2',
				label: '渠道二'
			}],
			value: ''
		}
	},
  props: {

  },
  methods:{
		reSet(){
			this.value = '';
			this.value1 = '';
			this.value2 = '';
		},
		add(){
			this.$store.commit("changeshow",{val:true,title:"新增",row:{
				channel: '',
				date: '',
				fail: '',
				success: '',
				total: ''
			}})
		}
  }
}
</script>

<style scoped>
.nh_search{
	padding: 10px 0;
	display: flex;
	background-color: #EEEEEE;
	vertical-align: middle;
}
.select{
	margin-left: 20px;
}
.date{
	display: flex;
	margin-left: 20px;
	vertical-align: middle;
	text-align: center;
}
.el-date-editor.el-input{
	width: 150px;
}
.btn{
	margin-left: 10px;
}
</style>

<template>
	<div class="nh_list">
		<div class="btn">
			<el-button size="mini" type="primary" @click="show">列表</el-button>
		</div>
		<div class="list" v-show="active">
			<el-table
			:data="list"
			style="width: 100%"
			height="250">
			<el-table-column
				prop="date"
				label="日期"
				width="100">
			</el-table-column>
			<el-table-column
				prop="channel"
				label="渠道"
				width="100">
			</el-table-column>
			<el-table-column
				prop="total"
				label="总数"
				width="100">
			</el-table-column>
			<el-table-column
				prop="success"
				label="采集成功总数"
				width="130">
			</el-table-column>
			<el-table-column
				prop="fail"
				label="采集失败总数"
				width="130">
			</el-table-column>
			<el-table-column
				prop="operate"
				label="操作">
				<template slot-scope="scope">
					<el-button  type="text" size="small" @click="remove(scope.$index, scope.row)">删除</el-button>
					<el-button type="text" size="small" @click="update(scope.$index, scope.row)">修改</el-button>
					<el-button type="text" size="small" @click="check(scope.$index, scope.row)">查看</el-button>
				</template>
			</el-table-column>
		</el-table>
		</div>
	</div>
</template>

<script>
export default {
  name: 'List',
  props: {

	},
	data(){
		return {
			active: false
		}
	},
  computed: {
		list(){
			return this.$store.state.home.list
		}
	},
	methods: {
		show() {
			this.active = !this.active
		},
		update(index,row){
			window.console.log(index,row)
			this.$store.commit("changeshow",{val:true,title:"修改",row:row})
		},
		remove(index){
			this.$store.commit("removeList",index)
		},
		check(index,row){
			window.console.log(index,row)
			this.$store.commit("changeshow",{val:true,title:"查看",row:row})
		}
	}
}
</script>

<style scoped>
.btn{
	overflow: hidden;
}
.el-button--mini{
	float: left;
}
 .el-table tr,.el-table th{
	background-color:#F5F5F5;
}
/* .el-table th{
	background-color:#F5F5F5;
} */

</style>

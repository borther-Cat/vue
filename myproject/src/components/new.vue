<template>
	<div class="nh_main">
		<div class="head_list">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item v-for="item in breadList" :key="item">{{item}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="head_nav">
			<el-tabs type="card" v-model="editableTabsValue" closable @tab-remove="removeTab" @tab-click="changeTab">
				<el-tab-pane
					v-for="item in editableTabs"
					:key="item.name"
					:label="item.title"
					:name="item.name"
				>
				</el-tab-pane>
			</el-tabs>
		</div>
		<div class="content_main">
			<el-container>
				<el-aside width="180px">
					<Tree></Tree>
				</el-aside>
				<el-main>
					<Search></Search>
					<Info></Info>
					<Defined></Defined>
					<List></List>
					<Modal v-if="ishow"></Modal>
				</el-main>
			</el-container>
		</div>
	</div>
</template>

<script>
import Tree from './Tree.vue'
import Search from './Search.vue'
import Info from './Info.vue'
import Defined from './Defined.vue'
import List from './List.vue'
import Modal from './Modal.vue'
export default {
	components: {
		Tree,
		Search,
		Info,
		Defined,
		List,
		Modal

	},
	data() {
		return {
			// editableTabsValue:this.$store.state.home.editableTabsValue
		}
	},
  name: 'Main',
  props: {

	},
	methods: {
		removeTab(targetName) {
			this.$store.commit('removetab',targetName)
			window.console.log("targetName",targetName)
		},
		changeTab(a){
			window.console.log('Tab实例',a.$options.propsData.name)
		}
	},
	computed: {
		breadList(){
			return this.$store.state.home.breadList
		},
		ishow(){
			return this.$store.state.home.ishow
		},
		editableTabsValue:{
			get: function(){
				return this.$store.state.home.editableTabsValue
			},
			set: function (val) {
				window.console.log(val)
			}
			
		},
		editableTabs(){
			return this.$store.state.home.editableTabs
		}

	},
	created(){
		window.console.log("editableTabsValue",this.editableTabsValue)
	},
	updated(){
		window.console.log("editableTabsValue",this.editableTabsValue)
	}
}
</script>

<style scoped>
	.head_list{
		padding: 0 0 20px 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
	}
 .content_main .el-main{
		padding: 0;
 }
	.el-tabs__header{
		margin-bottom: 0px;
 }
 
</style>

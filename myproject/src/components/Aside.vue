<template>
	<div class="nh_aside">
		<el-menu
			class="el-menu-vertical-demo"
			unique-opened:true
			@open="handleOpen">	
			<el-submenu :index="item.title" 
				v-for="item in meun"
				:key="item.title">
				<template slot="title">
					<i class="el-icon-menu"></i>
					{{item.title}}
				</template>
				<el-menu-item v-for="(ele,idx) in item.child" :key="ele" :index="ele" @click="send(item.id+idx.toString(),ele)">{{ele}}</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>
 
<script>

export default {
	name: 'Aside',
	data() {
		return {
			meun: [{
			title: "菜单一",
			id: 1,
			child: ['菜单1-1','菜单1-2','菜单1-3']
			},{
				title: "菜单二",
				id: 2,
				child: ['菜单2-1','菜单2-2','菜单2-3']
			},{
				title: "菜单三",
				id: 3,
				child: ['菜单3-1','菜单3-2','菜单3-3']
			},{
				title: "菜单四",
				id: 4,
				child: ['菜单4-1','菜单4-2','菜单4-3']
			},{
				title: "菜单五",
				id: 5,
				child: ['菜单5-1','菜单5-2','菜单5-3']
			}]
		}
	},
	methods: {
		handleOpen(key, keyPath) {
			window.console.log(key, keyPath);
			this.$store.commit('changeBreadList',{title:key,id:1})
		},
		send(val,ele) {
			window.console.log("val",val,ele)
			this.$store.commit('changeBreadList',{title:ele,id:2})
			this.$store.commit('addTab',{title:ele,id:val})
			this.$store.dispatch('getData',val)
		}
	}
	}
</script>
	
<style scoped>
.nh_aside .el-menu{
	background-color: #F6F6F6;
}
</style>
 
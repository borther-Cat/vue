<template>
	<div class="nh_tree">
    <el-tree
			:data="channel"
			show-checkbox
			:default-expand-all="true"
			:default-checked-keys="arr"
			@check="getSelect"
			node-key="id">
		</el-tree>
	</div>
</template>

<script>
export default {
	data() {
		return {
			arr: [0,1,2]
		};
	},
  name: 'Tree',
  props: {

  },
  computed: {
		channel(){
			return this.$store.state.home.channel
		},
	},
	methods: {
		getSelect(a,b){
			let {checkedNodes} = b;
			this.$store.commit('selectlist',checkedNodes)
			this.$store.commit('selectoption',checkedNodes)
		}
	}
}
</script>

<style scoped>

</style>

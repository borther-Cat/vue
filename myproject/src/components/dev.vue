<template>
	<div class="modal">
		<div class="content">
			<div class="head">
				<span>{{headTitle}}</span>
			</div>
			<div class="main">
				<div class="left">
					<el-form :model="check" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="渠道" prop="channel" :rules="[{ required: true, message: '请输入编码', trigger: 'blur' }]">
							<el-input v-model="check.channel"></el-input>
						</el-form-item>
						<el-form-item prop="date" label="日期" :rules="[{ required: true, message: '请输入日期', trigger: 'blur' }]">
							<el-date-picker type="date" placeholder="选择日期" v-model="check.date" style="width: 100%;"></el-date-picker>
						</el-form-item>
							<el-form-item label="采集失败数">
							<el-input v-model="check.fail"></el-input>
						</el-form-item>
					</el-form>
				</div>
				<div class="right">
					<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="总数" prop="total" :rules="[{ required: true, message: '请输入总数', trigger: 'blur' }]">
							<el-input v-model="check.total"></el-input>
						</el-form-item>
						<el-form-item label="采集成功数">
							<el-input v-model="check.success"></el-input>
						</el-form-item>
					</el-form>
				</div>
			</div>
			<div class="footer">
				<el-row>
					<el-button size="mini" @click="cancel">取消</el-button>
					<el-button size="mini" @click="reset('ruleForm')">重置</el-button>
					<el-button size="mini" type="primary" @click="save">保存</el-button>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
      return {
        ruleForm: {
          channel: '',
					date: '',
					total: '',
					success: '',
					fail: ''
        }
      };
    },
    methods: {
			cancel(){
				this.$store.commit("changeshow",false)
			},
			reset(formName){
				this.$refs[formName].resetFields();
			},
			save(){
				// window.console.log("ruleForm",this.ruleForm)
				let obj = {
					date: this.check.date,
					channel: this.check.channel,
					total: this.check.total,
					success: this.check.success,
					fail: this.check.fail
				}
				this.$store.commit("addToList",obj)
				this.$store.commit("changeshow",false)
			}
    },
  name: 'Modal',
  props: {

	},
	computed: {
		headTitle(){
			return this.$store.state.home.headTitle
		},
		check(){
			return this.$store.state.home.check
		}
	}
}
</script>

<style scoped>
	.modal{
		position:fixed;
		left:0;
		top:0;
		width:100%;
		height:100%;
		background:rgba(0,0,0,0.5);
	}
	.content{
		width: 650px;
		height: 320px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin: -160px 0 0 -325px;
		background-color: #fff;
	}
	.content .head{
		background-color: #4491E0;
		height: 32px;
		line-height: 32px;
		color: #fff;
		font-size: 16px;
	}
	.content .head span{
		float: left;
		margin-left: 10px;
	}
	.main{
		margin: 30px 20px 0 0;
		overflow: hidden;
	}
	.left{
		width: 50%;
		height: 200px;
		float: left;
	}
	.right{
		width: 50%;
		height: 200px;
		float: right;
	}
</style>

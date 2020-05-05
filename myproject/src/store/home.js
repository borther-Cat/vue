import get from '../api'
export default {
    state: {
				breadList: ['首页'],
				editableTabsValue: '0',
				editableTabs: [],
				tabIndex: 0,
				channel:  [],
				list: [],
				option: {},
				T_list: [],
				T_option: {},
				ishow: false,
				headTitle: "新增",
				check: {
					channel: '',
					date: '',
					fail: '',
					success: '',
					total: ''
				}
    },
    mutations: {
			changeBreadList(state,obj) {
				if(obj.id===1){
					state.breadList.splice(1,2)  
					state.breadList.push(obj.title)       
				}else{
					state.breadList.splice(2,1) 
					state.breadList.push(obj.title)
				}
			},
			removetab(state,targetName) {
				let tabs = state.editableTabs;
				let activeName = state.editableTabsValue;
				if (activeName === targetName) {
					tabs.forEach((tab, index) => {
						if (tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if (nextTab) {
								activeName = nextTab.name;
							}
						}
					});
				}
				state.editableTabsValue = activeName;
				state.editableTabs = tabs.filter(tab => tab.name !== targetName);
			},
			addTab(state,obj) {
				state.editableTabs.forEach((e,index)=>{
					if(e.title===obj.title){
						state.editableTabs.splice(index,1)
					}
				})
        let newTabName = ++state.tabIndex + '';
        state.editableTabs.push({
          title: obj.title,
					name: newTabName,
					// paneName: obj.id
        });
				state.editableTabsValue = newTabName;
				window.console.log("obj",newTabName)
			},
			changeChannel(state,arr){
				// state.channel[0]=['全部渠道']
				var tag = {};
				tag.children = [];
				tag.id = 0
				tag.label = '全部渠道'
				arr.forEach((ele,index)=>{
					var obj = {}
					obj.id = index+1;
					obj.label = ele;
					tag.children.push(obj)
				})
				state.channel= [tag]
			},
			changelist(state,Arr){
				state.list = Arr
				state.T_list = Arr
			},
			changeOption(state,obj){
				state.option = obj;
				state.T_option = obj
			},
			selectlist(state,option){
				state.list = state.T_list;
				let Arr = []
				window.console.log("o",option)
				option.forEach((el)=>{
					if(el.label != '全部渠道'){
						state.list.forEach((ele)=>{
							if(ele.channel === el.label){
								Arr.push(ele)
							}
						})
					}
				})
				state.list = Arr;
			},
			selectoption(state,option){
				state.option = state.T_option;
				let obj = state.option
				let arr = [];
				let Arr = [];
				option.forEach((el)=>{
					if(el.label != '全部渠道'){
						let {legend} = state.option;
						let {series} = state.option;
						let str = el.label.slice(2,3)
						legend.data.forEach((item)=>{
							if(item.lastIndexOf(str) != -1){
								arr.push(item);
							}
						})
						series.forEach((ele)=>{
							if(ele.name.lastIndexOf(str) != -1){
								Arr.push(ele);
							}
						})
						window.console.log("legend",legend.data,el.label.slice(2,3))
					}
				})
				obj.legend.data = arr;
				obj.series = Arr;
				state.option = obj
				window.console.log(obj)	
			},
			changeshow(state,obj){
				state.ishow = obj.val
				state.headTitle = obj.title
				state.check = obj.row
			},
			removeList(state,val){
				state.list.splice(val,1)
			},
			addToList(state,obj){
				state.list.push(obj)
			}
		},
		actions: {
			async getData(context,id){
				let {data} = await get(id)
				window.console.log(data)
				var chl=[];
				var ls = []
				for(var i=0;i<data.length-1;i++){	//加上echarts数据要减一
					chl.push(data[i].channel)
					data[i].detail.forEach(ele=>{
						ls.push(ele)
					})
				}
				window.console.log(ls)
				context.commit("changeChannel",chl)
				context.commit("changelist",ls)
				context.commit("changeOption",data[2])

			}
		}
}

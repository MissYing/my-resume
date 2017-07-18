<template>
	<div class="ying-mongoose">
	  	<el-table
		    :data="tableData"
		    border
		    style="width: 100%">
		    <el-table-column
		      	prop="name"
		      	label="姓名"
		      	width="120">
		    </el-table-column>
		    <el-table-column
		      	prop="phone"
		      	label="联系方式"
		      	width="150">
		    </el-table-column>
		    <el-table-column
		      	prop="email"
		      	label="邮箱"
		      	width="180">
		    </el-table-column>
		    <el-table-column
		      	prop="github"
		      	label="github地址"
		      	width="371">
		    </el-table-column>
		    <el-table-column
		    	fixed="right"
		      	label="操作"
		      	width="100">
		      	<template scope="scope">
		        	<el-button @click="handleClick" type="text" size="small">删除</el-button>
		        	<el-button type="text" size="small" @click="deleteRow(scope.$index, scope.row)">编辑</el-button>
		      	</template>
		    </el-table-column>
		</el-table>
	  	<!-- page -->
	  	<el-pagination
	    	layout="prev, pager, next"
	    	:total="20"
      		@current-change="handleCurrentChange">
	  	</el-pagination>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
        	id: '111',
			name: '李莹',
			phone: 15195601069,
			email: '2332893183@qq.com',
			github: 'https://coding.net/u/missYing/p/baseInfo/git'
        }, {
			name: '王小虎',
			phone: 15195601069,
			email: '2332893183@qq.com',
			github: 'github'
        }, {
			name: '王小虎',
			phone: 15195601069,
			email: '2332893183@qq.com',
			github: 'github'
        }, {
			name: '王小虎',
			phone: 15195601069,
			email: '2332893183@qq.com',
			github: 'github'
        }]
      }
    },
    methods: {
    	handleClick() {
	        console.log(1)
	    },
	    deleteRow(index, rows) {
	    	console.log(index)
	    	console.log(rows)
	        rows.splice(index, 1)
	    },
      	handleCurrentChange(val) {
      		console.log(val)
        	console.log(`当前页: ${val}`);
      	}
    }
  }
</script>

<style lang="scss">
	@import '../assets/css/style.scss';
	.ying-mongoose {
		.el-table {
			text-align: center;
			th {
				text-align: center;
			}
		}
		.el-pagination {
			text-align: center;
			margin: 1rem 0 0;
			.el-pager {
				li.active {
					background-color: #42b983;
					border-color: #42b983;
				}
				&:hover {
					color: #42b983;
				}
			}
		}
	}
</style>
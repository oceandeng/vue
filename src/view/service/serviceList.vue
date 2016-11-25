<template>
	<div class="serviceList">
		<el-table :data="tableData" border style="width: 100%">
		    <el-table-column inline-template label="服务名称" width="180">
		      <div>{{ row.name }}</div>
		    </el-table-column>
		    <el-table-column inline-template label="当前状态" width="720">
				<div>{{ row.detail }}</div>
		    </el-table-column>
		    <el-table-column inline-template label="服务状态" width="120">
		    	<div v-bind:class="[row.finish ? 'serviceList-complete' : 'serviceList-production']">{{ row.status }}</div>
		    </el-table-column>
		    <el-table-column :context="_self" inline-template label="操作" width="120">
		    	<router-link v-bind:class="[row.designerId == ''?'disabled':'']" :to="{ name: 'ServiceView', params:{orderId:row.orderId,designerId:row.designerId || 'null'}}" class="view-button">查看</router-link>
		    </el-table-column>
	    </el-table>
	</div>
</template>
<style type="text/css" media="screen">
	.serviceList{
		width: 1142px;
		margin: auto;
		padding: 20px 0;
	}
	.view-button{
		color: #0085d0;
		font-size: 12px;
		border: 0;
		background: none;
		text-decoration: none;
	}
	.serviceList-production{
		color: #f1b70b;
	}
	.serviceList-complete{
		color: #1ab52d;
	}
	.disabled{
		outline:0 none; 
		cursor:default!important; 
		opacity:1; 
		filer:alpha(opacity=100); 
		pointer-events:none; 
		color: #d7d7d7;
	}
</style>
<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    mounted: function() {   
	    this.$api('service.list').then(function(response){
	        this.tableData = response.body.data.list;
	    })
    }
  }
</script>

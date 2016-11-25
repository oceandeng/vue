<template>
    <div class="table-con">      
        <el-table :data="tableData" style="width: 100%;overflow: hidden;" :border="false" :show-header="false">
            <el-table-column inline-template width="740">
                <div align="left">
                    <figure class="good-info clearfix">
                        <img src="../../../temp/list-img.jpg" alt="">
                        <good-detail></good-detail>
                    </figure>
                </div>
            </el-table-column>
            <el-table-column inline-template width="200">
                <div><span class="price">{{ row.name }}</span></div>
            </el-table-column>
            <el-table-column width="200" inline-template>
                <div>
                    <el-cus-button color="#ff5000" @click="buyNow($index, row)">立即购买</el-cus-button>
                    <el-cus-button color="#ff9402" @click="addToCart($index, row)">加入购物车</el-cus-button>
                    <!-- <el-button size="small" @click="buyNow($index, row)">立即购买</el-button> -->
                    <!-- <el-button size="small" type="danger" @click="addToCart($index, row)">加入购物车</el-button> -->
                </div>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import goodDetail from './private-component/goodInfo';
    import elCusButton from '../../app/component/elCusButton';

    export default {
        data() {
            return {
                tableData: [{
                date: 'H5企业秀',
                name: '¥1200.00',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '¥1200.00',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '¥1200.00',
                address: '上海市普陀区金沙江路 1519 弄'
            }
            ]}
        },
        components: {
            goodDetail,
            elCusButton
        },
        methods: {
            buyNow(index, row) {
                console.log(index, row);
            },
            addToCart(index, row) {
                console.log(index, row);
            }
        }

    }
</script>
<style scoped>
    .table-con{
        padding: 0 20px;
        
    }
    .el-table, .el-table:before, .el-table:after{
        border: none !important;
        position: static;
    }

    .good-info{
        padding: 20px 0;
    }
    .good-info img{
        float: left;
        margin: 0 20px 0 0;
    }


    
</style>
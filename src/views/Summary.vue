<template>
    <div class="about">
        <div class="content">
            <div id="chart" class="content-left" style="width: 30%; height: 400px;">
            </div>

            <div style="width: 68%; margin-left: 20px;">
                <div style="flex align-items: center; margin-top:20px;margin-bottom:20px;">
                    <span>Time Range*</span>
                    <el-input placeholder="Do not enter any CID" size="small" style="width: 200px; margin-left: 10px;"
                        v-model="input2" suffix-icon="el-icon-arrow-down">
                    </el-input>
                    <el-button size="small" style="margin-left: 10px; background-color:#615f5f; color: #fff;"
                        icon="el-icon-refresh">
                    </el-button>
                </div>

                <ag-grid-vue style="height: 400px; width: 100%;" class="m-agTableContent ag-theme-balham"
                    :grid-options="agGrid2.gridOptions" :column-defs="agGrid2.columnDefs"
                    :row-data="agGrid2.rowData"></ag-grid-vue>
            </div>
        </div>

    </div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import * as echarts from 'echarts';
export default {
    name: "Summary",
    components: {},
    data() {
        return {
            input2: 'Last 7 days',
            bar: {
                title: {
                    text: "ECharts 入门示例"
                },
                tooltip: {},
                legend: {
                    data: ["销量"]
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            },
            agGrid2: {
                gridOptions: {
                    // 分页
                    pagination: true, // 【重要】分页已启用，前端分页。
                    paginationPageSize: 50,// 【重要】数。每页加载多少行。默认值= 100.如果paginationAutoPageSize 指定，则忽略此属性。请参阅自定义分页示例。
                    paginationAutoPageSize: true, // 【重要】True - 每页加载的行数由ag-Grid自动调整，因此每个页面显示足够的行以填充为网格指定的区域。是以表格高度为限制，此属性设定之后paginationPageSize:50失效
                    // suppressPaginationPanel: true, // True - 开箱即用的ag-Grid导航控件是隐藏的。如果pagination=true您想要提供自己的分页控件，这将非常有用 。 False（默认） - 当pagination=true它自动在底部显示必要的控件，以便用户可以浏览不同的页面。请参见示例自定义分页控件。
                    rowHeight: 34, // 【重要】默认行高度（以像素为单位）。默认值为30。
                    animateRows: true, // 【重要】设置为true以启用行动画。 那个数据刷新的蓝色行底色，适用于数据刷新的
                    rowStyle: {
                        'font-weight': '400',
                        color: '#999',
                        'font-size': '14px'
                    }, // 【重要】给出特定行的样式。请参见行样式。
                },
                columnDefs: null,
                rowData: null,
            },
        }
    },
    components: {
        AgGridVue,
    },
    beforeMount() {
        this.initAgGrid();

    },
    mounted() {

        this.initChart()
    },
    methods: {
        initAgGrid() {
            // 配置列属性
            this.agGrid2.columnDefs = [
                {
                    field: "name", // 对应数据字段
                    headerName: "姓名2", // 标题名

                },
                {
                    field: "studentID",
                    headerName: "学号",

                },
                {
                    field: "grade",
                    headerName: "分数",

                },
            ];
            // 配置数据
            this.agGrid2.rowData = [
                {
                    name: "小红2222",
                    studentID: "20210001",
                    grade: 99,
                },
                {
                    name: "小刚",
                    studentID: "20210002",
                    grade: 78,
                },
                {
                    name: "小铭",
                    studentID: "20210003",
                    grade: 100,
                },
                {
                    name: "小果",
                    studentID: "20210004",
                    grade: 67,
                },
            ];
        },
        initChart() {
            const chart = echarts.init(document.getElementById('chart'))

            const option = {
                legend: {
                    orient: "vertical",
                    left: "left",
                    textStyle: {
                        //图例中文字的样式
                        fontSize: 12,
                    },
                },
                series: [
                    {
                        type: "pie",
                        radius: ['40%','70%'],
                        center:['50%','50%'],
                        data: this.optionData,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                        labelLine: {
                            show: false, //隐藏指示线
                        },
                        label: {
                            show: false, //隐藏标示文字
                        },
                        data: [
                            { value: 31, name: 'Done', itemStyle: { color: '#91cd77' } },
                            { value: 275, name: 'Failed', itemStyle: { color: '#ef6567' } },
                            { value: 67, name: 'Started', itemStyle: { color: '#f9c956' } },
                            { value: 0, name: '口碑介绍', itemStyle: { color: '#75bedc' } },
                            { value: 0, name: '搜索引擎', itemStyle: { color: '#fc8251' } },
                            { value: 0, name: '微信朋友圈', itemStyle: { color: '#5470c6' } },
                            { value: 0, name: '口碑介绍', itemStyle: { color: '#75bedc' } },
                            { value: 0, name: '搜索引擎', itemStyle: { color: '#fc8251' } },
                            { value: 0, name: '微信朋友圈', itemStyle: { color: '#5470c6' } },
                        ]
                    },
                ],
            }

            chart.setOption(option)
        }

    },
};
</script>
  
<style>
.head {
    display: flex;
    margin: 18px 0;
}

.content {
    display: flex;
}

.my-chart {
    width: 400px;
    height: 400px;
}
</style>
  
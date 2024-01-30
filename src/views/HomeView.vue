<template>
  <div class="about">
    <div class="head">
      <el-input
        placeholder="Search Do not enter any CID"
        suffix-icon="el-icon-search"
        style="width: 800px;"
        v-model="input1">  
      </el-input>
      <el-button icon="el-icon-refresh">
      </el-button>
    </div>
    <ag-grid-vue style="height: 400px; width: 100%;" class="m-agTableContent ag-theme-balham"
      :grid-options="agGrid1.gridOptions" :column-defs="agGrid1.columnDefs" :row-data="agGrid1.rowData"></ag-grid-vue>
  </div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
export default {
  name: "Schedule",
  components: {},
  data() {
    return {
      agGrid1: {
        gridOptions: {
          // 分页
          pagination: true, // 【重要】分页已启用，前端分页。
          paginationPageSize:50 ,// 【重要】数。每页加载多少行。默认值= 100.如果paginationAutoPageSize 指定，则忽略此属性。请参阅自定义分页示例。
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
  methods: {
    initAgGrid() {
      // 配置列属性
      this.agGrid1.columnDefs = [
        {
          field: "name", // 对应数据字段
          headerName: "姓名", // 标题名
          
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
      this.agGrid1.rowData = [
        {
          name: "小红",
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
  },
};
</script>

<style>
.head {
  display: flex;
  margin: 18px 0;
}
</style>

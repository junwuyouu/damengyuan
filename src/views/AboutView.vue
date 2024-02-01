<template>
  <div class="about">
    <div class="content">
      <div class="content-left" style="width: 40%;">
        <div class="head" style="flex; align-items: center;">
          <span> Search results</span>
          <el-input placeholder="Do not enter any CID" size="small" style="width: 300px; margin-left: 10px;"
            v-model="input1">
          </el-input>
        </div>
        <ag-grid-vue style="height: 400px; width: 100%;" class="m-agTableContent ag-theme-balham"
          :grid-options="agGrid1.gridOptions" :column-defs="agGrid1.columnDefs" :row-data="agGrid1.rowData"></ag-grid-vue>
      </div>

      <div style="width: 58%; margin-left: 20px;">
        <div style="margin-top: 5px;">job Name</div>
        <div style="flex align-items: center; margin-top:20px;margin-bottom:20px;">
          <span>Time Range*</span>
          <el-input placeholder="Do not enter any CID" size="small" style="width: 200px; margin-left: 10px;"
            v-model="input2" suffix-icon="el-icon-arrow-down">
          </el-input>
          <el-button size="small" style="margin-left: 10px; background-color:#615f5f; color: #fff;" icon="el-icon-refresh"
            @click="drawer = true">
          </el-button>
        </div>

        <el-button size="small" style="background-color:#615f5f; color: #fff;">
          Bulk Run
        </el-button>
        <ag-grid-vue style="height: 400px; width: 100%;" class="m-agTableContent ag-theme-balham"
          :grid-options="agGrid2.gridOptions" :column-defs="agGrid2.columnDefs" :row-data="agGrid2.rowData"></ag-grid-vue>
      </div>
    </div>

    <el-drawer title="" :visible.sync="drawer" direction="rtl" size="50%">
      <el-collapse v-model="activeNames" class="collapse">
        <el-collapse-item title="  job History" name="1">
          <ag-grid-vue style="height: 400px; width: calc(100% - 20px); margin: 10px;" class="m-agTableContent ag-theme-balham"
            :grid-options="agGrid3.gridOptions" :column-defs="agGrid3.columnDefs"
            :row-data="agGrid3.rowData"></ag-grid-vue>
        </el-collapse-item>
      </el-collapse>
    </el-drawer>

  </div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
export default {
  name: "Schedule",
  components: {},
  data() {
    return {
      input1: '',
      input2: 'Last 7 days',
      agGrid1: {
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
      agGrid3: {
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
      drawer: false,
      activeNames: ['1']
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
      // 配置列属性
      this.agGrid3.columnDefs = [
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
      this.agGrid3.rowData = [
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

.collapse {
  margin: 0 20px;
  border: 1px solid #b8b8b8;
}
</style>

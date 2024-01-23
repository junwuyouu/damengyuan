<template>
  <div class="home">
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
  
    <el-table
    :data="tableData"
    max-height="1000"
    border
    style="width: 100%">
    <el-table-column
      prop="family"
      label="Job Family"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Job Names"
      width="480">
    </el-table-column>
    <el-table-column
      prop="jState"
      label="Job State">
    </el-table-column>
    <el-table-column
      prop="tState"
      label="Trigger State">
    </el-table-column>
    <el-table-column
      prop="rurrin"
      label="Rurrin">
    </el-table-column>
    <el-table-column
      prop="jobGroup"
      label="Job Group">
    </el-table-column>
    <el-table-column
      prop="jobOwner"
      label="Job Owner">
    </el-table-column>
    <el-table-column
      prop="tags"
      label="Tags">
    </el-table-column>
    <el-table-column
      prop="jobTypes"
      label="Job Types">
    </el-table-column>
    <el-table-column
      prop="sourceTime"
      label="Source Time">
    </el-table-column>
    <el-table-column
      prop="updateTime"
      label="Update Time">
    </el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data(){
    return{
      input1:'',
      currentPage: 4,
      tableData: [{
          updateTime: '2016-05-03',
          sourceTime: '2016-05-03',
          family: 'RATES',
          name: 'AquaCompareAyuaVersesBroil-OR01-OE10-IR-RISK-RATES-OPTIONs',
          jState:'ACTIVE',
          tState:'ACTIVE',
          jobGroup:'bigdate',
          jobOwner:'aiex ong@ubs.com',
          tags:'',
          jobTypes:'AquaCompare'
      },
      {
          updateTime: '2016-05-03',
          sourceTime: '2016-05-03',
          family: 'RATES',
          name: 'AquaCompareAyuaVersesBroil-OR01-OE10-IR-RISK-RATES-OPTIONs',
          jState:'ACTIVE',
          tState:'ACTIVE',
          jobGroup:'bigdate',
          jobOwner:'aiex ong@ubs.com',
          tags:'',
          jobTypes:'AquaCompare'
      },{
          updateTime: '2016-05-03',
          sourceTime: '2016-05-03',
          family: 'RATES',
          name: 'AquaCompareAyuaVersesBroil-OR01-OE10-IR-RISK-RATES-OPTIONs',
          jState:'ACTIVE',
          tState:'ACTIVE',
          jobGroup:'bigdate',
          jobOwner:'aiex ong@ubs.com',
          tags:'',
          jobTypes:'AquaCompare'
      },
      ]
    }
  }
};
</script>

<style>
.head{
  display: flex;
  margin: 18px 0;
}
</style>

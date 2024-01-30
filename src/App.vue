<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(item, index) in menuData"
        :key="index"
        :index="index"
        @click="checkMenu(item, index)"
        >{{ item.menuName }}</el-menu-item
      >
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: '0',
      menuData: [
        { menuName: "Catalog", menuRouter: "/" },
        { menuName: "Schedule", menuRouter: "/Schedule" },
        { menuName: "Work", menuRouter: "/work" },
      ],
    };
  },
  components: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    checkMenu(item, index) {
      console.log(this.$router,item, index);
      this.$router.push({
        path:`${item.menuRouter}`
      })
    },
  },
};
</script>
<style>
.app{
  padding: 12px;
}
</style>

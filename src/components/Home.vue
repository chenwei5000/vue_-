<template>
  <el-container>
    <el-header>
      电影新闻频道
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="/movie"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          :router="true"
        >
          <el-menu-item index="/movie">电影推荐</el-menu-item>
          <el-menu-item index="/article">最新新闻</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}

.el-header {
  background: #3c3c3c;
  line-height: 60px;
  color: #fff;
  font-size: 24px;
}

.el-aside {
  background-color: #f4f4f4;
}
</style>

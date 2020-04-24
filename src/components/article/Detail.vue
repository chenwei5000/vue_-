<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
      <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <h3>{{ dataInfo.title }}</h3>
      <img :src="dataInfo.src" />
      <p>{{ dataInfo.content }}</p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataInfo: []
    }
  },
  created() {
    fetch('/data/article.json')
      .then(res => {
        return res.json()
      })
      .then(res => {
        const id = this.$route.params.id - 0
        const info = res.filter(item => item.id === id)
        this.dataInfo = info[0]
        console.log(this.dataInfo)
      })
  }
}
</script>

<style lang="less" scoped>
.el-card {
  text-align: center;
  h3 {
    margin: 20px 0;
  }
  img {
    width: 300px;
  }
  p {
    margin-top: 20px;
    line-height: 26px;
    text-indent: 2em;
    text-align: left;
  }
}
</style>

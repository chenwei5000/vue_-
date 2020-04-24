<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>电影列表</el-breadcrumb-item>
      <el-breadcrumb-item>电影详情</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <div class="block">
        <div class="left">
          <img :src="dataInfo.src" />
        </div>
        <div class="right">
          <h3 class="demonstration">
            <strong>片名:</strong>
            {{ dataInfo.name }}
          </h3>
          <p>
            <strong>主演:</strong>
            {{ dataInfo.actors }}
          </p>
          <p>
            <strong>类型:</strong>
            {{ dataInfo.type }}
          </p>
          <p>
            <strong>地区:</strong>
            {{ dataInfo.country }}
          </p>
          <p>
            <strong>上映日期:</strong>
            {{ dataInfo.time }}
          </p>
          <p>
            <strong>剧情简介:</strong>
            {{ dataInfo.description }}
          </p>
        </div>
      </div>
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
    fetch('/data/movie.json')
      .then(res => {
        return res.json()
      })
      .then(res => {
        const id = this.$route.params.id
        const info = res.filter(item => item.id === id)
        this.dataInfo = info[0]
      })
  }
}
</script>

<style lang="less" scoped>
.block {
  display: flex;
  .right {
    margin-left: 20px;
    strong {
      margin-right: 10px;
    }
    p {
      margin: 10px 0;
      line-height: 26px;
    }
  }
}
</style>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <ul>
        <li v-for="item in articleList" :key="item.id" @click="toDetail(item.id)">
          <el-image :src="item.src"></el-image>
          <div>
            <h3 class="demonstration">{{ item.title }}</h3>
            <p>{{ item.content.split(0, 100) }}...</p>
          </div>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: []
    }
  },
  created() {
    fetch('/data/article.json')
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.articleList = res
      })
  },
  methods: {
    toDetail(id) {
      this.$router.push('/adetail/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.el-image {
  width: 270px;
  margin-bottom: 10px;
}

ul {
  li {
    // display: flex;
    overflow: hidden;
    cursor: pointer;
    margin: 20px;
    .el-image {
      float: left;
      width: 200px;
    }
    div {
      float: left;
      margin-left: 20px;
      width: 60%;
      p {
        text-indent: 2em;
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
}
</style>

<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>电影列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <ul>
        <li v-for="item in movieList" :key="item.id" @click="toDetail(item.id)">
          <el-image :src="item.src"></el-image>
          <h3 class="demonstration">{{ item.name }}</h3>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieList: []
    }
  },
  created() {
    fetch('/data/movie.json')
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.movieList = res
      })
  },
  methods: {
    toDetail(id) {
      this.$router.push('/mdetail/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.el-image {
  width: 180px;
  margin-bottom: 10px;
}

ul {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  :nth-of-type(2) {
    margin-left: 20px;
  }
  li {
    cursor: pointer;
  }
}
</style>

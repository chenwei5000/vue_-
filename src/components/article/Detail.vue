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

      <!-- 展示封装的评论组件 -->
      <my-com :msg="dataInfo.commons" @addData="addCommont"></my-com>
    </el-card>
  </div>
</template>

<script>
import Commons from '../pottsBox/Commons.vue'

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
      })
  },
  methods: {
    addCommont(o) {
      // 正常来讲，这里只需要发送一个post请求到后端即可
      console.log(o)
      this.dataInfo.commons.unshift({
        id: this.dataInfo.commons.length + 1,
        name: o.userName,
        text: o.content,
        time: '2020-04-23'
      })
    }
  },
  components: {
    'my-com': Commons
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

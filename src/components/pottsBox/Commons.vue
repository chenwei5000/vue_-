<template>
  <div>
    <h3 class="pinglun">显示评论</h3>
    <ul class="show-commons">
      <li v-for="item in msg" :key="item.id">
        <h4>{{ item.name }} 发表于 {{ item.time }}</h4>
        <p>{{ item.text }}</p>
      </li>
    </ul>

    <h3 class="pinglun">发表评论</h3>
    <el-form
      :model="formData"
      :rules="formRuls"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="评论人" label-width="100px" prop="userName">
        <el-input v-model="formData.userName"></el-input>
      </el-form-item>
      <el-form-item label="内容" label-width="100px" prop="content">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="formData.content"
          maxlength="30"
          show-word-limit
        ></el-input>
      </el-form-item>
      <div class="btn">
        <el-button type="success" @click="addCommons">发表评论</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        userName: '',
        content: ''
      },
      formRuls: {
        userName: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入评论信息', trigger: 'blur' },
          { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  props: ['msg'],
  methods: {
    addCommons() {
      // 如果完成了表单的校验，则可以触发父组件的事件
      this.$refs.ruleForm.validate(valid => {
        if (!valid) {
          alert('请检查表单的内容是否填写正确')
          return false
        }

        //  触发父组件的自定义方法，添加评论内容
        this.$emit('addData', this.formData)

        this.$refs.ruleForm.resetFields()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.pinglun {
  background-color: #333;
  color: #fff;
  padding: 10px;
  margin-top: 40px;
  text-align: left;
}

.show-commons {
  text-align: left;
  li {
    text-indent: 2em;
    h4 {
      margin: 10px 0;
      border-top: 1px dashed #ccc;
      padding-top: 10px;
    }
    p {
      text-indent: 4em;
    }
  }
}
.el-form {
  margin-top: 20px;
}

.btn {
  display: flex;
  justify-content: flex-end;
  width: 550px;
}
</style>

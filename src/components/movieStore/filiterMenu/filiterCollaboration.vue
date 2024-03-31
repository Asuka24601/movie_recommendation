<template>
  <el-form
           :model="form"
           label-width="auto"
           style="max-width: 95%;"
           ref="formRef">
    <h1 style="text-align: start;">
      {{ '合作：' }}
      <span style="font-size: 1rem;font-weight: normal;">
        {{ '多位演员合作的电影' }}
      </span>
    </h1>

    <el-form-item :label="'名称' + (index + 1)"
                  v-for="(value, index) in form.name"
                  :key="index">
      <el-input v-model="form.name[index]" />
      <el-button @click="removeName(index)"
                 v-if="index > 1"
                 style="margin-top: .5rem;">{{ '删除' }}</el-button>
    </el-form-item>

    <el-form-item>
      <div style="display: flex; justify-content: center;width: 100%;">
        <el-button @click="addName">{{ '添加姓名' }}</el-button>
        <el-button type="primary" @click="onSubmit">{{ '提交' }}</el-button>
        <el-button @click="onReset">{{ '清除' }}</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="js" setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus';
import MF from '@/js/movieFiliter';

// do not use same name with ref
const form = reactive({
  name: [
    '',
    ''
  ]
})

const addName = () => {
  if (form.name.length >= 5) {
    ElMessage({
      message: '最多添加3个',
      type: 'warning'
    })
    return
  }
  else form.name.push('')
}

const removeName = (idx) => {
  if (idx > 1) {
    form.name.splice(idx, 1)
  }
}

const onSubmit = () => {
  // do something
  console.log('submit!')

  MF.set_form(form)

  MF.change_drawerFiliterOpen()
}

const onReset = () => {
  console.log('reset!');

  form.name = [
    '',
    ''
  ]

  MF.clean_all()
}
</script>
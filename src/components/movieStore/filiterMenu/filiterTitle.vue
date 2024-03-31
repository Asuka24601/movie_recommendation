<template>
  <el-form :model="form" label-width="auto" style="max-width: 95%;">
    <el-form-item :label="'名称'">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item :label="'国家或地区'">
      <foreignAreaVue v-model="form.county" />
    </el-form-item>
    <el-form-item :label="'日期范围'">
      <el-col :span="11">
        <el-date-picker
                        v-model="form.date_start"
                        type="date"
                        :placeholder="'起始日期'"
                        style="width: 100%" />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-date-picker
                        v-model="form.date_end"
                        type="date"
                        :placeholder="'结束日期'"
                        style="width: 100%" />
      </el-col>
    </el-form-item>
    <el-form-item label="评分范围">
      <el-slider v-model="form.rating"
                 :range="true"
                 :show-stops="true"
                 :step="0.5"
                 :max="10"
                 :min="0" />
    </el-form-item>
    <el-form-item label="题材">
      <genreVue v-model="form.genre" />
    </el-form-item>
    <el-form-item label="奖项/名誉">
      <awardVue v-model="form.awards" />
    </el-form-item>
    <el-form-item label="关键词">
      <el-input v-model="form.keyword" type="textarea" :placeholder="'关键词之间用空格分开'" />
    </el-form-item>
    <el-form-item>
      <div style="display: flex; justify-content: center;width: 100%;">
        <el-button type="primary" @click="onSubmit">{{ '提交' }}</el-button>
        <el-button @click="onReset">{{ '清除' }}</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="js" setup>
import { reactive } from 'vue'
import foreignAreaVue from './foreignArea.vue';
import genreVue from './genre.vue';
import awardVue from './award.vue';
import { checkFullSpan } from '@/js/tool';

import MF from '@/js/movieFiliter';

// do not use same name with ref
const form = reactive({
  //1
  name: '',
  //2
  date_start: '',
  //3
  date_end: '',
  //6
  genre: [],
  //7
  awards: [],
  //4
  county: [],
  //5
  rating: [0, 10],
  //8
  keyword: '',
})

const onSubmit = () => {
  // do something
  console.log('submit!')

  if(!checkFullSpan(form.keyword)) {
    const pure = form.keyword.trim().split(/\s+/)
    form.keyword = pure
  }

  MF.set_form(form)

  MF.change_drawerFiliterOpen()
}

const onReset = () => {
  console.log('reset!');

  // reset form
  form.name ='';
  form.date_start ='';
  form.date_end ='';
  form.genre =[];
  form.awards =[];
  form.county =[];
  form.rating =[0, 10];
  form.keyword =[];

  MF.clean_all()
}
</script>
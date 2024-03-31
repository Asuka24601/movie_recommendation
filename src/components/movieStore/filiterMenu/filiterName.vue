<template>
  <el-form :model="form" label-width="auto" style="max-width: 95%;">
    <el-form-item :label="'名称'">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item :label="'出生日期'">
      <el-col :span="11">
        <el-date-picker
                        v-model="form.birth_date_start"
                        type="date"
                        :placeholder="'起始日期'"
                        style="width: 100%" />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-date-picker
                        v-model="form.birth_date_end"
                        type="date"
                        :placeholder="'结束日期'"
                        style="width: 100%" />
      </el-col>
    </el-form-item>
    <el-form-item :label="'死亡日期'">
      <el-col :span="11">
        <el-date-picker
                        v-model="form.death_date_start"
                        type="date"
                        :placeholder="'起始日期'"
                        style="width: 100%" />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-date-picker
                        v-model="form.death_date_end"
                        type="date"
                        :placeholder="'结束日期'"
                        style="width: 100%" />
      </el-col>
    </el-form-item>
    <el-form-item :label="'国家或地区'">
      <foreignAreaVue v-model="form.county" />
    </el-form-item>
    <el-form-item :label="'性别'">
      <el-checkbox-group v-model="form.gender">
        <el-checkbox label="男" value="male"/>
        <el-checkbox label="女" value="female"/>
        <el-checkbox label="其他" value="other"/>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item :label="'奖项/名誉'">
      <awardVue v-model="form.awards" />
    </el-form-item>
    <el-form-item :label="'身份'">
      <el-checkbox-group v-model="form.identity">
        <el-checkbox label="演员" value="actor"/>
        <el-checkbox label="导演" value="director"/>
        <el-checkbox label="编剧" value="writer"/>
        <el-checkbox label="制片人" value="producer"/>
        <el-checkbox label="其他" value="other"/>
      </el-checkbox-group>
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
import awardVue from './personAward.vue';
import MF from '@/js/movieFiliter';

//table form for actor name or director name
const form = reactive( {
  //personal name
  name: '',
  //birth date start
  birth_date_start: '',
  //birth date end
  birth_date_end: '',
  //death date start
  death_date_start: '',
  //death date end
  death_date_end: '',
  //birth place
  county: [],
  //person gender
  gender:[],
  //person awards
  awards: [],
  //person identity(Actor, Director, etc.)
  identity: [],
})

const onSubmit = () => {
  // do something
  console.log('submit!')

  MF.set_form(form)

  MF.change_drawerFiliterOpen()
}

const onReset = () => {
  console.log('reset!');

  // reset form
  form.name = '';
  form.birth_date_start = '';
  form.birth_date_end = '';
  form.death_date_start = '';
  form.death_date_end = '';
  form.county = [];
  form.awards = [];
  form.gender = [];
  form.identity = [];

  MF.clean_all();
}
</script>
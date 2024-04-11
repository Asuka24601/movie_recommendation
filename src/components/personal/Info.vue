<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <div>
    <el-card>
      <el-descriptions class="margin-top" title="简介" :column="2" border>
        <template #extra>
          <el-button type="primary" v-if="$route.params.id == $store.state.user_info.user_id"
                     size="small">操作</el-button>
        </template>
        <el-descriptions-item>
          <template #label>
            <el-icon>
              <Picture />
            </el-icon>
            头像
          </template>
          <el-avatar :src="avatar" alt="" />
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <el-icon>
              <User />
            </el-icon>
            用户ID
          </template>
          {{ user_id }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <el-icon>
              <EditPen />
            </el-icon>
            昵称
          </template>
          {{ name }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <el-icon>
              <Odometer />
            </el-icon>
            出生日期
          </template>
          {{ birthday }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <el-icon>
              <Male v-if="gender===0"/>
              <Female v-else/>
            </el-icon>
            性别
          </template>
          <el-tag size="small">{{ gender===0?'男':'女' }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <el-icon>
              <Message />
            </el-icon>
            邮箱Email
          </template>
          {{ email }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <el-icon>
              <Iphone />
            </el-icon>
            手机号码
          </template>
          {{ phone }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template #label>
            <el-icon>
              <Postcard />
            </el-icon>
            个性签名
          </template>
          {{ description }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <el-icon>
              <Clock />
            </el-icon>
            注册日期
          </template>
          {{ createTime }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script>
import { userInfo } from "@/js/api/user.js";
export default {
  name: "InfoVue",
  data() {
    return {
      avatar: String,
      user_id: String,
      birthday: Number,
      email: String,
      phone: String,
      createTime: String,
      name: String,
      gender: String,
      description: String,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      userInfo(this.$route.params.id)
        .then((res) => {
          this.avatar = res.avatar;
          this.user_id = res.user_id;
          this.birthday = '2012-12-31'
          this.email = 'default@example.com'
          this.phone = '1008611';
          this.createTime = res.createTime;
          this.name = res.name;
          this.gender = res.gender;
          this.description = res.description;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.img {
  width: 80px;
  height: 80px;
}
</style>

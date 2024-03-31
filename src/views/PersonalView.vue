<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <div>
    <div class="PersonTop">
      <div class="PersonTop_img">
        <!-- <img v-image-preview :src="avatar" /> -->
        <el-avatar :src="avatar" shape="square" size="large"></el-avatar>

        <div class="user_text">
          <div class="user_name">
            <span> {{ name }} </span>
          </div>
          <div class="user_description">
            <span> {{ description }}</span>
          </div>
          <div class="user_anniu">
            <el-button
                       class="el-icon-edit"
                       v-if="this.$store.getters.get_user_info_login"
                       type="primary"
                       size="medium"
                       plain
                       @click="edit">编辑</el-button>
          </div>
        </div>
      </div>

      <div class="user_num">
        <div style="cursor: pointer" @click="myComment">
          <div class="num_number">{{ comment_count }}</div>
          <span class="num_text">评论</span>
        </div>
        <div style="cursor: pointer" @click="myCollection">
          <div class="num_number">{{ collection_count }}</div>
          <span class="num_text">收集</span>
        </div>
        <div style="cursor: pointer" @click="myLike">
          <div class="num_number">{{ likelist_count }}</div>
          <span class="num_text">喜欢</span>
        </div>
      </div>
    </div>

    <div class="person_body">
      <div class="person_body_left">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <span class="person_body_list" style="border-bottom: none">个人中心</span>
          </div>

          <el-menu
                   router
                   active-text-color="#00c3ff"
                   class="el-menu-vertical-demo">
            <el-menu-item
                          index="info"
                          :route="{ name: 'info', params: $route.params.id }">
              <!-- <i class="el-icon-user"></i> -->
              <el-icon>
                <User />
              </el-icon>
              <span slot="title">个人简介</span>
            </el-menu-item>
            <el-menu-item
                          index="comment"
                          :route="{ name: 'comment', params: $route.params.id }">
              <el-icon><ChatDotSquare /></el-icon>
              <span slot="title">评论</span>
            </el-menu-item>
            <el-menu-item
                          index="collection"
                          :route="{ name: 'collection', params: $route.params.id }">
              <el-icon><EditPen /></el-icon>
              <span slot="title">收集</span>
            </el-menu-item>
            <el-menu-item
                          index="like"
                          :route="{ name: 'like', params: $route.params.id }">
              <el-icon><Star /></el-icon>
              <span slot="title">喜欢</span>
            </el-menu-item>
            <el-menu-item
                          index="recent"
                          :route="{ name: 'recent', params: $route.params.id }">
              <el-icon><Clock /></el-icon>
              <span slot="title">最近</span>
            </el-menu-item>
          </el-menu>
        </el-card>
      </div>
      <div class="person_body_right">
        <router-view></router-view>
      </div>
    </div>
    <PersonalDiaVue ref="dia" @flesh="reload" />
  </div>
</template>

<script>
import { userInfo } from "@/js/api/user";
import { commentCount } from "@/js/api/comment";
import { collectionCount } from "@/js/api/collection";
import { likeCount } from "@/js/api/like";

import PersonalDiaVue from "@/components/personal/PersonalDia.vue";

export default {
  components: { PersonalDiaVue },
  name: "PersonalView",
  inject: ["reload"],
  data() {
    return {
      avatar: "",
      name: "",
      user_type: 1,
      user_id: 0,
      description: "",
      email: "",
      gender: 0,
      phone: "",
      createTime: "",
      lastLogin: "",
      labels: "",

      comment_count: "",
      collection_count: "",
      likelist_count: "",

      commnetlist: [],
      collectionlist: [],
      likelist: [],
    };
  },
  mounted() {
    this.load();
  },
  watch: {
    $route(to, from) {
      if (from);
      if (to.path == `/personal/${this.$store.state.user_info.user_id}`) {
        this.reload();
      } else if (to.path == `/personal/${this.$route.params.id}`) {
        this.reload();
      }
    },
  },
  methods: {
    load() {
      userInfo(this.$route.params.id)
        .then((res) => {
          // console.log(res);
          this.avatar = res.avatar;
          this.name = res.name;
          this.user_type = res.user_type;
          this.user_id = res.user_id;
          this.description = res.description;
          this.email = res.email;
          this.phone = res.phone;
          this.gender = res.gender;
          this.createTime = res.createTime;
          this.lastLogin = res.lastLogin;
          this.labels = res.labels;
        })
        .catch((err) => {
          console.log(err);
        });

      commentCount(this.$store.state.user_info.user_id)
        .then((res) => {
          this.comment_count = res;
        })
        .catch((err) => {
          console.log(err);
        });

      likeCount(this.$route.params.id)
        .then((res) => {
          this.likelist_count = res;
        })
        .catch((err) => {
          console.log(err);
        });

      collectionCount(this.$route.params.id)
        .then((res) => {
          this.collection_count = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    myComment() {
      this.$router.push({
        path: `/personal/comment/${this.$route.params.id}`,
      });
    },
    myCollection() {
      this.$router.push({
        path: `/personal/collection/${this.$route.params.id}`,
      });
    },
    myLike() {
      this.$router.push({
        path: `/personal/like/${this.$route.params.id}`,
      });
    },
    edit() {
      this.$refs.dia.open();
    },
  },
};
</script>

<style scoped>
.me-video-player {
  background-color: transparent;
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  position: fixed;
  left: 0;
  z-index: 0;
  top: 0;
}

.PersonTop {
  padding-top: 20px;
  margin-top: 30px;
  display: flex;
  border-radius: 5px;
  justify-content: space-around;
}

.PersonTop_img {
  margin-right: 24px;
  margin-left: 20px;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
}

.PersonTop_img>* {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.user_text {
  height: 100%;
  line-height: 2rem;
  margin-left: 1rem;
}

.user_name {
  font-weight: bold;
}

.user_description {
  font-size: .75rem;
  color: #999;
}

.user_num {
  /* width: 40%; */
  /* height: 100%; */
  display: flex;
  align-items: center;
}

.user_num>div {
  text-align: center;
  border-right: 1px dotted #999;
  box-sizing: border-box;
  /* width: 80px;
  height: 40px; */
  /* line-height: 20px; */
  margin: auto 1rem;
  padding-right: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.num_text {
  color: #999;
}

.num_number {
  font-size: 20px;
  color: #333;
}

.el-menu-item>span {
  font-size: 16px;
  color: #999;
}

/*下面部分样式*/
.person_body {
  width: 100%;
  display: flex;
  border-radius: 5px;
  margin: 5rem auto;
}

.person_body_left {
  width: 15%;
  /* height: 600px; */
  border-radius: 5px;
  margin-right: 1%;
  text-align: center;
}

.clearfix {
  color: #000;
  margin-top: 1rem;
}

.person_body_list {
  width: 100%;
  /* height: 50px; */
  margin-top: 25px;
  font-size: 22px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 1rem;
}

.el-menu-item {
  margin-top: 22px;
}

.person_body_right {
  width: 85%;
  /* height: 500px; */
  border-radius: 5px;
  background-color: white;
}

</style>

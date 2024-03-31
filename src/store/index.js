import { createStore } from 'vuex'

export default createStore({
  state: {
    opentions: {
      aside_menu_isCollapsed:false,
      i18n_local: 'zh',
      themeIsDark: false,
    },
    user_info: {
      user_id : '0',
      // user_id用户id（0：游客，非0：用户）
      user_type: 0,
      // user_identiy用户身份（0：游客，1：注册用户，2：管理员）
      name: '游客',
      message_count: 0,
      avatar: 'https://img2.woyaogexing.com/2021/07/14/3d3e8c5f1b7f4b3c9b8b8d6b5c6a3e8f!400x400.jpeg'
    }
  },
  getters: {
    get_aside_menu_isCollapsed(state){
      return state.opentions.aside_menu_isCollapsed
    },
    get_i18n_local(state){
      return state.opentions.i18n_local
    },
    get_user_info(state){
      return state.user_info
    },
    get_user_info_login(state){
      return state.user_info.user_type !== 0
    },
    get_themeIsDark(state){
      return state.opentions.themeIsDark
    },
    get_user_id(state) {
      return state.user_info.user_id
    }

  },
  mutations: {
    change_aside_menu_isCollapsed(state){
      state.opentions.aside_menu_isCollapsed = !state.opentions.aside_menu_isCollapsed
    },
    change_opentions_i18n_local(state,local){
      state.opentions.i18n_local = local
    },
    change_themeIsDark(state, themeIsDark){
      state.opentions.themeIsDark = themeIsDark
      console.log(state.opentions.themeIsDark)
    },
    change_user_info(state, user_info){
      state.user_info = user_info
    }
  },
  actions: {
  },
  modules: {
  }
})

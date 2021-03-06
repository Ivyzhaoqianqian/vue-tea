import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LyTab from 'ly-tab';
import Card from './components/home/Card';


//公共css文件
import './assets/css/commit.css'
import './assets/fonts/iconfont.css'


Vue.config.productionTip = false;
Vue.use(LyTab);
Vue.use(Card)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

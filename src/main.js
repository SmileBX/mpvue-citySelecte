import Vue from 'vue';
import App from '@/App';
import store from '@/store';

Vue.config.productionTip = false;
App.store = store;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#689F38',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      position: 'top',
      backgroundColor: '#689F38',
      color: '#DCEDC8',
      selectedColor: '#DCEDC8',
      list: [
        {
          pagePath: 'pages/index',
          text: '首页'
        },
        {
          pagePath: 'pages/index',
          text: '至少包含两项'
        }
      ]
    }
  }
};

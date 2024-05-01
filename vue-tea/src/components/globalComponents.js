//注册全局组件

import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import Tabbar from './Tabbar.vue';
const allGlobalComponents = {
  Tabbar,
};
export default {
  install(app) {
    Object.keys(allGlobalComponents).forEach((key) => {
      //@ts-expect-error we don't know how to define it
      app.component(key, allGlobalComponents[key]);
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};

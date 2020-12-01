import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import UI from "./UI"
import "./UI/styles/index.less"
import vueQuill from "vue-quill-editor"
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 导入语言
import {
    i18n
} from './lang/index';

Vue.config.productionTip = false;
Vue.use(UI);
Vue.use(vueQuill);

new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
}).$mount('#app');

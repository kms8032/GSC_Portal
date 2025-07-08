// 앱을 브라우저 실행시키는 출발점
// 즉, Vue가 브라우저 작동하게 만드는 시동 버튼이라고 보면 됩니다.


import { createApp } from "vue";
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
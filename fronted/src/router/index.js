// 페이지 주소(URL)에 따라 어떤 컴포넌트를 보여줄지 정하는 파일

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import register from '../views/register.vue'
// import dashboard from '../views/dashboard.vue'
// import timetables from '../views/timetables.vue'
// import calendar from '../views/calendar.vue'

const routes = [
    {path : '/', component: Login},
    {path : '/register', component: register}
    // {path : '/dashboard', component: dashboard},
    // {path : '/timetables', component: timetables },
    // {path : '/calendar', component: calendar}
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router
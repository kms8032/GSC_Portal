<template>
    <div class="login">
        <h2>로그인</h2>
        <form @submit.prevent="handleLogin">
            <input v-model="studentId" placeholder="학번 입력" />
            <input v-model="password" type="password" placeholder="비밀번호 입력"/>
            <button type="submit">로그인</button>
            <router-link to="/register">
                <button type="button">회원가입</button>
            </router-link>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const studentId = ref('')
const password = ref('')

function handleLogin() {
    console.log("학번:", studentId.value)
    console.log("비밀번호:", password.value)

    // 로그인 요청은 추후 axios로 구현 예정
}
</script>
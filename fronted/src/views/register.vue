<template>
    <div class="register">
        <h2>회원 가입</h2>
        <form @submit.prevent="handleRegister">
            <input v-model="studentId" placeholder="학번 입력"/>
            <input v-model="password" type="password" placeholder="비밀번호 입력"/>
            <input v-model="password_check" type="password_check" placeholder="비밀번호 확인"/>
            <button type="submit">회원가입</button>
            <router-link to="/">
                <button type="button">돌아가기</button>
            </router-link>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const studentId = ref("")
const password = ref("")
const password_check = ref("")

function handleRegister() {
    if (password.value !== password_check.value) {
        alert("비밀번호가 일치하지 않습니다.")
        return
    }
    console.log("학번:", studentId.value)
    console.log("비밀번호:", password.value)

    // 로그인 요청은 추후 axios로 구현 예정
}
</script>
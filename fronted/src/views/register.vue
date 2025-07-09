<template>
    <div class="register">
        <h2>회원 가입</h2>
        <form @submit.prevent="handleRegister">
            <input v-model="studentId" placeholder="학번 입력"/>
            <input v-model="password" type="password" placeholder="비밀번호 입력"/>
            <input v-model="password_check" type="password" placeholder="비밀번호 확인"/>
            <button type="submit">회원가입</button>
            <router-link to="/">
                <button type="button">돌아가기</button>
            </router-link>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const studentId = ref("")
const password = ref("")
const password_check = ref("")

async function handleRegister() {
    // 회원가입 처리 로직
    if (password.value !== password_check.value) {
        alert("비밀번호가 일치하지 않습니다.")
        return
    }

    try {
        const response = await axios.post('/api/auth/register', {
            student_id: studentId.value,
            password: password.value
    })
    alert(response.data.message) // 회원가입 성공 메시지
    } catch (error) {
        console.error(error)
        alert("회원가입 실패: " + (error.response?.data?.message || "서버 오류"))
    }
}
</script>
<template>
  <div v-if="toggle" class="alert alert-info">
    感謝您的回饋，會再透過 {{ user.email }} 與您聯繫！
  </div>
  <form class="bg-light p-3 rounded shadow-sm">
    <h1 class="h3 text-center mb-3">聯絡我們</h1>
    <div class="mb-3">
      <label for="email" class="form-label">Email <small class="text-danger">*(必填)</small></label>
      <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="user.email" @change="checkEmail" @blur="checkEmail">
      <div class="text-danger">{{ emailInfo }}</div>
    </div>
    <div class="mb-3">
      <label for="username" class="form-label">姓名</label>
      <input type="text" class="form-control" id="username" placeholder="王小明" v-model="user.name">
    </div>
    <div class="mb-3">
      <label for="feedback" class="form-label">您的回饋<small class="text-danger">*(必填)</small></label>
      <textarea class="form-control" id="feedback" rows="3" placeholder="請留下您的建議" v-model="user.feedback" @blur="checkFeedback"></textarea>
      <div class="text-danger">{{ feedbackInfo }}</div>
    </div>
    <a href="javascript:;" class="btn btn-primary" @click="submitBtn" type="button">送出</a>
  </form>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        name: '',
        feedback: ''
      },
      toggle: false,
      feedbackInfo: '',
      emailInfo: ''
    }
  },
  methods: {
    submitBtn () {
      /* 發送表單資料 */
      this.checkFeedback()
      this.checkEmail()
      if (!this.feedbackInfo && !this.emailInfo) {
        this.toggle = true
        setTimeout(() => {
          this.user = {}
          this.toggle = false
        }, 3000)
      }
    },
    checkFeedback () {
      /* 回饋欄位是否填寫 */
      if (!this.user.feedback) {
        this.feedbackInfo = '請填入您的回饋'
      } else {
        this.feedbackInfo = ''
      }
    },
    checkEmail () {
      /* 信箱欄位是否填寫 */
      if (!this.user.email) {
        this.emailInfo = '請填入您的信箱'
      } else {
        this.emailInfo = ''
      }
      this.checkEmailtype()
    },
    checkEmailtype () {
      /* 驗證信箱格式 */
      const emailRegxp = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/
      if (this.user.email.search(emailRegxp) === -1) {
        this.emailInfo = '請填寫信箱格式'
      } else {
        this.emailInfo = ''
      }
    }
  }
}
</script>

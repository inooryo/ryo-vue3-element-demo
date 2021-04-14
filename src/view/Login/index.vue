<template>
  <div class="por h-100">
    <div class="h-100 poa login-img"></div>
    <div class="login-box poa">
      <h2 class="tac">ryo-demo</h2>
      <el-form :model="form"
               class="form-style"
               ref="formRef"
               :hide-required-asterisk='false'
               label-position="top"
               :inline="false"
               size="mini">
        <el-form-item required
                      prop='loginName'
                      label="">
          <el-input placeholder="请输入用户名"
                    v-model="form.loginName"></el-input>
        </el-form-item>
        <el-form-item required
                      prop='loginPass'
                      label="">
          <el-input placeholder="请输入密码"
                    show-password
                    type="password"
                    v-model="form.loginPass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class='w-100'
                     type="primary"
                     size="medium"
                     :loading="mockSetTime"
                     @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from "vue";
import loginBG from "#/loginBG.jpg";
import { useSession } from "@c/commonComponents/sessionOptions";

let { getSession, setSession } = useSession();

let form = reactive({
  loginName: "",
  loginPass: "",
});

let mockSetTime = ref(false);
let formRef = ref(null);

const onSubmit = () => {
  mockSetTime.value = true;
  setTimeout(() => {
    (formRef.value as any).validate((valid: boolean) => {
      if (valid) {
        setSession('userInfo', form)
      } else {
        console.log("error submit!!");
        return false;
      }
    });
    mockSetTime.value = false;
  }, 400);
};
</script>

<style  lang='less' scoped>
.login-box {
  color: aliceblue;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  padding-top: 8px;
  border: 1px solid @borderColor;
  border-radius: 10px;
  overflow: hidden;
  &::before {
    content: "";
    width: 100%;
    height: 6px;
    top: 0;
    left: 0;
    position: absolute;
    background-color: @mainColor;
  }
  h2 {
    padding: 20px;
  }
}
.form-style {
  padding: 0 30px;
}
.login-img {
  width: 100%;
}
img {
  height: 100%;
  width: 100%;
  -webkit-filter: blur(20px); /* Chrome, Safari, Opera */
  filter: blur(20px);
  object-fit: cover;
}
.login-img {
  filter: blur(20px);
  background: url("/public/loginBG.jpg");
}
</style>
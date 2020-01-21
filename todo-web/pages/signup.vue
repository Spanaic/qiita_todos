<template>
  <v-row>
    <v-col cols="12" md="4">
      <h2>Sign Up</h2>
      <form>
        <v-text-field v-model="name" :counter="10" label="Name" data-vv-name="name" required></v-text-field>
        <v-text-field v-model="email" :counter="20" label="Email" data-vv-name="email" required></v-text-field>
        <v-text-field
          v-model="password"
          label="password"
          data-vv-name="password"
          required
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
          v-model="passwordConfirm"
          label="passwordConfirm"
          data-vv-name="passwordConfirm"
          required
          :type="show2 ? 'text' : 'password'"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show2 = !show2"
        ></v-text-field>
        <v-btn class="mr-4" @click="signup">submit</v-btn>
        <p v-if="error" class="errors">{{error}}</p>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      show1: false,
      show2: false,
      // NOTE:上のshowは何を表している？
      error: "" //passwordの不一致をエラーとして吐き出す用
    };
  },
  created() {
    console.log("API_KEY", process.env.API_KEY);
    console.log(
      "apikey",
      process.env.API_KEY,
      process.env.AUTH_DOMAIN,
      process.env.DATABASE_URL,
      process.env.PROJECT_ID,
      process.env.STORAGE_BUCKET,
      process.env.MESSAGE_SENDER_ID
    );
  },
  methods: {
    signup() {
      console.log("this.email", this.email);
      console.log("this.password", this.password);
      if (this.password !== this.passwordConfirm) {
        this.error = "※パスワードとパスワード確認が一致していません";
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log("res.user", res.user);
        })
        .catch(
          err => {
            console.log(err.message); // API key not valid. Please pass a valid API
          }
          // .catch(error => {
          //   this.error = (code => {
          //     // NOTE:error.codeがある？codeの複数内容の違いをswitch命令でエラーハンドリングしている
          //     // NOTE:resが返ってくる場合はエラーハンドリングをしっかりと記述する。
          //     switch (code) {
          //       case "auth/email-already-in-use":
          //         return "既にそのメールアドレスは使われています";
          //       case "auth/wrong-password":
          //         return "パスワードが正しくありません";
          //       case "auth/weak-password":
          //         return "※パスワードを最低6文字移譲にしてください";
          //       default:
          //         return "※メールアドレスとパスワードをご確認ください";
          //     }
          //   })(error.code);
          //   // NOTE: アロー関数(switc命令の戻り値 => {switch命令処理}(引数として渡すエラーコード)
          // });
        );
    }
  }
};
</script>

<style scoped>
.errors {
  color: red;
  margin-top: 20px;
}
</style>
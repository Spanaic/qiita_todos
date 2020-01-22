<template>
  <v-row>
    <v-col cols="12" md="4">
      <h2>Login</h2>
      <form action>
        <v-text-field v-model="email" :counter="20" label="email" data-vv-email="email" required></v-text-field>
        <v-text-field
          v-model="password"
          label="password"
          data-vv-name="password"
          required
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-btn class="mr-4" @click="login">submit</v-btn>
        <p v-if="error" class="errors">{{ error }}</p>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "@/plugins/firebase";
import axios from "@/plugins/axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      show1: false,
      error: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          const currentUser = axios.get(`/v1/users?uid=${user.uid}`);
          commit("setUser", currentUser).then(() => {
            this.$router.push("/");
          });
        })
        .catch(err => {
          console.log(err);
          this.err = (code => {
            switch (code) {
              case "auth/user-not-found":
                return "メールアドレスが間違っています";
              case "auth/wrong-password":
                return "※パスワードが正しくありません";
              default:
                return "※メールアドレスとパスワードをご確認ください";
            }
          })(err.code); //ここの記述が入り組んでてわかりにくい
        });
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
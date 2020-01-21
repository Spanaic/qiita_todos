<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col col="12" md="4">
          <v-text-field v-model="title" :counter="10" label="todo" required></v-text-field>
          <!-- counterをbindさせて、リアルタイムで文字数の入力をカウントする -->
          <!-- requiredで入力必須のバリデーション処理 -->
        </v-col>
        <v-col cols="12" md="4">
          <v-btn @click="handleSubmit">作成</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.title); //$emitで渡している第一引数が気になるけど、多分親で使う？
      this.title = ""; //入力フォームの初期化処理
    }
  }
};
</script>

<style>
</style>
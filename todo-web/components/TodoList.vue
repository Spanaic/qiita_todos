<template>
  <v-card>
    <v-card-title>
      Todo List
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="todos" :search="search">
      <template v-slot:item.action=" {item} ">
        <v-icon small @click="deleteItem(item)">delete</v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  props: ["todos"], //親から受け取った値
  data() {
    return {
      singleSelect: true, // これは一体何でしょう？
      selected: [], //何を入れるための配列？
      search: "",
      headers: [
        {
          text: "タイトル",
          align: "left",
          sortable: "false",
          value: "title"
        },
        { text: "ユーザー名", value: "username" },
        { text: "Actions", value: "action", sortable: false } //これも一体に何でしょう？vuetifyゲー？
      ]
    };
    // NOTE: コンポーネントの創りは恐らくvuetifyゲー
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async delete(item) {
      const res = confirm("本当に削除しますか？"); // これは初めて見た！confirm()メソッドの戻り値で条件分岐式。確認と処理の実行で一石二鳥の便利メソッド
      if (res) {
        await axios.delete(`/v1/todos/${item.id}`);
        const todos = this.user.todos.filter(todo => {
          return todo.id !== item.id; // deleteしたitem.idに該当するtodoを除外してreturnするためのfilterメソッド
        });
        const newUser = {
          ...this.user,
          todos //　filterで再定義したtodosをthis.userと一緒にnewUserに格納
        };
        this.$store.commit("setUser", newUser); //再定義したnewUserをVuexにセットすることでstate上のtodosを更新
      }
      //NOTE: スプレッド演算時使いこなせるようになりたい(T_T)
    }
  }
};
</script>

<style>
</style>
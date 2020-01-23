<template>
  <div v-if="user">
    <p>{{ user.name }}</p>
    <AddTodo @submit="addTodo" />
    <!-- todoの入力フォームコンポーネント -->
    <TodoList :todos="todos" />
    <!-- todoリスト表示用コンポーネント -->
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import axios from "@/plugins/axios";

export default {
  components: {
    AddTodo,
    TodoList
  },
  data() {
    return {
      todos: [] //TodoListに渡す値を格納する
    };
  },
  computed: {
    user() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    async addTodo(todo) {
      const { data } = await axios.post("/v1/todos", { todo }); // todoをラップしたのはまたパラメータを渡しやすくするため？恐らく。
      this.$store.commit("setUser", {
        ...this.user,
        todos: [...this.user.todos, data]
      });
    } // NOTE:これはスプレッド演算子使いたくなっちゃうやーつ
  }
};
</script>

<style>
</style>
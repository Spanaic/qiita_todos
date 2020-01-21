<template>
  <div>
    <AddTodo @submit="addTodo" />
    <!-- todoの入力フォームコンポーネント -->
    <TodoList :todos="todos" />
    <!-- todoリスト表示用コンポーネント -->
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

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
  // created() {
  //   console.log("process.env.API_KEY", process.env.API_KEY);
  // },
  methods: {
    addTodo(title) {
      this.todos.push({
        title //$emitで受け取る値は必ずオブジェクトなの？
      });
    }
  }
};
</script>

<style>
</style>
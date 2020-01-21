<template>
  <div>
    <AddTodo />
    <!-- todoの入力フォームコンポーネント -->
    <TodoList />
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
  }
};
</script>

<style>
</style>
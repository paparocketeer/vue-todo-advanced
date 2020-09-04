<template>
  <ul class="todos">
      <todo v-for="todo in todos" :todo="todo" :key="todo.id" />
  </ul>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "Todos",
  props: ["todos"],
  components: {
    Todo,
  },
};
</script>

<template>
  <div>
    <form @submit="addTodo">
      <input v-model="text" placeholder="What needs to be done?" />
    </form>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddTodo",
  props: ["groupId"],
  data() {
    return {
      text: "",
    };
  },
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      if (!this.text) {
        return;
      }
      let payload = {
        todo: {
          id: uuidv4(),
          text: this.text,
          completed: false,
        },
        groupId: this.groupId,
      };
      this.$store.dispatch("addTodo", payload);
      this.text = "";
    },
  },
};
</script>

<template>
  <div>
    <form @submit="addGroup">
      <input class="new-group" v-model="text" placeholder="Type in new group name" />
    </form>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddGroup",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    addGroup(e) {
      e.preventDefault();
      if (!this.text) {
        return;
      }
      let payload = {
          id: uuidv4(),
          name: this.text,
          todos: []
      };
      this.$store.dispatch("addGroup", payload);
      this.text = "";
    },
  },
};
</script>

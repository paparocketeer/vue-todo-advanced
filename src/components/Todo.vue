<template>
  <li class="todo">
    <!-- <span class="todo"> -->
    <input
      type="checkbox"
      class="pointer"
      v-model="todo.completed"
      name="todo"
      v-on:click="toggleCompleted(todo.id)"
    />
    <span
      ref="text"
      :data-id="todo.id"
      :class="{ 'completed': todo.completed }"
      class="todo-text"
      :inner-html.prop="clamp(todo.text)"
    ></span>

    <close v-if="todo.completed" @click.native="showModal = true" />

    <!-- overlay -->
    <div class="overlay" v-if="showModal" @click="closeModal()"></div>
    <!-- modal -->
    <div class="modal" v-if="showModal">
      <close @click.native="closeModal()" />
      <p>Are you sure u want to delete this task?</p>
      <div class="button-group">
        <button class="button" @click="deleteTodo(todo.id)">ok</button>
        <button class="button" @click="closeModal()">cancel</button>
      </div>
    </div>
  </li>
</template>

<script>
import Close from "@/components/Close";

export default {
  name: "Todo",
  components: {
    Close,
  },
  data() {
    return {
      showModal: false,
      collapsed: false
    };
  },
  props: ["todo"],
  mounted() {
    if (this.$refs.text.childNodes.length > 1) {
      let span = this.$refs.text.childNodes[1];
      let text = this.$refs.text.childNodes[0];
      span.addEventListener("click", () => {
        text.data = this.todo.text
        this.$refs.text.style.maxHeight = !this.collapsed ? "unset" : "18px";
        this.collapsed = !this.collapsed
      });
    }
  },
  methods: {
    toggleCompleted(id) {
      this.$store.dispatch("toggleTodo", id);
    },
    deleteTodo(id) {
      this.$store.dispatch("delTodo", id);
      this.closeModal();
    },
    closeModal() {
      this.showModal = false;
    },
    clamp(text) {
      return text.length > 35
        ? text.slice(0, 35) + '<span class="clamp">...</span>'
        : text;
    },
  },
};
</script>

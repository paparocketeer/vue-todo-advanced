<template>
  <div>
    <p class="group-name">{{group.name}}</p>
    <add-todo :groupId="group.id" />
    <draggable
      tag="div"
      v-model="group.todos"
      v-bind="dragOptions"
      @change="changed($event, group)"
      @start="isDragging = true"
      @end="ended($event, group)"
    >
      <transition-group tag="ul" class="todos" type="transition" :name="'flip-list'">
        <todo v-for="todo in group.todos" :todo="todo" :key="todo.id" />
      </transition-group>
    </draggable>
    <close v-if="group.id != 0" @click.native="showModal = true" />

    <!-- overlay -->
    <div class="overlay" v-if="showModal" @click="closeModal()"></div>
    <!-- modal -->
    <div class="modal" v-if="showModal">
      <close @click.native="closeModal()" />
      <p>Are you sure u want to delete this group?</p>
      <div class="button-group">
        <button class="button" @click="delGroup(group.id)">ok</button>
        <button class="button" @click="closeModal()">cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapState } from "vuex";
import Todo from "@/components/Todo";
import Close from "@/components/Close";
import AddTodo from "@/components/AddTodo";
export default {
  components: {
    draggable,
    Todo,
    AddTodo,
    Close,
  },
  props: ["group"],
  data() {
    return {
      showModal: false,
      editable: true,
      isDragging: false,
      delayedDragging: false,
    };
  },
  methods: {
    ended(e, group) {
      this.isDragging = false;
      this.$store.dispatch("orderTodos", {
        todos: group.todos,
        groupId: group.id,
      });
    },
    changed(e, group) {
      if (e.added) {
        this.$store.dispatch("moveTodo", {
          todo: e.added.element,
          newtodoId: e.added.newIndex,
          groupId: group.id,
        });
      }
    },
    closeModal() {
      this.showModal = false;
    },
    delGroup(groupId) {
      this.$store.dispatch("delGroup", groupId);
    },
  },
  computed: {
    ...mapState(["groups"]),
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost",
      };
    },
  },
};
</script>
<template>
  <div id="home">
    <div class="container">
      <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search todo..." />
      </div>
      <div class="home-todos">
        <add-todo :groupId="0" />
        <ul class="foot-buttons">         
          <li>
            <button :class="{active : filterActive}" @click="active()">Active</button>
          </li>
          <li>
            <button :class="{active : filterDone}" @click="done()">Completed</button>
          </li>
        </ul>
        <todos :todos="filteredTodos" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Todos from "@/components/Todos";
import AddTodo from "@/components/AddTodo";

export default {
  name: "Home",
  data() {
    return {
      search: "",
      filterActive: false,
      filterDone: false,
    };
  },
  components: { Todos, AddTodo },
  methods: {
    active(){
      this.filterActive = !this.filterActive
      if (this.filterActive) {
        this.filterDone = false
      }
    },
    done(){
      this.filterDone = !this.filterDone
      if (this.filterDone) {
        this.filterActive = false
      }
    }
  },
  computed: {
    ...mapState(["groups"]),
    filteredTodos() {
      let todos = [];
      this.groups.forEach((group) => {
        group.todos.forEach((todo) => {
          let activeCond = this.filterActive ? (!todo.completed) : (todo)
          let doneCond = this.filterDone ? (todo.completed) : (todo)
          let condition = this.filterActive ? activeCond : doneCond
          if (todo.text.toLowerCase().includes(this.search.toLowerCase()) && condition) {
            todos.push(todo);
          }
        });
      });
      return todos;
    },
  },
};
</script>

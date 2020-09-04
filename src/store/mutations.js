import * as types from './type.js'
const mutations = {
    [types.ADD_TODO](state, { todo, groupId }) {
        let index = state.groups.findIndex(group => group.id == groupId)
        state.groups[index].todos.push(todo)
        localStorage.setItem("groups", JSON.stringify(state.groups));
    },

    [types.DEL_TODO](state, todoId) {
        state.groups.forEach(group => {
            let index = group.todos.findIndex(todo => todo.id == todoId)
            if (index != -1) {
                group.todos.splice(index, 1);
                return
            }
        });
        localStorage.setItem("groups", JSON.stringify(state.groups));
    },
    [types.TOGGLE_TODO](state, todoId) {
        state.groups.forEach(group => {
            let index = group.todos.findIndex(todo => todo.id == todoId)
            if (index != -1) {
                let completed = group.todos[index].completed
                group.todos[index].completed = !completed
                return
            }
        });
        localStorage.setItem("groups", JSON.stringify(state.groups));
    },
    [types.ORDER_TODOS](state, { todos, groupId }) {
        let index = state.groups.findIndex(group => group.id == groupId)
        state.groups[index].todos = todos
        localStorage.setItem("groups", JSON.stringify(state.groups));
    },
    [types.MOVE_TODO](state, { todo, newtodoId, groupId }) {
        let index = state.groups.findIndex(group => group.id == groupId)
        state.groups.forEach(group => {
            let index = group.todos.findIndex(item => item.id == todo.id)
            if (index != -1) {
                group.todos.splice(index, 1);
                return
            }
        });
        state.groups[index].todos.splice(newtodoId, 0, todo)
        localStorage.setItem("groups", JSON.stringify(state.groups));
    },

    [types.ADD_GROUP](state, group) {
        state.groups.push(group)
        localStorage.setItem("groups", JSON.stringify(state.groups));
    },
    [types.DEL_GROUP](state, groupId) {
        let index = state.groups.findIndex(group => group.id == groupId)
        state.groups.splice(index, 1);
        localStorage.setItem("groups", JSON.stringify(state.groups));
    },


}

export default mutations
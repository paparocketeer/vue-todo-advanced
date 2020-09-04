const actions={
    addTodo({commit}, data) {
        commit('ADD_TODO', data);
    },
    toggleTodo({commit},data){
        commit('TOGGLE_TODO',data)
    },
    delTodo({commit},data){
        commit('DEL_TODO',data)
    },
    orderTodos({commit},data){
        commit('ORDER_TODOS',data)
    },
    moveTodo({commit},data){
        commit('MOVE_TODO',data)
    },
    addGroup({commit},data){
        commit('ADD_GROUP',data)
    },
    delGroup({commit},data){
        commit('DEL_GROUP',data)
    }
}

export default actions
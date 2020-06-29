export default {
  state: {
    todos:[],
    todo:{},
  },

  getters:{
      all: state => state.todos,
      completed: state => state.todos.filter((todo) => todo.completed),
      active: state => state.todos.filter((todo) => !todo.completed),
  },

  mutations: {
    ADD_TODO(state, todo) {
        state.todos = [...state.todos, todo];
      
    },

    VIEW_TODO(state, id) {
       state.todo = state.todos.find((todo)=>todo.id===id)
    },

    REMOVE_TODO(state, index) {
        state.todos.splice(index, 1);
    },

    COMPLETE_TODO(state, index) {
        state.todos[index].completed = !state.todos[index].completed;
    },

  },
  actions: {
      getTodo({commit}, todo){
        commit(`GET_TODO`, todo)
      },
      addTodo({commit}, todo){
        commit(`ADD_TODO`, todo)
      },
      removeTodo({commit}, index){
        commit(`REMOVE_TODO`, index)
      },
      completeTodo({commit}, index){
       commit(`COMPLETE_TODO`, index)
      },
      viewTodo({commit},id){
        commit(`VIEW_TODO`,id)
      }
  },
};

const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    todo: {
      id: 0,
      title: null
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todo.id,
        title: this.todo.title
      })
      this.todo.id++
    },
    removeTodo(i) {
      this.todos.splice(i, 1)
    }
  },

})


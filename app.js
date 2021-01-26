const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    todo: {
      id: 0,
      title: null
    },
    update: {
      id: null,
      title: null
    },
    onUpdate: false

  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todo.id,
        title: this.todo.title
      })
      this.todo.id++
      this.todo.title = null
    },
    removeTodo(i) {
      this.todos.splice(i, 1)
    },
    getTodo(todo, i) {
      this.onUpdate = !this.onUpdate
      this.update.title = todo.title
      this.update.id = i
    },
    updateTodo() {
      this.onUpdate = !this.onUpdate
      let id = this.update.id
      this.todos[id].title = this.update.title
    }
  },

})


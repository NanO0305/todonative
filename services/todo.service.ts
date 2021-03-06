export interface Todo {
  task: string;
  completed: boolean;
}

class TodoService {
  private todos: Array<Todo> = [
    // Add some default todos
    { task: "Finir le projet Prolog", completed: true },
    { task: "Partir en week-end", completed: false },
  ];

  // Return all todos asynchronously. Returns a Promise
  getAll(): Promise<Array<Todo>> {
    return new Promise((resolve) => {
      // Wait for 2 seconds before resolving promise
      setTimeout(() => {
        resolve(this.todos);
      }, 2000);
    });
  }

  add(task: string) {
    // Add new todo at beginning of array
    this.todos = [{ task, completed: false }, ...this.todos];
  }

  remove(task: string) {
    // Keep only todos that don't have task as key
    this.todos = this.todos.filter((todo: Todo) => todo.task !== task);
  }

  toggle(task: string) {
    // Toggle completion for the todo identified by its task
    this.todos = this.todos.map((todo) => {
      if (todo.task === task) {
        return { task, completed: !todo.completed };
      }
      return todo;
    });
  }

  removeCompleted() {
    // Keep only non-completed todos
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
}

export default new TodoService();

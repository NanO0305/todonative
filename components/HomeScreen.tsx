import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import TodoList from "./TodoList";
import Header from "./Header";
import todoService, { Todo } from "../services/todo.service";

interface HomeScreenState {
  todos: Array<Todo>;
}

export default class HomeScreen extends Component<{}, HomeScreenState> {
  // Init state: empty todo list
  state: HomeScreenState = {
    todos: [],
  };

  loadTodos = () => {
    // Load all todos
    todoService.getAll().then((theTodos) => {
      this.setState({ todos: theTodos });
    });
  };

  // Override componentDidMount() to load todos when component is ready
  componentDidMount() {
    this.loadTodos();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="TodoNative" />
        <TodoList todos={this.state.todos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

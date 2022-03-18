import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { Todo } from "../services/todo.service";

interface TodoItemProps {
  todo: Todo;
}

export default class TodoItem extends Component<TodoItemProps, {}> {
  render() {
    // Retrieve todo task from props
    const text = this.props.todo.task;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const colors = {
  removeIcon: "red",
  completedTask: "lightgrey",
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  removeIcon: {
    color: colors.removeIcon,
    fontSize: 26,
  },
  completed: {
    color: colors.completedTask,
  },
});

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

interface Task {
  id: string;
  title: string;
}

const TaskRead: React.FC = () => {
  const tasks: Task[] = [
    { id: "1", title: "Complete React Native project" },
    { id: "2", title: "Review pull requests" },
    { id: "3", title: "Write unit tests" },
  ];

  const handleEdit = (taskId: string): void => {
    console.log(`Edit task with id: ${taskId}`);
  };

  const handleDelete = (taskId: string): void => {
    console.log(`Delete task with id: ${taskId}`);
  };

  const renderTaskItem = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.title}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => handleEdit(item.id)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TaskRead;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  taskContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
  buttonGroup: {
    flexDirection: "row",
  },
  button: {
    padding: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: "#4caf50",
  },
  deleteButton: {
    backgroundColor: "#f44336",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { fetchDocuments } from "@/lib/appwrite";
import { useRouter } from "expo-router";

interface Task {
  id: string;
  title: string;
}

const TaskRead: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDocuments();
      setTasks(result);
    };

    fetchData();
  }, []);

  console.log(tasks);

  //   const tasks: Task[] = [
  //     { id: "1", title: "Complete React Native project" },
  //     { id: "2", title: "Review pull requests" },
  //     { id: "3", title: "Write unit tests" },
  //   ];

  const handleEdit = (taskId: string): void => {
    console.log(`Edit task with id: ${taskId}`);

    router.push(`/editTask/${taskId}`);
  };

  const handleDelete = (taskId: string): void => {
    console.log(`Delete task with id: ${taskId}`);
  };

  const renderTaskItem = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text style={styles.taskText}>{item.tasks}</Text>

        {item.complete === true ? (
          <Text>Status: Completed</Text>
        ) : (
          <Text>Status: Incomplete</Text>
        )}
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => handleEdit(item.$id)}
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
        keyExtractor={(item) => item.$id}
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

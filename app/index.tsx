import TaskRead from "@/components/TaskRead";
import { createDocuments, database, fetchDocuments } from "@/lib/appwrite";
import { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [text, onChangeText] = useState("");

  //to create operation
  const onPressAdd = async () => {
    if (!text.trim()) {
      Alert.alert("Validation Error", "Please enter a task.");
      return;
    }

    try {
      const result = await createDocuments(text, false);
      console.log("Task added successfully:", result);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Welcome to TODO app made with react Native and appwrite
          </Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="add a new task"
          />

          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
              backgroundColor: "blue",
              padding: 10,
            }}
            onPress={() => onPressAdd()}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Add Task +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
              backgroundColor: "blue",
              padding: 10,
            }}
            onPress={() => fetchDocuments()}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              {" "}
              Click Me
            </Text>
          </TouchableOpacity>
        </View>

        <TaskRead />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 40,
  },
});

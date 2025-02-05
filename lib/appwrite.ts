import { Platform } from "react-native";
import { Client, Databases, Account, ID } from "react-native-appwrite";

const config = {
  endPoint: "https://cloud.appwrite.io/v1",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  Platform: "com.omi.todo",
  db: "todo",
  col: {
    tasks: "tasks",
  },
};

const client = new Client();
client
  .setEndpoint(config.endPoint!)
  .setProject(config.projectId!)
  .setPlatform(config.Platform!);

//   .setPlatform("com.omi.todo");

const database = new Databases(client);

export { database, config, client };

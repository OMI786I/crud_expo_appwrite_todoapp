import { Platform } from "react-native";
import { Client, Databases, Account, ID } from "react-native-appwrite";

const config = {
  endPoint: "https://cloud.appwrite.io/v1",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  Platform: "com.omi.todo",
  databaseID: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  collectionID: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID,
};

const client = new Client();
client
  .setEndpoint(config.endPoint!)
  .setProject(config.projectId!)
  .setPlatform(config.Platform!);

//   .setPlatform("com.omi.todo");

const database = new Databases(client);

export async function fetchDocuments() {
  try {
    const result = await database.listDocuments(
      config.databaseID, // databaseId
      config.collectionID // collectionId
    );
    return result.documents;
  } catch (error) {
    console.error(error);
  }
}

export { database, config, client };

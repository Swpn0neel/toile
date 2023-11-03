import { database } from "../appwrite/appwriteConfig";
import { ID } from "appwrite";

const databaseID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

console.log("databaseID", databaseID);
console.log("collectionID", collectionID);
// const bucketId= import.meta.env.VITE_APPWRITE_BUCKET_ID

const creatUserDocument = async (userData) => {
  try {
    return database.createDocument(
      databaseID,
      collectionID,
      ID.unique(),
      userData
    );
  } catch (e) {
    console.error(e.message);
  }
};
const getUserDocuments = async () => {
  try {
    return database.listDocuments(databaseID, collectionID);
  } catch (e) {
    console.error(e.message);
  }
};

const updateUserDocument = async ({
  documentID,
  title,
  description,
  image,
}) => {
  try {
    return database.updateDocument(databaseID, collectionID, documentID, {
      title,
      description,
      image,
    });
  } catch (e) {
    console.error(e.message);
  }
};

const deleteUserDocument = async (documentID) => {
  try {
    return database.deleteDocument(databaseID, collectionID, documentID);
  } catch (e) {
    console.error(e.message);
  }
};

export {
  creatUserDocument,
  getUserDocuments,
  updateUserDocument,
  deleteUserDocument,
};

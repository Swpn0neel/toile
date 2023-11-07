import { database, storage } from "../appwrite/appwriteConfig";
import { ID } from "appwrite";

const databaseID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const bucketId = import.meta.env.VITE_APPWRITE_BUCKET_ID;

const creatUserDocument = async (userData) => {
  try {
    return await database.createDocument(
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
    return await database.listDocuments(databaseID, collectionID);
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
    return await database.updateDocument(databaseID, collectionID, documentID, {
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

// File upload
const uploadFile = async (file) => {
  try {
    return await storage.createFile(bucketId, ID.unique(), file);
  } catch (error) {
    console.log(error);
    return false;
  }
};
const deleteFile = async (fileId) => {
  try {
    return await storage.deleteFile(bucketId, fileId);
  } catch (error) {
    console.log(error);
    return false;
  }
};
const getFilePreview = (fileId) => {
  return storage.getFilePreview(bucketId, fileId);
};

const getFileView = (fileId) => {
  return storage.getFileView(bucketId, fileId);
};

const getFile = () => {
  return storage.listFiles(bucketId);
};

export {
  creatUserDocument,
  getUserDocuments,
  updateUserDocument,
  deleteUserDocument,
  uploadFile,
  deleteFile,
  getFilePreview,
  getFile,
  getFileView
};

import { Client, Account, Databases } from "appwrite";

export const API_ENDPOINT = import.meta.env.VITE_APPWRITE_URL;
export const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

// console.log("API_ENDPOINT", API_ENDPOINT);
// console.log("PROJECT_ID", PROJECT_ID);

const client = new Client().setEndpoint(API_ENDPOINT).setProject(PROJECT_ID);

export const account = new Account(client);
export const database = new Databases(client);
// console.log("database", database);

export default client;

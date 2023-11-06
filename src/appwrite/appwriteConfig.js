import { Client, Account, Databases, Storage } from "appwrite";

export const API_ENDPOINT = import.meta.env.VITE_APPWRITE_URL;
export const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client().setEndpoint(API_ENDPOINT).setProject(PROJECT_ID);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);

export default client;

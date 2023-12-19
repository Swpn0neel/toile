# Toile

Toile is an artistic outlook to take inspirations from the works of other artists, and the best part is you can add your own image too to the exising collection

## How to run the project locally?

It's very simple, just follow these process step-by-step:

- Fork the repository, and copy the link of the repository.
- Open the terminal and type the following code to clone the repository :
    ```
    git clone <Repository_Link>
    ```
- Once the cloning is complete, run this command to get inside the repository directory :
    ```
    cd ONFocus
    ```
- Create your `.env` file by following the `.env.example` file and your required API keys.
    ```
    VITE_APPWRITE_URL = Your_Appwrite_URL
    VITE_APPWRITE_PROJECT_ID = Your_Appwrite_Project_ID
    VITE_APPWRITE_DATABASE_ID= Your_Appwrite_Database_ID
    VITE_APPWRITE_COLLECTION_ID= Your_Appwrite_Collection_ID
    VITE_APPWRITE_BUCKET_ID = Your_Appwrite_Bucket_ID
    ```
- Now, install the required modules by running the following command :
    ```
    npm install
    ```
- And finally, you can run the app locally by running the following command :
    ```
    npm run dev
    ```
The site will be live at `http://localhost:5173/`
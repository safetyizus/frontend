import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let cachedClient;
let cachedDb;

export const connectToDatabase = async () => {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    const options = {};

    const client = new MongoClient(uri, options);
    await client.connect();
    const db = client.db("main");

    cachedClient = client;
    cachedDb = db;

    return {
        client,
        db,
    };
};

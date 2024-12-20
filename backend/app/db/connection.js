import { config as dotenvConfig } from 'dotenv';
import mongoose from 'mongoose';

export default class Connection {
    static async open(db) {
        try {
            dotenvConfig();

            const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGODB_PORT } = process.env;
            const DATABASE_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGODB_PORT}`;

            mongoose.connect(DATABASE_URL, {
                maxPoolSize: 50,
                socketTimeoutMS: 2500,
                dbName: db
            });

            return mongoose.connection;
        } catch (e) {
            console.log("Database failure")
        }
    }
}
import mongoose from 'mongoose';

const MONGO_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dkyciny.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`

export const connectMongo = async () => (
  mongoose
    .connect(MONGO_URL || '')
    .then(() => console.log('Mongo connection success'))
    .catch(() => console.log('Mongo connection fail'))
)

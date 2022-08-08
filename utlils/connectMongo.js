import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.DATABASE_URI);

export default connectMongo;
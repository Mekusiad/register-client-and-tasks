import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = `mongodb+srv://${process.env.DATABASE_LOGIN}:${process.env.DATABASE_PASSWORD}@apicluster.ivyracg.mongodb.net/?retryWrites=true&w=majority`;

export const Database = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Conectado ao mongoose.");
    })
    .catch(() => {
      console.error("Error: ", error);
    });
};

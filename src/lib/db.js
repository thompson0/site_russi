import mongoose from "mongoose";


let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  console.log("Conectando ao MongoDB com:");

  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB conectado");
  } catch (err) {
    throw new Error(err);
    
  }
}

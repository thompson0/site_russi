import mongoose from "mongoose";

const CarroSchema = new mongoose.Schema(
  {
    modelo: { type: String, required: true },
    ano: { type: Number, required: true },
    foto: { type: String, required: true },
    montadoraId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Montadora",
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

export default mongoose.models.Carro || mongoose.model("Carro", CarroSchema);

import mongoose from "mongoose";

const MontadoraSchema = new mongoose.Schema({
  nome: { type: String, unique: true, required: true },
  logo: { type: String, required: true },
});

export default mongoose.models.Montadora || mongoose.model("Montadora", MontadoraSchema);

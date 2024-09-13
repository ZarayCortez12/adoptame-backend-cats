import mongoose from "mongoose";

const gatitosSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    edad: {
      type: String,
      required: true,
    },
    raza: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    peso: {
      type: String,
      required: true,
    },
    sexo: {
      type: String,
      required: true,
    },
    disponibilidad: {
      type: Boolean,
      required: true,
      default: false,
    },
    esterilizado: {
      type: Boolean,
      required: true,
      default: false,
    },
    vacunado: {
      type: Boolean,
      required: true,
    },
    precio: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "gatos", // Especifica el nombre de la colección aquí
  }
);

export default mongoose.model("Gato", gatitosSchema);

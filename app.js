import express from "express";
import morgan from "morgan";
import gatoRoutes from "./routes/gato.routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/gatos", gatoRoutes);


export default app; // Exporta 'app'

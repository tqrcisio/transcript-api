import express from "express";
import transcriptRoutes from "./routes/transcriptRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/transcript", transcriptRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

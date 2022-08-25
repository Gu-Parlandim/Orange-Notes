import express, { json } from "express";
import config from "./config";
import cors from "cors";
import UserRepositorie from "./repositories/userRepositorie";

const app = express();

//configs
const PORT = config.PORT || 3000;
app.use(cors());
app.use(json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.status(404).json({ exemple: "exemple" });
});

app.listen(PORT, () => {
  console.log(`serve on port: ${PORT}`);
});

//"https://avatars.dicebear.com/api/croodles-neutral/your-112seed.svg"

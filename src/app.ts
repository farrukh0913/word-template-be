import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { routes } from "./routes";
require('dotenv').config();

const app = express();
const port = 3000;
export const TOKEN_KEY = "11223344";

// Middleware
app.use(express.urlencoded({ limit: "150mb", extended: true }));
app.use(bodyParser.json({ limit: "150mb" }));
app.use(express.json());
app.use(cors({ origin: "*"}));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

routes(app);
// MongoDB connection
const MONGODB_URI = 'mongodb+srv://testuser:sd0u6shfroddiwkl@cluster0.hdghz.mongodb.net/test'
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to database!", MONGODB_URI);
  })
  .catch((error) => {
    console.log("Connection failed!:", error);
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/', function (req, res) {
  res.send('** Hello World! **');
});

export default app;
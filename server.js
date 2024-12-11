import express from "express";
import router from "./routes/index";

const port = parseInt(process.env.PORT, 10) || 5000;

const app = express();

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
console.log(`dir: ${path.dirname(__dirname)}`);

export default app;

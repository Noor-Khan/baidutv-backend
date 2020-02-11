import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { routes } from "./route";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use("/", routes);

app.listen(9000, () => {
  console.log("Server is running at port 9000");
});

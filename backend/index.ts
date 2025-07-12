import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("working as expected");
});

app.listen(PORT, () => {
  console.log("App running on port: ", PORT);
});

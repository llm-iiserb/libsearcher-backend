import express, { Request, Response } from "express";
import cluster from "express-cluster";
import { config } from "dotenv";
import { Worker } from "cluster";

config();

cluster((worker: Worker) => {
  const app = express();
  const port = process.env.PORT;

  app.get("/", (req: Request, res: Response) => {
    res.send({ message: `[W ${worker.id}] Hello world!` });
  });

  app.listen(port, () => {
    return console.log(
      `Express server is listening at http://localhost:${port} 🚀`
    );
  });
});

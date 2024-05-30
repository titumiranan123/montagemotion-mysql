import express, { Request, Response } from "express";
import cors from "cors";
import testimonialRoute from "./app/testimonial/testimonial.route";
import memberRoute from "./app/member/member.route";
import postworkRoute from "./app/work/work.route";
import introroute from "./app/intro/intro.route";
import blogroute from "./app/blog/blog.route";
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "server is running" });
});
app.use("/api/v1", testimonialRoute);
app.use("/api/v1", memberRoute);
app.use("/api/v1", introroute);
app.use("/api/v1", postworkRoute);
app.use("/api/v1", blogroute);
app.listen(3001, () => {
  console.log("server is running");
});

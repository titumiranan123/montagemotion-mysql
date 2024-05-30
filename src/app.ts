import express, { Request, Response } from "express";
import cors from "cors";
import testimonialRoute from "./app/testimonial/testimonial.route";
import memberRoute from "./app/member/member.route";
import postworkRoute from "./app/work/work.route";
import introroute from "./app/intro/intro.route";
import blogroute from "./app/blog/blog.route";
import authRoute from "./app/auth/auth.route";
import userRoute from "./app/users/user.route";
import { errorHandler } from "./ErrorHandler/GlobalError";
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
app.use("/api/v1", authRoute);
app.use("/api/v1", userRoute);
app.use(errorHandler);
app.listen(3001, () => {
  console.log("server is running");
});

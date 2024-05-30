"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const testimonial_route_1 = __importDefault(require("./app/testimonial/testimonial.route"));
const member_route_1 = __importDefault(require("./app/member/member.route"));
const work_route_1 = __importDefault(require("./app/work/work.route"));
const intro_route_1 = __importDefault(require("./app/intro/intro.route"));
const blog_route_1 = __importDefault(require("./app/blog/blog.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "10mb" }));
app.get("/", (req, res) => {
    res.json({ message: "server is running" });
});
app.use("/api/v1", testimonial_route_1.default);
app.use("/api/v1", member_route_1.default);
app.use("/api/v1", intro_route_1.default);
app.use("/api/v1", work_route_1.default);
app.use("/api/v1", blog_route_1.default);
app.listen(3001, () => {
    console.log("server is running");
});

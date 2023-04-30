"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Logging_1 = __importDefault(require("./libs/Logging"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const port = process.env.PORT ? process.env.PORT : 8080;
const router = (0, express_1.default)();
const StartApplication = () => {
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json());
    router.get("/users", UserRoutes_1.default);
    router.listen(port, () => Logging_1.default.info(`Server is running on port ${port}`));
};
StartApplication();

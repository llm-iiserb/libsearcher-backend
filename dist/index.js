"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_cluster_1 = __importDefault(require("express-cluster"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
(0, express_cluster_1.default)((worker) => {
    const app = (0, express_1.default)();
    const port = process.env.PORT;
    app.get("/", (req, res) => {
        res.send({ message: `[W ${worker.id}] Hello world!` });
    });
    app.listen(port, () => {
        return console.log(`Express server is listening at http://localhost:${port} 🚀`);
    });
});
//# sourceMappingURL=index.js.map
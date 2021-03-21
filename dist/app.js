"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const ToDos_1 = __importDefault(require("./routes/ToDos"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/todos', ToDos_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ msg: err.message });
});
app.listen(4000);

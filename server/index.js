import express from 'express';
import mongoose from 'mongoose';
import { User } from './models/User.js';
import { Article } from './models/Article.js';
import cors from 'cors';

const app = express();
app.use(cors());
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://karthikvankada:article123@cluster0.qgvuzn1.mongodb.net/Article");
var db = mongoose.connection;
db.on("open", () => console.log("connected to DB"));
db.on("error", () => console.log("Error occurred"));

app.use(express.json());

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);

        const data = await User.find({ email: email, password: password }).exec();

        return res.json(data);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

app.post("/news", async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log(req.body);

        const article = await Article.create({ title, description });
        return res.json(article);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

app.get("/news", async (req, res) => {
    try {
        const articles = await Article.find().exec();
        return res.json(articles);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

app.listen(4000, () => {
    console.log("server started ");
});

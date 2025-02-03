const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3001" })); 

const directoryPath = path.join(__dirname, "videos"); 

app.get("./videos", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    try {
        const files = fs.readdirSync(directoryPath);
        const mp4Files = files.filter(file => path.extname(file).toLowerCase() === ".mp4");
        res.json(mp4Files);

        console.log(mp4Files);
    } catch (error) {
        res.status(500).json({ error: "Failed to read directory" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
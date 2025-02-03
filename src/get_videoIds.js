import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const directoryPath = path.join(process.cwd(), "./videos"); 

    try {
        const files = fs.readdirSync(directoryPath);
        const mp4Files = files.filter(file => path.extname(file).toLowerCase() === ".mp4");

        res.status(200).json(mp4Files);
    } catch (error) {
        res.status(500).json({ error: "Failed to read directory" });
    }
}
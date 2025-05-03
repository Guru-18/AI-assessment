const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const expressFileupload = require("express-fileupload");
const path = require("path");

const connectDB = require("./database/db");

const attachmentRoute = require("./routes/attachementRoute");

const app = express();
dotenv.config();

app.use(express.json());
app.use(expressFileupload());

app.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: ["http://localhost:3001", "https://majestic-wisp-04bd65.netlify.app"],
}));

connectDB();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use("/api/attachments", attachmentRoute);

require("./utils/deleteDataSet");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
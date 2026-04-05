require('dotenv').config();  

const mongoose = require("mongoose");
const app = require("./src/app");

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    // Start server only after DB connects
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch((err) => {
    console.log("DB Connection Error:", err);
});
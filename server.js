require('dotenv').config(); // Must  

const connectToDB = require("mongoose");
const app = require("./src/app");

// MongoDB connection
connectToDB.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    // Start server only after DB connects
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch((err) => {
    console.log("DB Connection Error:", err);
    process.exit(1); // IF DB connection fails , then it exits the process
});

module.export = connectToDB;
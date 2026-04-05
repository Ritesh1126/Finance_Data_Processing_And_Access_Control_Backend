require('dotenv').config(); // Must  

const connectToDB = require("mongoose");
const app = require("./src/app");

connectToDB()
    // Start server only after DB connects
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });

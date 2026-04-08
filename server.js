console.log("MONGO_URI:", process.env.MONGO_URI);
require('dotenv').config(); // Must  


const connectToDB = require("./src/config/db");
const app = require("./src/app");

connectToDB()
    // Start server only after DB connects
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });

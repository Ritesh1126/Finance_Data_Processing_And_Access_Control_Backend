require('dotenv').config(); // ✅ FIRST line honi chahiye

console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("PORT:", process.env.PORT);

const connectToDB = require("./src/config/db");
const app = require("./src/app");

connectToDB();

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port", process.env.PORT || 3000);
});
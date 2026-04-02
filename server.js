const app = require("./src/app");  // we have import the app from app.js file to use in this server.js file
                                  // we have set the port number to 3000 or we can use the port number from environment variable

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}   ); 
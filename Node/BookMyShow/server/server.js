const express = require("express");
const PORT = 5001; 
const app = express();

const dbConfig = require("./config/dbConfig");
const userRoute = require("./routes/userRoutes");

app.use(express.json());
app.use('/', userRoute);

app.listen(PORT, ()=>{
    console.log(`Server is live at PORT ${PORT}`);
})
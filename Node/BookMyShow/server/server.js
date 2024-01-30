const express = require("express");
const PORT = 5001; 
const app = express();
const cors = require('cors');

const dbConfig = require("./config/dbConfig");
const userRoute = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);

app.listen(PORT, ()=>{
    console.log(`Server is live at PORT ${PORT}`);
})
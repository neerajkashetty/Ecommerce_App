const express = require("express")
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const { sequelize } = require("./sequelize/models");
require("dotenv/config")

app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));

app.get("/", (req, res) => {
    res.send("Kankabot Backend")
})

//IMPORTING ROUTES
const authRoute = require("./routes/auth.route");
app.use("/api/auth", authRoute);

const userRoute = require("./routes/user.route");
app.use("/api/user", userRoute);

const answerRoute = require("./routes/answer.route");
app.use("/api/answer", answerRoute);

//Database authentication
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Successfully connected to database.")
    } catch (error) {
        console.log("An error occured while connecting to database, \n", error)
        process.exit(1)
    }
}


(async () => {
    await connectDB();
        app.listen(process.env.PORT || 3002, () => console.log('Kankabot backend started on port', process.env.PORT || 3002));
})()
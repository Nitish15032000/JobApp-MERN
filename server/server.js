import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./utils/db.js";
import userRoutes from "./routes/userRoute.js";
import companyRoute from "./routes/companyRoute.js";
import jobRoute from "./routes/jobRoute.js";
import applicationRoute from "./routes/applicationRoute.js";

dotenv.config({});

const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
   origin: 'http://localhost:5173',
   credentials: true
}

app.use(cors());

const PORT = process.env.PORT || 3000;


// api calls
app.use("/api/user", userRoutes);             

app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);



// for testing
app.get('/', (req, res) => {
   res.send("Job Application Server is running");
});


app.listen(PORT, () => {
   connectDB();
   console.log(`Server is running on port http://localhost:${PORT}`);
});
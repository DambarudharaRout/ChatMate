import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";

//create express app and HTTP server
const app = express();
const server = http.createServer(app);

///middleware
app.use(express.json({limit: "4mb"}));
app.use(cors());

// Route setup
app.use("/api/status", (req, res)=> res.send("Server is live"));
app.use("/api/auth", userRouter);

//connect to MongoDB
await connectDB();

//start server
const PORT= process.env.PORT || 5000;
server.listen(PORT,()=> console.log("Server is running on port: ", 
+ PORT));


// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import http from "http";
// import { connectDB } from "./lib/db.js";

// // Create express app and HTTP server
// const app = express();
// const server = http.createServer(app);

// // Middleware
// app.use(express.json({ limit: "4mb" }));
// app.use(cors());

// app.use("/api/status", (req, res) => res.send("Server is live"));

// // Connect to MongoDB and start server
// const startServer = async () => {
//   try {
//     await connectDB();
//     console.log("MongoDB connected successfully");
    
//     const PORT = process.env.PORT || 5000;
//     server.listen(PORT, () => console.log("Server is running on port: " + PORT));
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();

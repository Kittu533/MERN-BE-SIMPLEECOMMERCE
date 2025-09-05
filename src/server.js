import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import authRoles from "./routes/auth.route.js"
// import inventoriesRoutes from "./routes/inventories.route.js";
// import productsRoutes from "./routes/products.route.js";
// import cartsRoutes from "./routes/carts.route.js";
// import invoiceRoutes from "./routes/invoice.route.js";
// import statistikRoutes from "./routes/statistik.route.js";



// LOAD .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// ROUTES
app.use("/api/auth", authRoles);
app.use("/api/inventories", inventoriesRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);
app.use("/api/invoice", invoiceRoutes);
app.use("/api/statistik", statistikRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
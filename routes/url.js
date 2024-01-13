// Import the required module
import express from "express";
import {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} from "../controllers/url.js";

// Create an instance of the Express router
const router = express.Router();

// Define routes
router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

// Export the router
export default router;

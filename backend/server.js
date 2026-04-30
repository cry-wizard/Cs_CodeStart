const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic validation middleware
const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }
  if (message.length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters long." });
  }
  next();
};

app.post("/api/contact", validateContactForm, (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to a database or send an email
  console.log("Received contact form submission:", { name, email, message });
  
  // Simulate network delay
  setTimeout(() => {
    res.status(200).json({ success: true, message: "Thank you for reaching out! We will get back to you soon." });
  }, 1000);
});

app.get("/", (req, res) => {
  res.send("CS Code Start Backend API");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong on the server." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

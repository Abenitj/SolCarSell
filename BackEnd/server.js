const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const carRoutes = require('./routers/carRouter');
const carDocs=require("./docs/car-docs.json")
const swaggerUi = require('swagger-ui-express');
const cors=require('cors')
// Load environment variables from .env file
dotenv.config();

// Set up the Express app
const app = express();
app.use(cors())
// Middleware to parse JSON requests
app.use(express.json());
// Serve static files from the 'uploads' folder/
app.use('/uploads', express.static('uploads'));




// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });



// Use car routes
app.use('/cars', carRoutes);
// Swagger route
app.use('/car-docs', swaggerUi.serve, swaggerUi.setup(carDocs));


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

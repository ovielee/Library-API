const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bookRoutes = require('./routes/bookRoutes');
const swaggerSpec = require('./swagger/swagger');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use book routes
app.use('/api/v1', bookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
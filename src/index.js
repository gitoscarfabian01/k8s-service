const app = require('./app');
const PORT = process.env.PORT || 3000;
const SERVICE_VERSION = process.env.SERVICE_VERSION || '1.0.0';

app.listen(PORT, () => {
  console.log(`Microservice running on port ${PORT} - version ${SERVICE_VERSION}`);
});

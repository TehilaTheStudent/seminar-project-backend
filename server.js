const express = require('express');
const app = express();
const port = 3000; // Your NGINX will proxy to this

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const app = require('./server');

// Serve static assets in production (e.g., React build folder) TO DO check directory name
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
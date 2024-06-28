const express = require('express');
const path = require('path');
const photosRoutes = require('./routes/photosRoutes');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/api/photos', photosRoutes);

app.use(express.urlencoded({ extended: true }));

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).send('Error uploading file.');
    } else {
      res.send('File uploaded successfully.');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
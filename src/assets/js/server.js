const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Set storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload variable
const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
}).array('photos', 10); // Allows up to 10 photos to be uploaded at once

// Set static folder
app.use(express.static('public'));

// Handle file upload
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if(err){
            res.status(400).send('Error uploading file.');
        } else {
            if(req.files == undefined){
                res.status(400).send('No file selected.');
            } else {
                res.send(req.files.map(file => `/uploads/${file.filename}`));
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
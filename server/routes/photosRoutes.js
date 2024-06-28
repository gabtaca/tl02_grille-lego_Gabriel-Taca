const express = require('express');
const multer = require('multer');
const Photo = require('../models/photo');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

const express = require('express');
const multer = require('multer');
const Photo = require('../models/photo');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/upload-photo', upload.single('photo'), async (req, res) => {
  try {
    const newPhoto = new Photo({
      title: req.body.title,
      path: `/uploads/${req.file.filename}`,
      activity: req.body.activity
    });
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload photo' });
  }
});

router.get('/recent-photos', async (req, res) => {
  try {
    const photos = await Photo.find().sort({ dateUploaded: -1 }).limit(10);
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recent photos' });
  }
});

module.exports = router;
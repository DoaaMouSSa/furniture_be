const multer = require('multer');
const path = require('path');

// Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory to save files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp to avoid name conflicts
  }
});

// Create the multer instance with the storage configuration
const upload = multer({ storage: storage });

module.exports = upload;

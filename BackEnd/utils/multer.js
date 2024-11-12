const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Allowed file types (for validation)
const allowedFileTypes = /jpeg|jpg|png|gif/;

function checkFileType(file, cb) {
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Error: Images only! (jpeg, jpg, png, gif)'));
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = 'uploads/other';
        if (req.baseUrl.includes('cars')) {
            folder = 'uploads/cars';
        } else if (req.baseUrl.includes('users')) {
            folder = 'uploads/users';
        }

        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true });
        }

        cb(null, folder);
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + Math.random().toString(36).substring(7) + path.extname(file.originalname);
        cb(null, fileName);
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
});

module.exports = upload;

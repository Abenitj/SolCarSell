// middleware/multerErrorHandler.js
const multerErrorHandler = (err, req, res, next) => {
    if (err) {
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
            return res.status(400).json({
                error: 'Exceeded the number of allowed file uploads. Maximum is 10 files.',
            });
        }
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                error: 'File size exceeds the 5MB limit.',
            });
        }
        // Handle any other Multer-specific errors
        return res.status(500).json({ error: err.message });
    }
    next();
};

module.exports = multerErrorHandler;

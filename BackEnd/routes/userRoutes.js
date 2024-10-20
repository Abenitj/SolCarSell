const express = require('express');
const { login, logout, resetPassword, updatePassword, updateProfile, registerUser ,deleteUser,listUsers } = require('../controllers/userController');

const isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Forbidden' });
};

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/reset-password', resetPassword);
router.post('/update-password', updatePassword);
router.post('/update-profile', isAdmin, updateProfile);
router.post('/deleteUser/:id', deleteUser);
router.post('/register', registerUser);
router.get('/list',listUsers);

module.exports = router;

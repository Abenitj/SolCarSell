const User = require('../models/User');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const Joi = require('joi');

// Joi Schemas
const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
});

const resetPasswordSchema = Joi.object({
    email: Joi.string().email().required(),
});

const updatePasswordSchema = Joi.object({
    resetToken: Joi.string().required(),
    newPassword: Joi.string().min(6).required(),
});

const updateProfileSchema = Joi.object({
    username: Joi.string().min(3).max(30),
    email: Joi.string().email(),
});

// Controllers
exports.registerUser = async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// List all users
exports.listUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.status(200).json(users); // Return the list of users
    } catch (error) {
        console.error('Error fetching user list:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

exports.login = async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await user.correctPassword(password, user.password))) {
        return res.status(401).json({ message: 'Incorrect username or password' });
    }

    req.session.user = user;
    res.status(200).json({ message: 'Login successful', user });
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.status(200).json({ message: 'Logout successful' });
    });
};

exports.resetPassword = async (req, res) => {
    const { error } = resetPasswordSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const resetToken = await bcrypt.hash(user.email + Date.now(), 12);
        user.resetToken = resetToken;
        await user.save();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Password Reset',
            html: `<html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; }
                    .container { width: 100%; max-width: 600px; margin: auto; padding: 20px; background-color: #f4f4f4; }
                    .header { text-align: center; background-color: #007BFF; color: white; padding: 10px; }
                    h1 { color: #333; }
                    .button { display: inline-block; padding: 10px 20px; margin: 20px 0; background-color: #28a745; color: white; text-decoration: none; border-radius: 5px; }
                    .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; }
                    .security-note { font-size: 12px; color: #555; margin: 10px 0; }
                    .logo { max-width: 150px; margin: 10px 0; } /* Adjust logo size */
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://th.bing.com/th?id=OIP.2BRrS9aj8WkHXI2dP856kgHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Car Sell Company Logo" class="logo">
                        <h1>Password Reset Request</h1>
                    </div>
                    <p>Hello,</p>
                    <p>We received a request to reset your password. Please click the button below to reset your password:</p>
                    <a href="http://your-website.com/reset-password?token=${resetToken}" class="button">Reset Password</a>
                    
                    <p class="security-note">For your security, please make sure your new password is at least 8 characters long and includes a mix of letters, numbers, and special characters.</p>
                    
                    <p>If you did not request this change, please ignore this email.</p>
                    
                    <footer class="footer">
                        <p>&copy; 2024 Your Company. All rights reserved.</p>
                        <p><a href="http://your-website.com">Visit Our Website</a></p>
                        <p>If you have any questions, please contact our support team at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.</p>
                    </footer>
                </div>
            </body>
            </html>
             `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Failed to send email', error: error.message });
            }
            res.status(200).json({ message: 'Password reset token sent to email' });
        });
    } catch (err) {
        console.error('Error in resetPassword:', err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};

exports.updatePassword = async (req, res) => {
    const { error } = updatePasswordSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { resetToken, newPassword } = req.body;
    const user = await User.findOne({
        resetToken,
        resetTokenExpires: { $gt: Date.now() }, // Check if token is not expired
    });

    if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token' });
    }

    user.password = await bcrypt.hash(newPassword, 12);
    user.resetToken = undefined; 
    user.resetTokenExpires = undefined; 
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
};

exports.updateProfile = async (req, res) => {
    const { error } = updateProfileSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { username, email } = req.body;
    const user = await User.findById(req.session.user._id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully', user });
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: [true, 'Username is required'], unique: true },
    password: { type: String, required: [true, 'Password is required'] },
    email: { type: String, required: [true, 'Email is required'], unique: true },
    role: { type: String, default: 'user' },
    resetToken: { type: String }, // For password reset functionality
    resetTokenExpires: { type: Date }, // Expiration for reset token
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Ensure only one admin exists
userSchema.pre('save', async function (next) {
    const User = mongoose.model('User', userSchema);
    if (this.role === 'admin') {
        const adminExists = await User.exists({ role: 'admin' });
        if (adminExists) {
            const error = new Error('There can only be one admin');
            return next(error);
        }
    }
    next();
});

// Compare passwords
userSchema.methods.correctPassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;

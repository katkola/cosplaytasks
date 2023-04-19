const mongoose = require('mongoose');

// near the top is a good place to group our imports
const bcrypt = require('bcrypt');
// this should go after 
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        minLength: 1,
        require: [true, "email is required"]
    },
    username: {
        type: String,
        minLength: 1,
        require: [true, "Username is Required"]
    },
    password: {
        type: String,
        minLength: 1,
        require: [true, "Password is Required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
    }
}, { timestamps: true });
// add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});
module.exports = mongoose.model('User', UserSchema);
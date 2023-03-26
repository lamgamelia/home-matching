const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/User');

module.exports = {
    Mutation: {
        async register(_, {
            registerInput: { username, email, password, confirmPassword }
        }) {
            encryptedPassword = await bcrypt.hash(password, 12);
            const newUser = new User({
                email,
                username,
                password: encryptedPassword.toLowerCase(),
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();
            console.log(res);
            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, "SECRET_KEY", { expiresIn: '1h' });
            
            return {
                ...res._doc,
                id: res._id,
                token
            };
        }
    }
};
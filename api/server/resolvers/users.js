const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { UserInputError } = require('apollo-server-express');

const User = require('../model/User');
const { validateRegisterInput, validateLoginInput } = require('../util/validators');

function generateToken(user){
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username
    }, "SECRET_KEY", { expiresIn: '1h' });
}

module.exports = {
    Mutation: {
        async login(_, { username, password }){
            const {errors, valid} = validateLoginInput(username, password);

            if(!valid){
                throw new UserInputError('Errors', { errors });
            }
            
            const user = await User.findOne({ username });

            if(!user){
                errors.general = 'User not found';
                throw new UserInputError('User not found', { errors });
            }

            const match = await bcrypt.compare(password, user.password);
            if(!match){
                errors.general = 'Wrong credentials';
                throw new UserInputError('Wrong credentials', { errors });
            }

            const token = generateToken(user);

            return {
                ...user._doc,
                id: user._id,
                token
            };
        },
        async register(_, {
            registerInput: { username, email, password, confirmPassword }
        }) {
            //Validate user data
            const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword);
            if (!valid){
                throw new UserInputError('Errors', { errors });
            }
            //Make sure user doesn't already exist
            const user = await User.findOne({ username })
            if (user){
                throw new UserInputError('Username is taken', {
                    errors: {
                        username: 'This username is taken'
                    }
                })
            }
            password = await bcrypt.hash(password, 12);
            const newUser = new User({
                email: email.toLowerCase(),
                username,
                password,
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();
            console.log(res);
            const token = generateToken(res);
            
            return {
                ...res._doc,
                id: res._id,
                token
            };
        }
    }
};
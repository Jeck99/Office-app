const users = require('../models/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {
        if (users.exists(req.body.email) == true) return res.status(400).json({ message: 'Email already exists' });
        bcrypt.hash(req.body.password, 10, async (err, hashPassword) => {
            if (err) return res.status(500).json({ message: 'Error' });
            req.body.password = hashPassword;
            await users.create(req.body)
                .then(result => res.status(200).json({ massage: "user added successfully", result }))
                .catch(err => res.status(500).json(err));
        })
    },
    login: async (req, res) => {
        if (users.exists(req.body.email) == false) return res.status(400).json({ message: 'Email not found' });
        try {
            const user = await users.findOne({ email: req.body.email });
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err) return res.status(500).json({ message: 'Error' });
                if (!isMatch) return res.status(400).json({ message: 'Password incorrect' });
                const token = jwt.sign({user}, process.env.SECRET_KEY, { expiresIn: '1h' });
                return res.status(200).json({ message: 'Login successful', token });
            })
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

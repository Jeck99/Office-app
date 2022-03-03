require('dotenv').config();
const express = require('express');
require('./DB');
const cors = require('cors');
const employeeRouter = require('./routes/employees-route');
const userRouter = require('./routes/user-route');
const passport = require("passport");
require("./config/passport")(passport);

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(process.env.PORT,
    () => console.log(`server is running on port ${process.env.PORT}`)
);

app.use(passport.initialize());
// app.get('/', (req, res) => res.send("server is running"));
app.use('/auth', userRouter);
app.use('/employees', passport.authenticate('jwt', { session: false }) ,employeeRouter);
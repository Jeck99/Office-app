require('dotenv').config();
const express = require('express');
require('./DB');
const cors = require('cors');
const employeeRouter = require('./routes/employees-route');
const app = express();
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT,
    () => console.log(`server is running on port ${process.env.PORT}`)
);
app.get('/', (req, res) => res.send("server is running"));
app.use('/employees', employeeRouter);
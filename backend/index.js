const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const bodyParser = require('body-parser')


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.get('/', (req, res) => {
    res.send(`Server is running on NodeJS:${port}`);
});
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import seedRouter from './routes/seedRoutes.js';
import data from './data.js';

dotenv.config();
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);

app.get('/api/tickets', (req, res) => {
  res.send(data.tickets);
});
// -----------------------------------------
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/services/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/services/build/index.html'))
);
// -----------------------------------------

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

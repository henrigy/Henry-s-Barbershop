import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://<username>:<password>@cluster0.fbm8mtg.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

// should check up on this -- may affect functionality
mongoose.set('strictQuery', false);

mongoose.connect(CONNECTION_URL).then(() => {
  console.log(`Server running on port: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// packages
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import koii from 'koii';

// local imports
import routes from './routes/index';

// variables
dotenv.config();
const baseUrl = '/v1';
const port = process.env.PORT || 3000;

// initialize express server
const app = express();

// Express inbuilt body parser
app.use(express.json());
app.use(cors());
app.use(compression()); // Compress all routes
app.use(helmet()); // Security middleware

// bodyParser for access to req body
app.use(bodyParser.urlencoded({ extended: true }));

// Routes with base URl
app.use(`${baseUrl}`, routes);

app.get('/', (req, res) => {
  res.send('Welcome to bull');
});

// displays endpoints when the server starts
app.use(koii);

// catch invalid routes
app.all('*', (req, res) => {
  res.status(404).json({
    error: 'This route does not exist yet!',
  });
});

// eslint-disable-next-line no-console
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}...`));
}

export default app;

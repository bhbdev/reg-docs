import * as express from 'express';
import * as bodyParser  from 'body-parser';
import { sequelize } from './database';
import { regdocs } from './routes/regdocRouter';

const hostname = 'orion';
const port = 3000;
const server = express();

server.use(bodyParser.json());
//server.use(bodyParser.urlencoded({ extended: true }));

server.get('/api/', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Dude');
});

server.use(function(req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', 0);
  next();
});

const mysequelize = sequelize;

server.use('/api/regdocs', regdocs);


server.listen(port, hostname, () => {
  // connect to db
  console.log(`Server running at http://${hostname}:${port}/`);
});

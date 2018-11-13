import { Router } from 'express';
import { RegDoc } from '../models/regdoc';

export const regdocs = Router();

regdocs.get('/', (req, res, next) => {
  RegDoc
   .findAll({
     order: [
         ['id', 'ASC']
     ],
   })
   .then((data) => {
     return res.json(data);
   })
   .catch((err) => {
     console.log(err);
     return err;
   })
});


// get api/id
regdocs.get('/:id', async (req, res, next) => {
  try {
    const regdoc = await RegDoc.scope(req.query['scope']).findById(req.params['id']);
    res.json(regdoc);
  } catch(e) {
    next(e);
  }
});

// post new doc
regdocs.post('/', async (req, res, next) => {
  try {
    console.log('request: ' + JSON.stringify(req.body,null," "));
    const regdoc = await RegDoc.create<RegDoc>(req.body);
    res.status(201).json(regdoc);
  } catch(e) {
    next(e);
  }
});

// update api/id
regdocs.put('/:id', async (req, res, next) => {
  try {
    await RegDoc.update<RegDoc>(req.body, {where: {id: req.params['id']}});
    res.sendStatus(200);
  } catch(e) {
    next(e);
  }
});

// delete api/id
regdocs.delete('/:id', async (req, res, next) => {
  try {
    await RegDoc.destroy({where: {id: req.params['id']}});
    res.sendStatus(200);
  } catch(e) {
    next(e);
  }
});

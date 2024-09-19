const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');
const { client } = require('../server'); // Ensure client is imported if necessary


// middleware that helps with passing parameters to the url path parameters
router.param('collectionName', (req, res, next, collectionName) => {
  try {
    const db = client.db('phwanya-yanga'); // Specify the secondary database name
    req.collection = db.collection(collectionName);
    next();
  } catch (error) {
    console.error("Error loading collection:", error);
    res.status(500).json({ message: 'Error loading collection', error: error.message });
  }
});

// Define CRUD routes using controllers
router.post('/:collectionName', (req, res) => crudController.createItem(req.collection)(req, res));
router.get('/:collectionName', (req, res) => crudController.getItems(req.collection)(req, res));
router.get('/:collectionName/:id', (req, res) => crudController.getItemById(req.collection)(req, res));
router.put('/:collectionName/:id', (req, res) => crudController.updateItemById(req.collection)(req, res));
router.delete('/:collectionName/:id', (req, res) => crudController.deleteItemById(req.collection)(req, res));

module.exports = router;

const { ObjectId } = require('mongodb');
const { client } = require('../server');

// Create a new item in the specified collection
const createItem = (collection) => async (req, res) => {
   try {
      // Log incoming data
      console.log("Request body:", req.body);

      // Check if collection is properly set
      if (!collection) {
        return res.status(500).json({ message: 'Collection not found' });
      }

      // Insert the item and get the result
      const result = await collection.insertOne(req.body);

      // Respond with the inserted item ID
      res.status(201).json({ insertedId: result.insertedId });
    } catch (error) {
      console.error("Error creating item:", error);
      res.status(400).json({ message: error.message });
    }
};

// Get all items from the specified collection
const getItems = (collection) => async (req, res) => {
  try {
    const items = await collection.find().toArray();
    if (!items || items.length === 0) {
      const logDatabaseName = async () => {
  try {
    // Connect to the MongoDB client
    await client.connect();
    
    // Get the database instance
    const database = client.db(); // This gets the current database used in the connection

    // Log the database name
    console.log('Connected to database:', database.databaseName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the connection
    await client.close();
  }
};

// Call the function to log the database name
logDatabaseName();
      return res.status(404).json({ message: 'No items found' });
    }
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: 'Error fetching items', error: error.message });
  }
};

// Get a single item by ID from the specified collection
const getItemById = (collection) => async (req, res) => {
  try {
    const item = await collection.findOne({ _id: new ObjectId(req.params.id) });
    
    console.log(item)
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ message: 'Error fetching item', error: error.message });
  }
};

// Update an item by ID in the specified collection
const updateItemById = (collection) => async (req, res) => {
  try {
    // Validate the ObjectId
    const id = req.params.id;
     // Check if the provided ID is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    // Convert the ID to an ObjectId and log for debugging
    console.log('Valid ObjectId:', id);

    // Log the id and body for debugging
    console.log('Updating item with ID:', id);
    console.log('Update data:', req.body);

    // Perform the update operation
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(id)},   // Convert the ID to ObjectId
      { $set: req.body },          // Update with the request body
      { returnDocument: 'after' }  // Return the updated document after the update
    );

    // Log the result for debugging
    console.log('Update result:', result);

   if (!result) {
      console.log('Item not found:',);
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json('Updated successfully'); // Return the updated document
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(400).json({ message: 'Error updating item', error: error.message });
  }
};

const deleteItemById = (collection) => async (req, res) => {
  try {
    // Ensure that req.params.id is a valid ObjectId
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    // Convert the ID to an ObjectId
    const Id = new ObjectId(id);

    // Perform the delete operation
    const result = await collection.findOneAndDelete({ _id: Id });

    // Check if the document was found and deleted
    if (!result) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Respond with success message
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: 'Error deleting item', error: error.message });
  }
};


module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItemById,
  deleteItemById
};

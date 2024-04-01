const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser'); // Import body-parser
const Register = require('./models/register.model');
const Inventory = require('./models/inventory.model');
const Department = require('./models/department.model');
const Issue = require('./models/issue.model');
const app = express();
const uri = "mongodb+srv://padalasaibalaji95:qdu9QyIBJ0oIC3TO@cluster0.4tczzf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri)

  .then(() => {
    console.log('MongoDB Connected!');
    app.listen(3030, () => {
        console.log('Server running on port 3030');
    });
  })
  .catch((err) => {  
    console.log('MongoDB Connect Failed!', err);
  });


  app.get('/', (req, res) => {
    res.send("Sample GET request API");
});


app.use(cors());
const corsOptions = {
    origin: '*', // Allow only requests from this origin
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
app.use(cors(corsOptions));

// Use body-parser for parsing form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Register User
app.post('/api/register', async (req, res) => {
    try {
        const register = await Register.create(req.body);
        res.status(200).json(register);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login User
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Register.findOne({ email });
        console.log(user)

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




// Create a new inventory item
app.post('/api/inventory', async (req, res) => {
    try {
        const inventoryItem = await Inventory.create(req.body);
        res.status(201).json(inventoryItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Create a new Department item
app.post('/api/add/department', async (req, res) => {
    try {
        const departmentItem = await Department.create(req.body);
        res.status(201).json(departmentItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


//Create an issue 
app.post('/api/issue', async (req, res) => {
    try {
        const issueItem = await Issue.create(req.body);
        res.status(201).json(issueItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Update an inventory item based on the invoice number
app.put('/api/inventory/:invoiceNo', async (req, res) => {
    const invoiceNo = req.params.invoiceNo;
    const newData = req.body;

    try {
        // Find the inventory item by invoice number and update it with new data
        const updatedItem = await Inventory.findOneAndUpdate({ "Invoice No": invoiceNo }, newData, { new: true });

        if (!updatedItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }

        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Get all inventory items
app.get('/api/inventory', async (req, res) => {
    try {
        const inventoryItems = await Inventory.find();
        res.status(200).json(inventoryItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all departments
app.get('/api/departments', async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all issued items
app.get('/api/issues', async (req, res) => {
    try {
        const issuedItems = await Issue.find();
        res.status(200).json(issuedItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// Delete an issue by item name
app.delete('/api/issues/:itemName', async (req, res) => {
    const itemName = req.params.itemName;
    try {
        // Find the issue item by item name and delete it
        const deletedIssueItem = await Issue.findOneAndDelete({ itemName: itemName });

        if (!deletedIssueItem) {
            return res.status(404).json({ message: 'Issue item not found' });
        }

        res.status(200).json({ message: 'Issue item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// Delete an inventory item by invoice number
app.delete('/api/inventory/:invoiceNo', async (req, res) => {
    const invoiceNo = req.params.invoiceNo;
    try {
        // Find the inventory item by invoice number and delete it
        const deletedItem = await Inventory.findOneAndDelete({ invoiceNo: invoiceNo });

        if (!deletedItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }

        res.status(200).json({ message: 'Inventory item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Delete a department by lab name
app.delete('/api/departments/:labName', async (req, res) => {
    const labName = req.params.labName;
    try {
        // Find the department by lab name and delete it
        const deletedDepartment = await Department.findOneAndDelete({ labName: labName });

        if (!deletedDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }

        res.status(200).json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

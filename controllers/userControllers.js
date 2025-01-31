export const createUser = async (req, res) => {
    try {
      console.log('Request body:', req.body); // Log the request body
      const { name, email, password, provider = 'manual', picture = '' } = req.body;
  
      if (!name || !email || (provider === 'manual' && !password)) {
        console.log('Missing fields'); // Log missing fields
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const usersCollection = req.app.locals.db.collection('users'); // Ensure the collection name is correct
      console.log('Users collection:', usersCollection); // Log the users collection
  
      const existingUser = await usersCollection.findOne({ email });
  
      if (existingUser) {
        console.log('User already exists'); // Log existing user
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const newUser = { 
        name, 
        email, 
        password: provider === 'manual' ? password : null, // Store password only for manual signup
        provider, 
        picture, 
        clothes: [] 
      };
  
      const result = await usersCollection.insertOne(newUser);
      console.log('User created:', result); // Log the result of the insert operation
  
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error("❌ Error in createUser:", error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
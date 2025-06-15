// Test script to verify MongoDB connection
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('Error: MONGODB_URI is not defined in .env.local');
  console.log('Current environment variables:', process.env);
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    console.log('Connecting to MongoDB Atlas...');
    await client.connect();
    console.log('Connection successful!');
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    // List available databases
    const dbs = await client.db().admin().listDatabases();
    console.log('Available databases:');
    dbs.databases.forEach(db => console.log(` - ${db.name}`));
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

run().catch(console.dir); 
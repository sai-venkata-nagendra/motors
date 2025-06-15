import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    // Check MongoDB connection
    const client = await clientPromise;
    const isConnected = client.topology.isConnected();
    
    // Return health status
    res.status(200).json({
      status: 'ok',
      mongodb: isConnected,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({
      status: 'error',
      mongodb: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
} 
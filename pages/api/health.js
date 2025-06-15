import dbConnect from '../../lib/mongodb';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  try {
    // Check MongoDB connection using Mongoose
    await dbConnect();
    const isConnected = mongoose.connection.readyState === 1;
    
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
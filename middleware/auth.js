import jwt from 'jsonwebtoken';
import dbConnect from '../lib/mongoose';
import User from '../models/User';

export async function authenticateUser(req, res) {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { success: false, status: 401, message: 'No token, authorization denied' };
    }
    
    // Extract token
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return { success: false, status: 401, message: 'No token, authorization denied' };
    }
    
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Connect to database
      await dbConnect();
      
      // Get user from database
      const user = await User.findById(decoded.id).select('-password');
      
      if (!user) {
        return { success: false, status: 404, message: 'User not found' };
      }
      
      // Return user
      return { success: true, user };
    } catch (err) {
      console.error('Token verification error:', err);
      return { success: false, status: 401, message: 'Token is not valid' };
    }
  } catch (err) {
    console.error('Authentication error:', err);
    return { success: false, status: 500, message: 'Server error' };
  }
}

export function generateToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
} 
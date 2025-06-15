import dbConnect from '../../../lib/mongoose';
import User from '../../../models/User';
import { generateToken } from '../../../middleware/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, password, userId, loginId, role, mobile, addresses } = req.body;

  // Validate input
  if (!name || !email || !password || !userId || !loginId) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    // Connect to database
    await dbConnect();

    // Check if user already exists
    const userExists = await User.findOne({ 
      $or: [
        { email },
        { userId },
        { loginId }
      ]
    });

    if (userExists) {
      if (userExists.email === email) {
        return res.status(400).json({ message: 'Email already in use' });
      }
      if (userExists.userId === userId) {
        return res.status(400).json({ message: 'User ID already in use' });
      }
      if (userExists.loginId === loginId) {
        return res.status(400).json({ message: 'Login ID already in use' });
      }
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      userId,
      loginId,
      role: role || 'user',
      mobile,
      addresses: addresses || {
        present: {},
        permanent: {},
        office: {}
      }
    });

    // Create token
    const token = generateToken(user);

    // Send response
    res.status(201).json({
      message: 'User created successfully',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        userId: user.userId,
        loginId: user.loginId,
        role: user.role,
        mobile: user.mobile,
        createdAt: user.createdAt,
      },
      token,
    });
  } catch (error) {
    console.error('Signup error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
} 
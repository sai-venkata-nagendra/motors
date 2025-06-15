import { authenticateUser } from '../../../middleware/auth';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const auth = await authenticateUser(req, res);

    if (!auth.success) {
      return res.status(auth.status).json({ message: auth.message });
    }

    res.status(200).json({ user: auth.user });
  } catch (error) {
    console.error('User API error:', error);
    res.status(500).json({ message: 'Server error' });
  }
} 
import express from 'express';
import verifyUser from '../middleware/auth.middleware';

const AuthRouter = express.Router();
AuthRouter.get('/user', verifyUser, (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
      
        return res.status(200).json({ user: req.user });
    } catch (error) {
        console.error('Error fetching user:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

export default AuthRouter;
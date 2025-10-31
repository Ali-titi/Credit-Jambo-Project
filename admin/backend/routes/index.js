const express = require('express');
const adminController = require('../controllers/adminController');
const { protectAdmin } = require('../middlewares/adminAuth');

const router = express.Router();

// Auth routes
router.post('/auth/login', adminController.login);
router.get('/auth/profile', protectAdmin, adminController.getProfile);

// User management routes
router.get('/users', protectAdmin, adminController.getAllUsers);
router.get('/users/:userId', protectAdmin, adminController.getUserById);
router.put('/users/:userId/toggle-status', protectAdmin, adminController.toggleUserStatus);

// Device verification routes
router.get('/devices/pending', protectAdmin, adminController.getPendingVerifications);
router.post('/devices/verify', protectAdmin, adminController.verifyDevice);
router.post('/devices/revoke', protectAdmin, adminController.revokeDevice);

// Dashboard and analytics
router.get('/dashboard/stats', protectAdmin, adminController.getDashboardStats);
router.get('/transactions', protectAdmin, adminController.getAllTransactions);

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Admin API is running' });
});

module.exports = router;
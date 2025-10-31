const express = require('express');
const authController = require('../controllers/authController');
const savingsController = require('../controllers/savingsController');
const { protect, verifyDevice } = require('../middlewares/auth');
const { validate, sanitizeInput, registerSchema, loginSchema, transactionSchema } = require('../middlewares/validators');

const router = express.Router();

// Apply sanitization to all routes
router.use(sanitizeInput);

// Auth routes
router.post('/auth/register', validate(registerSchema), authController.register);
router.post('/auth/login', validate(loginSchema), authController.login);
router.get('/auth/profile', protect, verifyDevice, authController.getProfile);
router.post('/auth/logout', protect, authController.logout);

// Savings routes (all protected and require verified device)
router.post('/savings/deposit', protect, verifyDevice, validate(transactionSchema), savingsController.deposit);
router.post('/savings/withdraw', protect, verifyDevice, validate(transactionSchema), savingsController.withdraw);
router.get('/savings/balance', protect, verifyDevice, savingsController.getBalance);
router.get('/savings/transactions', protect, verifyDevice, savingsController.getTransactions);

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Client API is running' });
});

module.exports = router;
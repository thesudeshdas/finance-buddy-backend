import express from 'express';
const router = express.Router();

const accounts_controller = require('../controllers/accounts.controller');

router.get('/', accounts_controller.get_accounts_get);

router.post('/', accounts_controller.add_account_post);

router.delete('/', accounts_controller.delete_account_delete);

module.exports = router;

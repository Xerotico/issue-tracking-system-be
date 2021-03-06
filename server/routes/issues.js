'use strict';

const express = require('express');
const controller = require('../controllers/issues');

const router = express.Router();

router.get('/', controller.getIssuesByQuery);
router.get('/:issueId', controller.getIssue);
router.put('/:issueId', controller.editIssue);
router.post('/', controller.createIssue);
router.delete('/:issueId', controller.removeIssue);

module.exports = router;

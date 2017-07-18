import express from 'express';
import loader from '../loader';

const router = express.Router();

router.get('/', loader);

export default router;

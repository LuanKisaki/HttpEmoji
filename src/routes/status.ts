import { Router } from 'express';
import { getStatusDetails } from '../controllers/statusControler';

const router = Router();

router.get('/:code', getStatusDetails);

export default router;

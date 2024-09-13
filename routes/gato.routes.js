import { Router } from 'express';
import { getGatos, createGato, getGato, sendCorreo } from '../controller/gato.controller.js';

const router = Router();

router.get('/', getGatos);
router.post('/', createGato);
router.get('/:id', getGato);
router.post('/sendEmail', sendCorreo);



export default router;
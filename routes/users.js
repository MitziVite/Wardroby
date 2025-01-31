import express from 'express';
import {createUser} from '../controllers/userControllers.js'


const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/register', createUser);

export default router;
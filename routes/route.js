import express from 'express';
const router = express.Router();
import {
    home,
    teste,
    formulario
} from '../controllers/controller.js'
router.get('/', home)

//create do modelo time (create)
router.get('/teste', teste)
router.post('/formulario', formulario)
export default router
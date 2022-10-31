const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, validarToken } = require('../controllers/auth.controllers');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Crear usuario
router.post('/new', [
    check('nombre', 'El nombre es obligatorio').isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    validarCampos
] , crearUsuario );

//Login de usuario
router.post('/', [ 
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    validarCampos
    

] ,loginUsuario );

//Validar y revalidar token
router.get('/renew', validarJWT , validarToken);





module.exports = router;
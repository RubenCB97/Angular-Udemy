const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

//Crear usuario
const crearUsuario = async(req, res = response) => {
    
    const { name, email, password } = req.body;

    try {
        
        // Verificar correo único

        const usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe',
                
            })
        }
        //Crear usuario con el modelo
        const dbUser = new Usuario(req.body);

        // Hashear la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);
        // Generar el JWT
        const token = await generarJWT(dbUser.id, dbUser.name);
        // Crear usuario de db
        dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token

        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
        ok: false,
        msg: 'Por favor hable con el administrador'
    });
    }

    
};

//Login de usuario
const loginUsuario = async (req, res = response) => {
    
    const { email, password } = req.body;
    try {
        const dbUser = await Usuario.findOne({ email });

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            })
        }

        //Confirmar si la contraseña hace match
        const validPassword = bcrypt.compareSync(password, dbUser.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es válida'
            })
        }

        //Generar el JWT
        const token = await generarJWT(dbUser.id, dbUser.name);

        //Respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token
        })
    
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador',
            
        })
    }
}

    



//Validar y revalidar token
const validarToken = (req, res = response) => {
    
    
    const { uid, name } = req;
    return res.json({

        ok: true,
        uid,
        name
    });

    
}

module.exports = {
    crearUsuario,
    loginUsuario, 
    validarToken
}

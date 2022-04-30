const { response } = require('express')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const { generarJWT } = require('../helpers/jwt')

const crearUsuario = async (req, res = response) => {
    //data request
    const { email, pasword } = req.body
    // data 

    try {

        let usuario = await Usuario.findOne({ email })

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'usuario existe con ese correo'
            })
        }

        usuario = new Usuario(req.body)

        // encriptar contraseña

        const salt = bcrypt.genSaltSync()
        usuario.pasword = bcrypt.hashSync(pasword, salt)

        await usuario.save()

        //    Generear JWT

        const token = await generarJWT(usuario.id, usuario.name)

        res.status(201).json({
            "ok": true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'por favor hable con el admin del sistema'
        })
    }

}

const loginUsuario = async (req, res = response) => {
    //data request
    const { email, pasword } = req.body
    try {

        let usuario = await Usuario.findOne({ email })

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuaro no existe con este email'
            })
        }

        // consfirmar paswords

        const validPasword = bcrypt.compareSync(pasword, usuario.pasword)

        if (!validPasword) {
            return res.status(400).json({
                res: false,
                msg: ' Pasword incorrecto'
            })
        }

        //    Generear JWT

        const token = await generarJWT(usuario.id, usuario.name)

        res.json({
            "ok": true,
            uid: usuario.id,
            name: usuario.name,
            token
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin del sistema'
        })
    }

}

const revalidarToken = async (req, res) => {
    //data request 
    const { uid, name } = req

    const token = await generarJWT(uid, name)

    res.json({
        "ok": true,
        "uid": uid,
        "name": name,
        token,
    })

}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}
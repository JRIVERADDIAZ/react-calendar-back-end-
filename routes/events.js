//todas deven estar validadas por el jwt

/*
Event routes
/api/events
*/


const { Router } = require('express')

const router = Router()

const { validarJWT } = require('../middlewares/validar-jwt');
const { getEvento, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');


router.use(validarJWT)

// Crear un nuevo evento
router.post('/', [
    //middlewares
    check('title', 'titulo es obligatorio').not().isEmpty(),
    check('start', 'fecha inicio es obligatoria').custom(isDate),
    check('end', 'fecha final es obligatoria').custom(isDate)
], validarCampos,
    crearEvento)

//obtener eventos 
router.get('/', getEvento)

//Actualizando Evento
router.put('/:id',
[
    //middlewares
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom( isDate ),
    check('end','Fecha de finalización es obligatoria').custom( isDate ),
    validarCampos
],
 actualizarEvento
)

//Borrar Evento     
router.delete('/:id', eliminarEvento)


module.exports = router
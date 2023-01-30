const {Router} = require('express');
const { usuariosGet, usuariosPost , usuariosPut , usuariosPatch , usuariosDelete } = require('../controllers/usuarios');


const router = Router();


// Obtener datos
router.get('/', usuariosGet)

  // Actualizacion de datos
  router.put('/:id', usuariosPut)

  //Creacion de datos
  router.post('/', usuariosPost )

    // Borrar datos
  router.delete('/', usuariosDelete)


  router.patch('/', usuariosPatch)



module.exports = router;

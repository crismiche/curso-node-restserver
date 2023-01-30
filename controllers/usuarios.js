// es para obtener el autocompletado.
const {response, request} = require('express')

const usuariosGet = (req = request, res = response)=> {
    const {nombre, edad}= req.query;
    res.json({
        msg: "Get-Api- controllers", nombre,edad
    })
  }

  const usuariosPut =  (req, res = response)=> {
    const {id} = req.params;
    res.json({
        msg: "put-Api - controllers", id
    })
  }


  const usuariosPost = (req, res = response)=> {

    const {nombre, edad} = req.body
    res.json({
        msg: "post-Api - controlers", nombre, edad
    })
  }


  const usuariosDelete = (req, res = response )=> {
    res.json({
        msg: "delete-Api - controlers",
    })
  }


  const usuariosPatch = (req, res = response)=> {
    res.json({
        msg: "patch-Api - controlers"
    })
  }




  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,

  }
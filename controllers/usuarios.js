const {response,request} = require('express')


const usuariosPost = (req, res=response)=> {
const {name,age}= req.body;
    
    res.json({
        ok:true,
        name,age
    })
  }
const usuariosPut = (req, res=response)=> {
  const {id}=req.params
      res.json({
          ok:true,
          msg:'get API -controlador',
          id
      })
    }
const usuariosGet = (req=request, res=response)=> {
  const {q,nombre="EL Perro",apellido}=req.query;

    res.json({
        ok:true,
        q,
        nombre,
        apellido
    })
  }
const usuariosDelete = (req, res=response)=> {
    res.json({
        ok:true,
        msg:'delete API -controlador'
    })
  }

module.exports={
    usuariosPost,
    usuariosPut,
    usuariosGet,
    usuariosDelete
}
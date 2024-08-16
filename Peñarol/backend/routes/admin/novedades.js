var express = require('express');
var router = express.Router();
var novedadesmodel = require("../../models/novedadesmodel")

/* GET home page. */

router.get('/', async function(req, res, next) {
  var novedades = await novedadesmodel.getnovedades();
  res.render("admin/novedades",{ 
layout: "admin/layout", 
novedades
});

});

/*formulario */
router.get("/agregar", (req, res, next)=>{
  res.render("admin/agregar",{
    layout: "admin/layout"
  })
});


router.post("/agregar", async (req,res,next)=>{
  try {
    if (req.body.titulo !="" && req.body.subtitulo !="" && req.body.cuerpo !=""){
      await novedadesmodel.insertnovedad(req.body);
      res.redirect("/admin/novedades")
    }else{
      res.render("admin/agregar",{
        layout:"admin/layout",
        error:true,
        message:"Todos los campos son requeridos"
      })
    }
  }catch(error){console.log(error)
    res.render("admin/agregar",{
      layout:"admin/layout",
      error: true,
      message: "no se cargo la novedad"
    })
  }
})



module.exports = router;
var express = require("express");
var router = express.Router();
var novedadesmodel = require("./../models/novedadesmodel");
var cloudinary = require ("cloudinary").v2;
var nodemailer = require("nodemailer")
router.get("/novedades", async function (req,res,next){
    let novedades = await novedadesmodel.getnovedades();
    novedades = novedades.map(novedades =>{
        if (novedades.img_id){
            const imagen = cloudinary.url(novedades.img_id,{
                width: 300,
                height: 300,
                crop:"fill"

            });
            return{
                ...novedades,
                imagen
            }  
        }else{
            return{
                ...novedades,
                imagen:""
            }
        }
    });
    res.json(novedades);
});



router.post("/contacto", async(req, res)=>{
    const email ={
    to: "nicolas.cab@gmail.com",
    subject: "contacto web",
    html: `${req.body.nombre}se contacto a traves de la web y quiere mas informacion a este correo:${req.body.email}<br> Ademas, hizo el siguiente comentario:${req.body.comentario}
    <br> su tel es:${req.body.telefono}`
    }
var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS
    }
});
await transport.sendMail(email)
res.status(201).json({
    error:false,
    message:"Mensaje enviado"
});
});



module.exports = router;

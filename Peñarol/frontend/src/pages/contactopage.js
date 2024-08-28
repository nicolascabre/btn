import React from "react";
import { useState } from "react";
import axios from "axios";

const Contactopage = (props) =>{


    const initialForm={
        nombre:"",
        email:"",
        telefono:"",
        mensaje:""
    }
    const [sending, setSending]= useState (false);
    const [msg, setMsg]= useState("");
    const [formData, setFormData]= useState (initialForm);

    const handleChange = e =>{
        const {name, value}= e.target;
        setFormData(oldData=>({
            ...oldData,
            [name]:value
        }));
    }
    const handleSubmit= async e=>{
        e.preventDefault();
        setMsg("");
        setSending(true)
        const response = await axios.post("http://localhost:3000/api/contacto", formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm)
        }
    }


    return(
        <main className="holder contacto">
            <div className="columna">
                <h2>Complete el siguiente formulario</h2>
                <from action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label>
                            Nombre
                        </label>
                        <input type="text" name="nombre"value={formData.nombre} onChange={handleChange}  />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type=" text" name="telefono" value={formData.telefono}onChange={handleChange} />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="comentario" value={formData.comentario} onChange={handleChange}></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar" /></p>
                    

                    {sending? <p>Enviando...</p>:null}
                {msg?<p>{msg}</p>:null}
                </from>
                
                

            </div>

        </main>
    );
};
export default Contactopage;
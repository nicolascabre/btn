import { useState, useEffect } from "react";
import axios from "axios";
import Novedaditem from "../components/novedades/Novedaditem";

const Novedadespage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setnovedades] = useState([]);
  useEffect(() => {
    const cargarnovedades = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/novedades");
      setnovedades(response.data);
      setLoading(false);
    };
    cargarnovedades();
  }, []);
  return (
    <section className="holder">
      <h2>Novedades</h2>
      {loading ? (
        <p>cargando...</p>
      ) : (
        novedades.map(item =><Novedaditem
            key={item.id}
            title={item.titulo}
            subtitle={item.subtitulo}
            iamgen={item.imagen}
            body={item.cuerpo}
          />)
      )
    }
    </section>
  )
};

export default Novedadespage;

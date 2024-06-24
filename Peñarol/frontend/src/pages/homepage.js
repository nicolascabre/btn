import React from "react";

import "../styles/components/pages/homepague.css"

const Homepage = (props) =>{
    return(
        <main class="holder">
        <div class="imgen" >
          <img src="img/R.png" width="870" /> 
          </div>
        <div class="columnas">
          <div class="introduccion">
            <h2>Introduccion</h2>
            <p>
              El Club Atlético Peñarol es un club uruguayo de Montevideo, Uruguay.
              Toma su nombre del barrio Peñarol, ubicado al noroeste de la
              ciudad.13​ Actualmente se desempeña en la Primera División de
              Uruguay. Su origen data del 28 de septiembre de 1891, con el
              surgimiento del Central Uruguay Railway Cricket Club (conocido por
              su acrónimo CURCC).14​ Hubo un primer intento para cambiar el nombre
              a CURCC Peñarol, pero la directiva del CURCC rechazó la propuesta
              por 25 votos contra 12.7​ El 13 de diciembre de 1913 pasó a llamarse
              Peñarol, adoptando el nombre definitivo de Club Atlético Peñarol el
              12 de marzo de 1914.15​ Algunos investigadores, en cambio, sostienen
              que si bien Peñarol heredó del CURCC su tradición y existe una
              continuidad sociológica entre ambos, jurídicamente son dos
              instituciones diferentes, puesto que el CURCC siguió existiendo
              hasta el año 1915 (aunque como mera dependencia recreativa para los
              empleados de la empresa de ferrocarriles), y vendió sus bienes
              donando el dinero obtenido al Hospital Británico, y por lo tanto la
              fecha de fundación del club sería el 13 de diciembre de 1913. Este
              es el origen de la discusión sobre el decanato.16​17​
            </p>
          </div>
  
          <div class="noticias">
            <h2>Noticias flash</h2>
            <p>
              Peñarol celebró desde sus cuentas institucionales la victoria 2-0
              sobre Atlético Mineiro por la Copa Libertadores. Y lo hizo siguiendo
              la línea de Washington Aguerre, que sacó a relucir el parche de
              cinco títulos en una discusión con Hulk y se llevó la foto del
              perfil oficial.
            </p>
          </div>
         
        </div>
      </main>  
    );
}
export default Homepage;
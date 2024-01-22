import { ListGroup } from "react-bootstrap";
import ItemPeliculas from "./ItemPeliculas";

const Peliculas = ({peliculas, eliminarPelicula}) => {

    const titulo = peliculas.length === 0 ? "No hay péliculas" : "Tus péliculas favoritas";

  return (
    <ListGroup className="mt-5">
    <h2 className="text-center mb-3">{titulo}</h2>
    {peliculas.map((pelicula) => (
      <ItemPeliculas
        key={pelicula.id} 
        pelicula={pelicula} 
        eliminarPelicula={eliminarPelicula} 
        />
    ))}
  </ListGroup>
  )
}

export default Peliculas
import { useEffect, useState } from "react";
import { obtenerDesembarques } from "./services/api";
import ListaDesembarques from "./components/ListaDesembarques";

function App() {
  const [desembarques, setDesembarques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    obtenerDesembarques()
      .then(data => setDesembarques(data))
      .catch(() => setError("Error al cargar datos"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Panel de Desembarques</h1>
      <ListaDesembarques data={desembarques} />
    </div>
  );
}

export default App;
``
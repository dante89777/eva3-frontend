import { useState, useEffect } from "react";
import FilaDesembarque from "./FilaDesembarque";

function ListaDesembarques({ data }) {
  const [filtro, setFiltro] = useState("");

  const [prioritarios, setPrioritarios] = useState(() => {
    return JSON.parse(localStorage.getItem("prioritarios")) || [];
  });

  useEffect(() => {
    localStorage.setItem("prioritarios", JSON.stringify(prioritarios));
  }, [prioritarios]);

  const filtroSeguro = filtro.replace(/[^a-zA-Z0-9 ]/g, "");

  const filtrados = data.filter(d =>
    d.especie.toLowerCase().includes(filtroSeguro.toLowerCase()) ||
    d.estado.toLowerCase().includes(filtroSeguro.toLowerCase())
  );

  const togglePrioritario = (id) => {
    if (prioritarios.includes(id)) {
      setPrioritarios(prioritarios.filter(p => p !== id));
    } else {
      setPrioritarios([...prioritarios, id]);
    }
  };

  return (
    <div>
      <input
        placeholder="Filtrar por especie o estado"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      {filtrados.map(d => (
        <FilaDesembarque
          key={d.id}
          data={d}
          esPrioritario={prioritarios.includes(d.id)}
          toggle={togglePrioritario}
        />
      ))}
    </div>
  );
}

export default ListaDesembarques;
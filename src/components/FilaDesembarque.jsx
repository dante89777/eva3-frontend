function FilaDesembarque({ data, esPrioritario, toggle }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px",
      backgroundColor: esPrioritario ? "#ffeeba" : "#ffffff"
    }}>
      <h3>{data.especie}</h3>
      <p>Embarcación: {data.embarcacion}</p>
      <p>Fecha: {data.fecha}</p>
      <p>Kilos: {data.kilos}</p>
      <p>Estado: {data.estado}</p>

      <button onClick={() => toggle(data.id)}>
        {esPrioritario ? "Quitar prioridad" : "Marcar prioritario"}
      </button>
    </div>
  );
}

export default FilaDesembarque;
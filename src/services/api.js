export const obtenerDesembarques = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/desembarques`
    );

    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }

    return await response.json();

  } catch (error) {
    console.error("Error API:", error);
    throw error;
  }
};
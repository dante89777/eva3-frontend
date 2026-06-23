# EVA 3 - SPA React Desembarques

## Descripción

Aplicación Web SPA desarrollada en React que permite visualizar, filtrar y gestionar desembarques de una pesquera del Biobío.

La aplicación consume una API REST utilizando json-server y permite marcar registros como prioritarios utilizando Local Storage.

---

## Tecnologías utilizadas

- React (Vite)
- JavaScript (ES6)
- HTML + CSS
- json-server (API local)

---

## Elementos de React utilizados

- Componentes: Se separó la aplicación en ListaDesembarques y FilaDesembarque para organizar el código.
- Props: Permiten enviar datos entre componentes.
- useState: Se utiliza para manejar estados como datos, filtro y prioritarios.
- useEffect: Se utiliza para consumir la API al cargar la aplicación.
- JSX: Permite renderizar la interfaz de usuario.
- Eventos: Se usan eventos como onClick y onChange para interacción.

---

## Consumo de API

Se utiliza fetch con async/await para consumir el endpoint:

http://localhost:3001/desembarques

Se implementa manejo de errores en caso de fallo del servicio.

---

## Funcionalidades

- Visualización de desembarques
- Filtro por especie o estado
- Marcado de desembarques prioritarios
- Persistencia de datos con Local Storage
- Validación básica de entrada

---

## Seguridad aplicada

- Uso de variable de entorno (VITE_API_URL)
- Validación de datos ingresados por el usuario
- Manejo de errores en consumo de API
- Evita uso de datos sin sanitizar

---

## Uso de Inteligencia Artificial

Se utilizó GitHub Copilot para sugerencias de código, especialmente en el manejo de errores y estructura del fetch.

La sugerencia fue aceptada y adaptada para mejorar la seguridad del código.

---

## Análisis con SonarQube / SonarLint

Se utilizó SonarLint para analizar el código.

Hallazgos encontrados:

1. Falta de validación de props en componentes React (props validation missing).
Esto significa que no se están definiendo los tipos de datos esperados en los componentes.

No se corrigió este punto debido a que requiere el uso de PropTypes o TypeScript,
lo cual está fuera del alcance de esta evaluación.

2. Posible mejora en validación de entrada de usuario.
Se corrigió aplicando sanitización con expresiones regulares.

Estos hallazgos permitieron identificar mejoras de calidad y buenas prácticas en el código.


## Instrucciones de ejecución

1. Levantar la API:

```bash
npx json-server --watch db_CasoA_desembarques.json --port 3001
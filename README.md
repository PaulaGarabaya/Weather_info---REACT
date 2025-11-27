# Weather Info App

Una aplicación web en **React** que muestra el pronóstico del tiempo de los próximos días usando la API de **OpenWeather**. Incluye búsqueda por ciudad, tarjetas de clima por hora y visualización de iconos meteorológicos.

---

## Características

- Pronóstico extendido por días y horas.
- Búsqueda de ciudad personalizada.
- Iconos que representan el estado del tiempo.
- Uso de geolocalización para mostrar el clima de la ubicación actual (opcional).
- Diseño centrado y responsive.
- Manejo de estados y asincronía con `useState` y `useEffect`.
- Identificadores únicos para listas con `uuid`.

---

## Tecnologías

- React
- Axios
- OpenWeather API
- UUID
- CSS (para estilos)

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/weather-info.git
   cd weather-info
2. Instala dependencias:
   ```bash
    npm install
3. Crea un archivo .env en la raíz del proyecto y agrega tu API Key de OpenWeather:
   ```bash
    VITE_WEATHER_API_KEY=tu_api_key_aqui
4. Inicia la aplicación:
   ```bash
    npm run dev
La aplicación estará disponible en http://localhost:5173 (Vite).

## Estructura del Proyecto
src/
├── components/
│   ├── Main/
│   │   ├── WeatherList/
│   │   │   ├── WeatherList.jsx
│   │   │   └── WeatherCard.jsx
│   │   │   └── WeatherCard.css
├── App.jsx
├── main.jsx
└── index.css
- WeatherList.jsx: Componente principal que gestiona la búsqueda y la lista de pronósticos.
- WeatherCard.jsx: Componente que muestra la información horaria de un día.
- WeatherCard.css: Estilos para centrar y alinear la información meteorológica.

## Uso

La app carga por defecto el clima de Madrid o la ubicación actual si se habilita la geolocalización.
Escribe el nombre de una ciudad en el input y presiona Buscar.
Se actualizará la lista de tarjetas con el pronóstico del tiempo para los próximos días.
Cada tarjeta muestra:
- Día
- Hora
- Temperatura
- Estado del clima (condición o descripción)
- Icono representativo

## Proyecto:
- Link repositorio: https://github.com/PaulaGarabaya/Weather_info---REACT
- Link despliegue: https://69286b0536e0d8c90a747940--weathe-info.netlify.app/ 

## Autor
Paula Rodriguez Garabaya

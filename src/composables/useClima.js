export default function useClima() {



    const obtenerClima = ({ciudad, pais}) => {
      // Importando el Api kery
        const key = import.meta.env.VITE_API_KEY

      // Obtener la lat, long
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`

        console.log(url);

      // Obtener el clima
    }


    return {
        obtenerClima
    }
}
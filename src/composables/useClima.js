export default function useClima() {



    const obtenerClima = ({ciudad, pais}) => {
        console.log('Consultando clima ciudad...', ciudad);
        console.log('Consultando clima pais...', pais);
    }


    return {
        obtenerClima
    }
}
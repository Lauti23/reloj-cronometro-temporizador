import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Cronometro = () => {
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [milisegundos, setMilisegundos] = useState(0);

    const [inicio, setInicio] = useState(false);

    useEffect(() => {
        let intervalo;
        if(inicio) {
            intervalo = setInterval(() => {
                if(milisegundos < 9) {
                    setMilisegundos(milisegundos + 1);
                } else {
                    setMilisegundos(0);
                    if(segundos < 59) {
                        setSegundos(segundos + 1);
                    } else {
                        setSegundos(0);
                        if(minutos < 59) {
                            setMinutos(minutos + 1);
                        } else {
                            setMinutos(0);
                            setHoras(horas + 1);
                        }
                    }
                }
            }, 100)
        }
        return () => clearInterval(intervalo);
    })

    const reiniciarCronometro = () => {
        setHoras(0);
        setMinutos(0);
        setSegundos(0);
        setMilisegundos(0);
    }

    return (
        <>
            <ul className='flex flex-row justify-center py-10 px-20 text-white text-center text-9xl font-semibold'>
                <li className='basis-64'>{horas < 10 ? `0${horas}` : horas}</li>
                <li>:</li>
                <li className='basis-64'>{minutos < 10 ? `0${minutos}` : minutos}</li>
                <li>:</li>
                <li className='basis-64'>{segundos < 10 ? `0${segundos}` : segundos}</li>
                <li>:</li>
                <li className='basis-64'>{milisegundos}</li>
            </ul>
            <section className='py-10 px-20 flex flex-row justify-center text-white text-4xl'>
                {inicio ?
                    <button className='w-1/4 mx-5 p-5 hover:text-black hover:bg-white transition-all duration-150 ease-in rounded-lg' onClick={() => setInicio(false)}>PAUSAR</button>
                    :
                    <button className='w-1/4 mx-5 p-5 hover:text-black hover:bg-white transition-all duration-150 ease-in rounded-lg' onClick={() => setInicio(true)}>INICIAR</button>
                }
                {!inicio && (horas > 0 || minutos > 0 || segundos > 0 || milisegundos > 0) ?
                    <button className='w-1/4 mx-5 p-5 hover:text-black hover:bg-white transition-all duration-150 ease-in rounded-lg' onClick={() => reiniciarCronometro()}>REINICIAR</button>
                    :
                    <button className='invisible w-1/4 mx-5' onClick={() => reiniciarCronometro()}>REINICIAR</button>
                }
            </section>
            <section className='flex flex-row justify-evenly py-10 px-20 text-white text-5xl font-semibold'>
                <Link to='/' className='mx-5 p-5 w-1/4 text-center hover:text-black hover:bg-white transition-all duration-150 ease-in rounded-lg'>RELOJ</Link>
                <Link to='/temporizador' className='mx-5 p-5 w-1/4 text-center hover:text-black hover:bg-white transition-all duration-150 ease-in rounded-lg'>TEMPORIZADOR</Link>
            </section>
        </>
        
    )
}

export default Cronometro
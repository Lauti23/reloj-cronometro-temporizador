import './Temporizador.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Temporizador = () => {

    const [horas, setHoras] = useState("");
    const [minutos, setMinutos] = useState("");
    const [segundos, setSegundos] = useState("");

    const [inicio, setInicio] = useState(false);

    useEffect(() => {
        console.log("horas: " + horas + ", minutos: " + minutos + ", segundos: " + segundos);
        let intervalo;
        if(inicio) {
            intervalo = setInterval(() => {
                if(segundos > 1) {
                    setSegundos(segundos - 1);
                } else if (minutos > 0) {
                    setMinutos(minutos - 1);
                    setSegundos(59);
                } else if (horas > 0) {
                    setHoras(horas - 1);
                    setMinutos(59);
                    setSegundos(59);
                } else {
                    restart();
                    clearInterval(intervalo)
                }
            }, 1000)
        }
        return () => clearInterval(intervalo);
    })

    const handleInputChange = (e) => {
        if(!isNaN(e.target.value) && e.target.value >= 0 && e.target.value <= 59) {
            if(e.target.value.length < 3) {
                if(e.target.name == "horas") {
                    setHoras(e.target.value);
                } 
                if(e.target.name == "minutos") {
                    setMinutos(e.target.value);
                }
                if(e.target.name == "segundos") {
                    setSegundos(e.target.value);
                }
            }
        }
    }

    const avoidLetters = (e) => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            return;
        }
        if (!/[0-9\b]/.test(e.key)) {
            e.preventDefault();
        }
    } 
    
    const restart = () => {
        setHoras("");
        setMinutos("");
        setSegundos("");
    }

    return (
        <>
            <ul className='w-1/2 mx-auto flex flex-row text-white text-9xl font-semibold'>
                <li className='basis-1/3 text-center'><input name="horas" min="0" max="60" type="number" inputMode="numeric" pattern="[0-9]+" maxLength="2" placeholder='00' className='w-full bg-black text-center' value={horas} onKeyDown={avoidLetters} onChange={handleInputChange} /></li>
                <li>:</li>
                <li className='basis-1/3 text-center'><input name="minutos" min="0" max="60" type="number" inputMode="numeric" pattern="[0-9]+" maxLength="2" placeholder='00' className='w-full bg-black text-center' value={minutos} onKeyDown={avoidLetters} onChange={handleInputChange} /></li>
                <li>:</li>
                <li className='basis-1/3 text-center'><input name="segundos" min="0" max="60" type="number" inputMode="numeric" pattern="[0-9]+" maxLength="2" placeholder='00' className='w-full bg-black text-center' value={segundos} onKeyDown={avoidLetters} onChange={handleInputChange} /></li>
            </ul>
            <section className='w-1/2 mx-auto flex flex-row justify-center'>
                {inicio ?
                    <button className='mx-5 p-5 text-white basis-1/3 text-4xl hover:text-black hover:bg-white transition-all duration-150 ease-in rounded-lg' onClick={() => setInicio(false)}>PAUSAR</button>
                    :
                    <button className='mx-5 p-5 text-white basis-1/3 text-4xl hover:text-black hover:bg-white transition-all duration-150 ease-in rounded-lg' onClick={() => setInicio(true)}>INICIAR</button>
                }
                <button className='mx-5 p-5 text-white basis-1/3 text-4xl hover:text-black hover:bg-white transition-all duration-150 ease-in rounded-lg' onClick={() => restart()}>REINICIAR</button>
            </section>

            <section className='flex flex-row justify-evenly py-10 px-20 text-white text-5xl font-semibold'>
                <Link to='/' className='mx-5 p-5 w-1/4 text-center hover:text-black hover:bg-white transition-all duration-150 ease-in rounded-lg'>RELOJ</Link>
                <Link to='/cronometro' className='mx-5 p-5 w-1/4 text-center hover:text-black hover:bg-white transition-all duration-150 ease-in rounded-lg'>CRONÓMETRO</Link>
            </section>
        </>
    )
}

export default Temporizador
//TERMINAR TEMPORIZADOR
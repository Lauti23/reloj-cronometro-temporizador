import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Reloj = () => {

    const [horario, setHorario] = useState(new Date());
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [dia, setDia] = useState(0);
    const [mes, setMes] = useState(0);
    const [año, setAño] = useState(0);

    useEffect(() => {
            const intervalo = setInterval(() => {
            setHorario(new Date());
            setHoras(horario.getHours());
            setMinutos(horario.getMinutes());
            setSegundos(horario.getSeconds());
            setDia(horario.getDay());
            setMes(horario.getMonth());
            setAño(horario.getFullYear());
        }, 1000)
        return () => clearInterval(intervalo);
    }, [horario]);

    const obtenerDia = (indiceDia) => {
        switch (indiceDia) {
            case 0:
                return "Domingo";
            case 1:
                return "Lunes"
            case 2:
                return "Martes";
            case 3:
                return "Miercoles";
            case 4: 
                return "Jueves";
            case 5:
                return "Viernes";
            case 6:
                return "Sabado";
            default:
                break;
        }
    }

    const obtenerMes = (indiceMes) => {
        switch (indiceMes) {
            case 0:
                return "Enero";
            case 1:
                return "Febrero"
            case 2:
                return "Marzo";
            case 3:
                return "Abril";
            case 4: 
                return "Mayo";
            case 5:
                return "Junio";
            case 6:
                return "Julio";
            case 7:
                return "Agosto";
            case 8:
                return "Septiembre";
            case 9:
                return "Octubre";
            case 10:
                return "Noviembre";
            case 11:
                return "Diciembre";
            default:
                break;
        }
    }

    return (
        <>
            <h2 className='px-20 text-3xl text-white text-center'>{obtenerDia(dia)} {horario.getDate()} de {obtenerMes(mes)} de {año}</h2>
            <ul className='flex flex-row justify-center py-10 px-20 text-white text-center text-9xl font-semibold'>
                <li className='basis-64'>{horas < 10 ? `0${horas}` : horas}</li>
                <li>:</li>
                <li className='basis-64'>{minutos < 10 ? `0${minutos}` : minutos}</li>
                <li>:</li>
                <li className='basis-64'>{segundos < 10 ? `0${segundos}` : segundos}</li>
            </ul>
            <section className='flex flex-row justify-evenly py-10 px-20 text-white text-5xl font-semibold'>
                <Link to='/cronometro'><button className='mx-5'>CRONOMETRO</button></Link>
                <Link to='/temporizador'><button className='mx-5'>TEMPORIZADOR</button></Link>
            </section>
        </>
            
    )
}

export default Reloj
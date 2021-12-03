import React from 'react';
import './About.css';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function About() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
       
        <div>
            <h4 className="titulo">About App...</h4>
            <div className="contenedor"
            >
            <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
            >
                <div className="cuerpo">
                    <div className="contenido">
                       <h2>WApp</h2>
                       <h1 className="about-title">Weather App</h1>
                       <p>Wheater App es una aplicación que consulta información climática de la ciudad que desees buscar mediante la API openweathermap.org, la app fue creada en base a una tarea del Bootcamp Henry.</p>
                       <p></p>
                       <p>La base del Front End de la aplicación es creada usando: React JS, JavaScript, ES6, React Routing, Class, Hooks, Functional Components, CSS Modules, y algunas librerias como Bootstrap 5 y Sweetalert 2.</p>
                       <ul>
                           <li><a href="https://www.facebook.com/chardhm1/"><i className="fab fa-facebook-f"></i></a></li>
                           <li><a href="https://twitter.com/ChardHM"><i className="fab fa-twitter"></i></a></li>
                           <li><a href="https://instagram.com/ChardHM"><i className="fab fa-instagram"></i></a></li>
                           <li><a href="https://www.linkedin.com/in/chardhm/"><i className="fab fa-linkedin-in"></i></a></li>
                       </ul>
                    </div> 
                </div>
            </Container>
            </div>
        </div>
       
    )
}
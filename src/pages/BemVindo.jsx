import { useState, useEffect } from "react";
import SplineScene from "../components/SplineScene";
import LEDBackground from "../components/LEDBackground";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function BemVindo() {
  const messages = [
    { text: "Bem-vindo ao meu portfólio", color: "text-white" },
    { text: "Gabriel Cabral de Paula", color: "text-white" },
  ];

  const [currentMsg, setCurrentMsg] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    let interval;

    if (typing) {
      interval = setInterval(() => {
        const fullText = messages[currentMsg].text;
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(interval);
          setTyping(false);
        }
      }, 150);
    }

    return () => clearInterval(interval);
  }, [currentMsg, typing]);

  useEffect(() => {
    if (!typing) {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentMsg((prev) => (prev + 1) % messages.length);
        setTyping(true);
      }, 2000); 
      return () => clearTimeout(timeout);
    }
  }, [typing]);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#0C3153] to-black text-white overflow-hidden">
      <LEDBackground />

     <Link to="/portfolio" className="absolute top-6 left-6 w-18 h-18 sm:w-25 sm:h-25 md:w-25 md:h-25 lg:w-15 lg:h-15 object-contain rounded-full  z-20">
      <img
         src={logo}
          alt="Logo"
          />
       
      </Link>

      
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center">
          <SplineScene />

          <h1 className="text-3xl font-bold mt-2 sm:text-4xl sm:mt-3  md:text-5xl lg:text-4xl lg:mt-1 ">
            <span className={messages[currentMsg].color}>{displayedText}</span>
          </h1>

          <h3 className="mt-4 text-[16px]  sm:mt-5 sm:text-2xl md:text-3xl md:mt-5 lg:text-2xl lg:mt-2 text-white">
            Estudante de Análise e Desenvolvimento de Sistemas
          </h3>

          
          <div className="flex gap-8 mt-5 sm:mt-7 lg:mt-6">
            <a
              href="https://github.com/GabrielCabral111"
              target="_blank"
              rel="GitHub "
              className="text-4xl sm:text-6xl lg:text-4xl text-white hover:text-blue-500 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gabrielcabral-111gc/"
              target="_blank"
              rel="Linkedin "
              className="text-4xl sm:text-6xl lg:text-4xl  text-white hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/cabral111_?igsh=eDRkMzAwaWM1dHFp&utm_source=qr"
              target="_blank"
              rel="Instagram "
              className="text-4xl sm:text-6xl lg:text-4xl  text-white hover:text-blue-500 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          
          <div className="flex justify-center mt-6 sm:mt-10 lg:mt-3" >
            <Link
              to="/portfolio"
              className="px-6 py-2 sm:px-11 sm:py-4  text-2xl sm:text-3xl border-1 lg:px-6 lg:py-2 lg:text-[20px] lg:mt-4  border-white text-white rounded-3xl 
                         bg-transparent hover:text-blue-600 hover:border-blue-600 
                         transition duration-300"
            >
              Mais sobre mim
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BemVindo;

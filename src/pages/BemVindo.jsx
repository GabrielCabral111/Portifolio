import { useState, useEffect } from "react";
import SplineScene from "../components/SplineScene";
import LEDBackground from "../components/LEDBackground";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
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
      {/* Fundo animado de LEDs */}
      <LEDBackground />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center">
          <SplineScene />

          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            <span className={messages[currentMsg].color}>{displayedText}</span>
          </h1>

          <h3 className="mt-3 sm:text-xl">
            Estudante de Análise e Desenvolvimento de Sistemas
          </h3>

          {/* Ícones */}
          <div className="flex gap-8 mt-5">
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-blue-500 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gabrielcabral-111gc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-blue-500 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Botão */}
          <div className="flex justify-center mt-4">
            <Link
              to="/portfolio"
              className="px-6 py-2 border-2 border-white text-white rounded-lg 
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

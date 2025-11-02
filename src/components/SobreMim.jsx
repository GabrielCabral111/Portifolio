import SplineScene from "../components/SplineScene";
import { motion } from "framer-motion"; // para animação suave
import { Link } from "react-router-dom";

export default function SobreMim() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-gradient-to-b from-[#022253] to-[#3A366C] text-white ">
      {/* === IDEIA: Fundo com leve brilho atrás do robô === */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-500/20 blur-[120px] rounded-full"></div>

      {/* === Lado Esquerdo: Robo (ou componente SplineScene futuramente) === */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        {/* IDEA: substituir imagem do robô pelo componente <SplineScene /> depois */}
        <SplineScene />
      </motion.div>

      {/* === Lado Direito: Texto === */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex flex-col items-start justify-center text-left max-w-lg z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Sobre <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">mim</span>
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          Sou apaixonado por tecnologia, design e propósito. 
          Gosto de entender como as coisas funcionam e criar soluções que geram impacto positivo. 
          Tenho experiência com projetos que unem criatividade e lógica, sempre buscando melhorar a experiência das pessoas com a tecnologia.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Fora das telas, gosto de aprender coisas novas, explorar ideias e transformar desafios em oportunidades. 
          Cada projeto é uma chance de evoluir e deixar uma marca — com empatia, curiosidade e inovação.
        </p>

        {/* === Botão futuro (pode linkar com Projetos) === */}
        <Link
          to="/projetos"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-sky-400 rounded-xl font-medium hover:opacity-90 transition-all"
        >
          Ver meus projetos
        </Link>
      </motion.div>
    </section>
  );
}

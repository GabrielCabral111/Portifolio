import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Visualizacao() {
  return (
    <section
      id="visualizacao"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#031B34]"
    >
      {/* Fundo 3D do Spline */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/nB7rVQXLBxMAByIu/scene.splinecode" />
      </div>

      {/* === IDEIA: Texto flutuante ou chamada de transição === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-24 text-center text-white z-10"
      >
        <h2 className="   text-3xl md:text-4xl font-bold mb-2">
          Meus <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">Projetos</span>
        </h2>
        <p className="  text-gray-300 max-w-md mx-auto">
          Explore alguns dos meus trabalhos e criações que refletem minha paixão por tecnologia e design.
        </p>
      </motion.div>

      {/* === IDEIA FUTURA: Botão flutuante ou âncora de navegação === */}
      <a
        href="#projetos"
        className="absolute bottom-8 text-sky-400 font-semibold hover:text-white transition"
      >
        ↓ Ver meus projetos
      </a>
    </section>
  );
}

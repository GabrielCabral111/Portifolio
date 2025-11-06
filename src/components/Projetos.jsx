import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export default function Projetos() {
  const projetos = [
    {
      nome: "Respira coral",
      desc: "Site de conscientização sobre a importância das florestas e do ar puro para a vida no planeta.",
      img: "/images/respira.png",
      link: "https://exemplo.com/alcatteia",
    },
    {
      nome: "TerraXplore",
      desc: "Site didático, o projeto busca despertar a curiosidade científica e promover a conscientização sobre as causas e consequências desses fenômenos na Terra.",
      img: "/images/terra.png",
      link: " https://terraxplore.vercel.app/",
    },
    {
      nome: "Dengoo",
      desc: "Plataforma interativa criada para celebrar e valorizar quem amamos.",
      img: "/images/dengo.png",
      link: "https://dengoo-ten.vercel.app/",
    },
    {
      nome: "Alcatteia",
      desc: "Plataforma de gestão de equipes com foco em bem-estar e conexão entre líderes e times.",
      img: "/images/alca.png",
      link: "https://alcatteia.vercel.app",
    },
    {
      nome: "Em Produção",
      desc: "Kanban inteligente que entende o ritmo, o humor e o foco do usuário, ajudando a organizar tarefas de forma mais humana e adaptável.",
      img: "/images/embreve.png",
      link: "#",
    },
  ];

  const [index, setIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % projetos.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + projetos.length) % projetos.length);

  return (
   <section
  id="projetos"
  className="relative min-h-[300px] sm:min-h-screen w-full bg-gradient-to-b from-[#180c24] to-[#000000] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 py-10 sm:py-24"
>


      {/* Glow da mesa */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-purple-600/30 blur-[320px] rounded-full"></div>

      {/* === PAINEL HOLOGRÁFICO PARA DESKTOP === */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hidden sm:block relative z-10 bg-gradient-to-b from-[#24144A]/90 to-[#14082E]/90 border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(120,60,255,0.3)] backdrop-blur-3xl p-10 w-[95%] max-w-7xl perspective-[1000px] rotate-x-[8deg]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center">
          {projetos.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              className={`relative bg-[#0B001A]/80 border border-[#8A2BE2]/30 rounded-2xl overflow-hidden shadow-[inset_0_0_25px_rgba(130,0,255,0.25),0_0_20px_rgba(100,0,255,0.3)] hover:shadow-[0_0_40px_rgba(150,0,255,0.5)] backdrop-blur-lg transition-all duration-500 group`}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">
                  {proj.nome}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{proj.desc}</p>
                <span className="text-sky-400 font-semibold text-sm group-hover:text-purple-400 transition-colors">
                  Ver projeto →
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-purple-700/10 to-transparent rounded-2xl pointer-events-none"></div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* === CARROSSEL PARA MOBILE === */}
      <div className="sm:hidden relative z-10 flex flex-col items-center w-full max-w-md mt-8">
        <div className="relative w-full overflow-hidden">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0B001A]/80 border border-[#8A2BE2]/30 rounded-3xl shadow-[inset_0_0_25px_rgba(130,0,255,0.25),0_0_30px_rgba(100,0,255,0.4)] backdrop-blur-2xl overflow-hidden"
            onClick={() => setSelectedProject(projetos[index])}
          >
            <img
              src={projetos[index].img}
              alt={projetos[index].nome}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-white mb-1">
                {projetos[index].nome}
              </h3>
              
            </div>
          </motion.div>

          {/* Controles */}
          <div className="flex justify-between mt-10 w-full">
            <button 
            onClick={prevSlide} className="text-white text-2xl p-2 hover:text-purple-400 transition">
  <FaArrowLeft />
</button>

<button
 onClick={nextSlide} 
 className="text-white text-2xl p-2 hover:text-purple-400 transition">
  <FaArrowRight />
</button>
          </div>
        </div>
      </div>

      {/* === MODAL DETALHES DO PROJETO === */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#14082E]/90 border border-[#8A2BE2]/40 rounded-2xl p-6 max-w-sm w-full shadow-[0_0_40px_rgba(150,0,255,0.4)] text-center"
            >
              <img
                src={selectedProject.img}
                alt={selectedProject.nome}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl text-white font-bold mb-2">
                {selectedProject.nome}
              </h2>
              <p className="text-gray-300 text-sm mb-4">
                {selectedProject.desc}
              </p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-purple-700/60 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Ver Projeto →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luz inferior animada */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-500/30 blur-[100px] rounded-full"
      ></motion.div>
    </section>
  );
}

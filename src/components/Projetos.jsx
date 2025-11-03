import { motion } from "framer-motion";

export default function Projetos() {
  const projetos = [
    {
      nome: "Alcatteia",
      desc: "Plataforma de gestão de equipes com foco em bem-estar e conexão entre líderes e times.",
      img: "/images/alcatteia.png",
      link: "https://exemplo.com/alcatteia",
    },
    {
      nome: "Elevuz",
      desc: "Assistente bancário acessível para idosos e pessoas com deficiência visual.",
      img: "/images/elevuz.png",
      link: "https://exemplo.com/elevuz",
    },
    {
      nome: "Qual é a Boa?",
      desc: "Site de turismo acessível com mapa interativo e narração de trajetos.",
      img: "/images/qual-e-a-boa.png",
      link: "https://exemplo.com/qual-e-a-boa",
    },
    {
      nome: "Portfolio 3D",
      desc: "Experiência interativa com Spline e React, simulando ambientes 3D futuristas.",
      img: "/images/portfolio3d.png",
      link: "https://exemplo.com/portfolio3d",
    },
    {
      nome: "Insight Lab",
      desc: "Dashboard inteligente para análise de equipes e bem-estar organizacional.",
      img: "/images/insightlab.png",
      link: "https://exemplo.com/insightlab",
    },
  ];

  return (
    <section
      id="projetos"
      className="relative min-h-screen w-full bg-gradient-to-b from-[#180c24] to-[#000000] flex flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Glow da mesa */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-purple-600/30 blur-[320px] rounded-full"></div>

      {/* Painel holográfico */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-gradient-to-b from-[#24144A]/90 to-[#14082E]/90 border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(120,60,255,0.3)] backdrop-blur-3xl p-10 w-[95%] max-w-7xl perspective-[1000px] rotate-x-[8deg]"
      >
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center">
          {projetos.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              className={`relative bg-[#0B001A]/80 border border-[#8A2BE2]/30 rounded-2xl overflow-hidden shadow-[inset_0_0_25px_rgba(130,0,255,0.25),0_0_20px_rgba(100,0,255,0.3)] hover:shadow-[0_0_40px_rgba(150,0,255,0.5)] backdrop-blur-lg transition-all duration-500 group
                ${
                  // Centraliza os dois últimos itens (índices 3 e 4)
                  i >= 3 && "lg:col-span-1 lg:justify-self-center"
                }`}
            >
              {/* Imagem */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">{proj.nome}</h3>
                <p className="text-gray-300 text-sm mb-3">{proj.desc}</p>
                <span className="text-sky-400 font-semibold text-sm group-hover:text-purple-400 transition-colors">
                  Ver projeto →
                </span>
              </div>

              {/* Glow interno */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-700/10 to-transparent rounded-2xl pointer-events-none"></div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Luz inferior animada */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-500/30 blur-[100px] rounded-full"
      ></motion.div>
    </section>
  );
}

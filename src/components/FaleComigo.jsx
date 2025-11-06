import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function FaleComigo() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .send(
        "service_4byv9b4",
        "template_xr6cc8h",
        {
          name: formData.nome,
          email: formData.email,
          message: formData.mensagem,
          time: new Date().toLocaleString("pt-BR"),
        },
        "3kHashnqieJHDjnkS"
      )
      .then(
        () => {
          setStatus("✅ Mensagem enviada com sucesso!");
          setFormData({ nome: "", email: "", mensagem: "" });
        },
        (error) => {
          console.error(error);
          setStatus("❌ Erro ao enviar. Tente novamente.");
        }
      );
  };

  return (
    <section
      id="fale-comigo"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#12031f] via-[#15052b] to-[#0a0013] text-white overflow-hidden px-8 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center w-full max-w-6xl">
        {/* FORMULÁRIO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#14082E]/70 border border-purple-700/40 backdrop-blur-xl shadow-[0_0_30px_rgba(140,60,255,0.3)] p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Fale <span className="text-purple-400">Comigo</span>
          </h2>

          <form onSubmit={sendEmail} className="flex flex-col space-y-5">
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome"
              required
              className="bg-transparent border border-purple-600/50 rounded-full px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="bg-transparent border border-purple-600/50 rounded-full px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400"
            />
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Mensagem"
              rows="4"
              required
              className="bg-transparent border border-purple-600/50 rounded-2xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-sky-500 text-white font-semibold py-3 rounded-full mt-2 shadow-[0_0_15px_rgba(140,60,255,0.5)] hover:shadow-[0_0_25px_rgba(140,60,255,0.8)] transition-all"
              type="submit"
            >
              Enviar
            </motion.button>
          </form>

          {status && (
            <p className="text-center mt-4 text-sm text-gray-300">{status}</p>
          )}
        </motion.div>

        {/* ANIMAÇÃO 3D */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5,  }}
          className="relative flex flex-col items-center justify-center text-center"
        >
          <div className="w-full h-[400px] md:h-[480px]">
            <Spline scene="https://prod.spline.design/wMJHDpJJZCnMppCi/scene.splinecode" />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[400px] h-[60px] bg-purple-500/30 blur-[80px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0a0013] via-[#12031f] to-[#15052b] text-gray-300  py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left space-y-4 md:space-y-0"
      >
        
        <div>
          <h3 className="text-lg font-semibold text-purple-400">
            © {new Date().getFullYear()} Gabriel Cabral
          </h3>
          <p className="text-sm text-gray-400">
            Desenvolvido com 💜 e React + Tailwind
          </p>
        </div>

       
        <div className="flex space-x-6 text-2xl">
          <motion.a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#a855f7" }}
            transition={{ duration: 0.3 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#a855f7" }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#a855f7" }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>

      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[80px] bg-purple-600/30 blur-[90px] rounded-full"></div>
    </footer>
  );
}
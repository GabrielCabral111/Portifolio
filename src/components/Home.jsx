"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import logo from "../assets/Logo.png";

import { FaUserAlt, FaCode, FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  // Nenhum botão selecionado por padrão
  const [active, setActive] = useState(null);

  const links = [
    { id: "sobre", label: "Sobre mim", icon: <FaUserAlt /> },
    { id: "projetos", label: "Projetos", icon: <FaCode /> },
    { id: "contato", label: "Contato", icon: <FaPhoneAlt /> },
  ];

  return (
    <section className=" w-full h-screen overflow-hidden">
      {/* Fundo 3D do Spline */}
      <div className=" ">
        <Spline scene="https://prod.spline.design/DtN4JPnelA2rkCe6/scene.splinecode" />
      </div>

      {/* Header fixo com logo e menu */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-center p-6 z-20">
        {/* Logo */}
        <Link to="/portfolio" className="absolute top-4 left-8 rounded-full">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-full"
          />
        </Link>

        {/* Navegação */}
        <nav className="relative flex items-center justify-center mt-4">
          <div className="flex bg-[#73A7BE]/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,200,255,0.4)] overflow-hidden">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setActive(link.id)}
                className={`relative px-8 py-3 text-sm font-medium flex items-center gap-2 transition-all duration-300
                  ${
                    active === link.id
                      ? "bg-[#001F3F] text-white shadow-[0_0_15px_3px_rgba(0,200,255,0.4)]"
                      : "text-white/90 hover:bg-[#113669] hover:text-white"
                  }`}
              >
                {link.label}
                <span className="text-lg">{link.icon}</span>

                {/* Indicador animado quando ativo */}
                {active === link.id && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-sky-400 rounded-full transition-all"></span>
                )}
              </button>
            ))}
          </div>
        </nav>
      </header>
    </section>
  );
}

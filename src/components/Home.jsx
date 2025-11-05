"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import logo from "../assets/Logo.png";
import { FaUserAlt, FaCode, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "sobre-mim", label: "Sobre mim", icon: <FaUserAlt /> },
    { id: "projetos", label: "Projetos", icon: <FaCode /> },
    { id: "fale-comigo", label: "Contato", icon: <FaPhoneAlt /> },
  ];

  return (
   <section id="home" className="relative w-full min-h-screen overflow-hidden flex flex-col">
  {/* Fundo 3D ajustado */}
  <div className=" absolute inset-0 w-full h-full z-0">
    <Spline scene="https://prod.spline.design/DtN4JPnelA2rkCe6/scene.splinecode" />
  </div>

  {/* Header fixo */}
  <header className="fixed top-0 left-0 w-full flex items-center justify-center p-6 z-20">
    {/* Logo */}
    <a href="#home" className="absolute top-4 left-8 rounded-full">
      <img
        src={logo}
        alt="Logo"
        className="w-15 h-15 sm:w-25 sm:h-25 object-contain rounded-full"
      />
    </a>

    {/* Botão hambúrguer (somente mobile) */}
    <button
      className="absolute right-8 top-6 text-white text-4xl md:hidden z-30"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>

    {/* Menu desktop */}
    <nav className="hidden md:flex relative items-center justify-center mt-4">
      <div className="flex bg-[#73A7BE]/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,200,255,0.4)] overflow-hidden">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
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

            {active === link.id && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-sky-400 rounded-full transition-all"></span>
            )}
          </a>
        ))}
      </div>
    </nav>

    {/* Menu mobile */}
    {menuOpen && (
      <div className="absolute top-20 right-8 flex flex-col bg-[#73A7BE]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,200,255,0.4)] overflow-hidden md:hidden">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => {
              setActive(link.id);
              setMenuOpen(false);
            }}
            className={`px-9 py-6 text-sm font-medium flex items-center gap-2 transition-all duration-300
            ${
              active === link.id
                ? "bg-[#001F3F] text-white shadow-[0_0_15px_3px_rgba(0,200,255,0.4)]"
                : "text-white/90 hover:bg-[#113669] hover:text-white"
            }`}
          >
            {link.label}
            <span className="text-lg">{link.icon}</span>
          </a>
        ))}
      </div>
    )}
  </header>
</section>

  );
}

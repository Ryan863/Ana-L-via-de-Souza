"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Heart, Sparkles } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl =
    "https://wa.me/5554984253363?text=" +
    encodeURIComponent(
      "Olá, Dra. Ana Lívia! Gostaria de tirar dúvidas e agendar uma consulta de fisioterapia pélvica."
    );

  const navLinks = [
    { label: "Áreas de Cuidado", href: "#areas" },
    { label: "Sobre a Dra.", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Locais de Atendimento", href: "#locais" },
    { label: "Dúvidas", href: "#duvidas" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F3EC]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(36,26,20,0.04)] border-b border-[#E3D8CA]/80 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex flex-col group transition-transform active:scale-98">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-xl sm:text-2xl text-[#241A14] font-semibold tracking-tight">
              Dra. Ana Lívia de Souza
            </span>
            <span className="text-xs text-[#C68670] opacity-80 group-hover:scale-110 transition-transform">
              ✨
            </span>
          </div>
          <span className="text-[0.72rem] tracking-widest uppercase font-medium text-[#7E6E62] transition-colors group-hover:text-[#241A14]">
            Fisioterapia Pélvica · Saúde da Mulher
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.92rem] font-medium text-[#59493E] hover:text-[#241A14] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#241A14] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#261C14] hover:bg-[#3D2D21] text-[#FAF6F0] text-sm font-medium transition-all shadow-[0_2px_10px_rgba(38,28,20,0.12)] hover:shadow-[0_4px_16px_rgba(38,28,20,0.18)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 text-[#E8D3C8]" />
            <span>Agendar Consulta</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
          className="lg:hidden p-2 rounded-full text-[#241A14] hover:bg-[#EAE2D5] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-[#E3D8CA] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#241A14] py-1 border-b border-[#EAE2D5]/60 hover:text-[#C68670] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#261C14] text-[#FAF6F0] text-sm font-medium shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#E8D3C8]" />
              <span>Agendar Consulta no WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

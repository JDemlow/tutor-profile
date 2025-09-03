"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isSpanish, setIsSpanish] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const content = {
    en: {
      name: "James Demlow",
      title: "Master English Through Real Conversations",
      subtitle:
        "I help Spanish speakers gain confidence in English with personalized conversation practice and cultural insights.",
      ctaButton: "Schedule Free Consultation",
      languageButton: "Español",
      stat1: "3+ Years",
      stat1Label: "Teaching Experience",
      stat2: "100+",
      stat2Label: "Students Helped",
      stat3: "B2 Level",
      stat3Label: "Spanish Speaker",
      // About section
      aboutTitle: "Why Choose Me as Your English Tutor?",
      aboutSubtitle:
        "I understand the unique challenges Spanish speakers face when learning English",
      aboutText1:
        "Having learned Spanish to a B2 level myself, I understand exactly what it's like to struggle with a new language. I know the common mistakes Spanish speakers make in English and how to help you overcome them naturally.",
      aboutText2:
        "My conversation-focused approach means we spend less time on boring grammar rules and more time actually speaking English in real situations. You'll gain confidence through practice, not memorization.",
      credential1Title: "TEFL Certified",
      credential1Desc:
        "120-hour Teaching English as Foreign Language certification",
      credential2Title: "University Degree",
      credential2Desc:
        "Bachelor's in Communications with focus on cross-cultural communication",
      credential3Title: "Bilingual Advantage",
      credential3Desc:
        "B2 level Spanish speaker who understands your learning journey",
    },
    es: {
      name: "James Demlow",
      title: "Domina el Inglés a Través de Conversaciones Reales",
      subtitle:
        "Ayudo a hispanohablantes a ganar confianza en inglés con práctica de conversación personalizada y conocimientos culturales.",
      ctaButton: "Programar Consulta Gratuita",
      languageButton: "English",
      stat1: "3+ Años",
      stat1Label: "Experiencia Enseñando",
      stat2: "100+",
      stat2Label: "Estudiantes Ayudados",
      stat3: "Nivel B2",
      stat3Label: "Hablo Español",
      // About section
      aboutTitle: "¿Por Qué Elegirme Como Tu Tutor de Inglés?",
      aboutSubtitle:
        "Entiendo los desafíos únicos que enfrentan los hispanohablantes al aprender inglés",
      aboutText1:
        "Habiendo aprendido español hasta nivel B2, entiendo exactamente lo que es luchar con un nuevo idioma. Conozco los errores comunes que cometen los hispanohablantes en inglés y cómo ayudarte a superarlos naturalmente.",
      aboutText2:
        "Mi enfoque centrado en la conversación significa que pasamos menos tiempo en reglas gramaticales aburridas y más tiempo hablando inglés en situaciones reales. Ganarás confianza a través de la práctica, no la memorización.",
      credential1Title: "Certificado TEFL",
      credential1Desc:
        "Certificación de 120 horas en Enseñanza de Inglés como Lengua Extranjera",
      credential2Title: "Título Universitario",
      credential2Desc:
        "Licenciatura en Comunicaciones con enfoque en comunicación intercultural",
      credential3Title: "Ventaja Bilingüe",
      credential3Desc:
        "Hablo español nivel B2 y entiendo tu proceso de aprendizaje",
    },
  };

  const currentContent = isSpanish ? content.es : content.en;

  const handleLanguageToggle = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsSpanish(!isSpanish);
      setTimeout(() => {
        setIsAnimating(false);
      }, 250);
    }, 250);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Language toggle button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={handleLanguageToggle}
          disabled={isAnimating}
          className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all duration-300 disabled:opacity-50 text-sm md:text-base border border-white/20 shadow-lg"
        >
          {currentContent.languageButton}
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content - Mobile First */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Glass card for main content */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-500 ${
                  isAnimating ? "blur-md" : "blur-none"
                }`}
              >
                {currentContent.name}
              </h1>

              <h2
                className={`text-xl md:text-2xl lg:text-3xl font-light text-blue-200 mb-8 transition-all duration-500 ${
                  isAnimating ? "blur-md" : "blur-none"
                }`}
              >
                {currentContent.title}
              </h2>

              <p
                className={`text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-500 ${
                  isAnimating ? "blur-md" : "blur-none"
                }`}
              >
                {currentContent.subtitle}
              </p>

              {/* CTA Button */}
              <button
                className={`bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl text-lg font-semibold transition-all duration-500 mb-12 w-full sm:w-auto shadow-xl hover:shadow-2xl hover:scale-105 ${
                  isAnimating ? "blur-md" : "blur-none"
                }`}
              >
                {currentContent.ctaButton}
              </button>

              {/* Trust Stats */}
              <div
                className={`flex flex-col sm:flex-row gap-8 justify-center lg:justify-start transition-all duration-500 ${
                  isAnimating ? "blur-md" : "blur-none"
                }`}
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {currentContent.stat1}
                  </div>
                  <div className="text-sm md:text-base text-gray-400">
                    {currentContent.stat1Label}
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {currentContent.stat2}
                  </div>
                  <div className="text-sm md:text-base text-gray-400">
                    {currentContent.stat2Label}
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {currentContent.stat3}
                  </div>
                  <div className="text-sm md:text-base text-gray-400">
                    {currentContent.stat3Label}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image - Mobile First */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl blur opacity-75 animate-pulse"></div>

              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src="/restaurant_resize.jpeg"
                  alt="James Demlow - English Tutor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  priority
                />
                {/* Subtle overlay for glass effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-4xl mx-auto">
              <h2
                className={`text-3xl md:text-5xl font-bold text-white mb-6 transition-all duration-500 ${
                  isAnimating ? "blur-md" : "blur-none"
                }`}
              >
                {currentContent.aboutTitle}
              </h2>
              <p
                className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-500 ${
                  isAnimating ? "blur-md" : "blur-none"
                }`}
              >
                {currentContent.aboutSubtitle}
              </p>
            </div>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div
              className={`backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10 ${
                isAnimating ? "blur-md" : "blur-none"
              }`}
            >
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {currentContent.aboutText1}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {currentContent.aboutText2}
              </p>
            </div>

            {/* Conversation focus card */}
            <div className="backdrop-blur-md bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-white/20 shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-6">💬</div>
                <p className="text-white font-semibold text-xl">
                  Conversation-Focused Learning
                </p>
                <p className="text-gray-300 mt-2">
                  Real practice, real confidence
                </p>
              </div>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={`backdrop-blur-md bg-white/5 hover:bg-white/10 p-8 rounded-2xl text-center transition-all duration-500 border border-white/10 shadow-2xl group ${
                isAnimating ? "blur-md" : "blur-none"
              }`}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🎓
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {currentContent.credential1Title}
              </h3>
              <p className="text-gray-300">{currentContent.credential1Desc}</p>
            </div>

            <div
              className={`backdrop-blur-md bg-white/5 hover:bg-white/10 p-8 rounded-2xl text-center transition-all duration-500 border border-white/10 shadow-2xl group ${
                isAnimating ? "blur-md" : "blur-none"
              }`}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                📚
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {currentContent.credential2Title}
              </h3>
              <p className="text-gray-300">{currentContent.credential2Desc}</p>
            </div>

            <div
              className={`backdrop-blur-md bg-white/5 hover:bg-white/10 p-8 rounded-2xl text-center transition-all duration-500 border border-white/10 shadow-2xl group ${
                isAnimating ? "blur-md" : "blur-none"
              }`}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🌎
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {currentContent.credential3Title}
              </h3>
              <p className="text-gray-300">{currentContent.credential3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

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
      // Services section
      servicesTitle: "How I Help You Master English",
      servicesSubtitle:
        "Choose the learning path that fits your goals and schedule",
      service1Title: "1-on-1 Conversation Practice",
      service1Desc:
        "Personalized sessions focused on real-world conversations and building confidence",
      service1Price: "From $35/hour",
      service2Title: "Business English",
      service2Desc:
        "Professional communication, presentations, and workplace vocabulary",
      service2Price: "From $45/hour",
      service3Title: "Pronunciation & Accent",
      service3Desc:
        "Targeted practice to improve clarity and reduce Spanish accent interference",
      service3Price: "From $40/hour",
      service4Title: "Exam Preparation",
      service4Desc:
        "TOEFL, IELTS, and other English proficiency test preparation",
      service4Price: "From $50/hour",
      service5Title: "Group Sessions",
      service5Desc:
        "Small group classes (2-4 students) for interactive learning",
      service5Price: "From $25/person",
      service6Title: "Flexible Online Learning",
      service6Desc: "Convenient video sessions that fit your busy schedule",
      service6Price: "All formats available",
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
      // Services section
      servicesTitle: "Cómo Te Ayudo a Dominar el Inglés",
      servicesSubtitle:
        "Elige el camino de aprendizaje que se adapte a tus objetivos y horario",
      service1Title: "Práctica de Conversación 1-a-1",
      service1Desc:
        "Sesiones personalizadas enfocadas en conversaciones del mundo real y construcción de confianza",
      service1Price: "Desde $35/hora",
      service2Title: "Inglés de Negocios",
      service2Desc:
        "Comunicación profesional, presentaciones y vocabulario del lugar de trabajo",
      service2Price: "Desde $45/hora",
      service3Title: "Pronunciación y Acento",
      service3Desc:
        "Práctica dirigida para mejorar la claridad y reducir la interferencia del acento español",
      service3Price: "Desde $40/hora",
      service4Title: "Preparación de Exámenes",
      service4Desc:
        "Preparación para TOEFL, IELTS y otras pruebas de competencia en inglés",
      service4Price: "Desde $50/hora",
      service5Title: "Sesiones Grupales",
      service5Desc:
        "Clases en grupos pequeños (2-4 estudiantes) para aprendizaje interactivo",
      service5Price: "Desde $25/persona",
      service6Title: "Aprendizaje Online Flexible",
      service6Desc:
        "Sesiones por video convenientes que se adaptan a tu horario ocupado",
      service6Price: "Todos los formatos disponibles",
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

      {/* Services Section */}
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
                {currentContent.servicesTitle}
              </h2>
              <p
                className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-500 ${
                  isAnimating ? "blur-md" : "blur-none"
                }`}
              >
                {currentContent.servicesSubtitle}
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Featured/Popular */}
            <div
              className={`backdrop-blur-md bg-gradient-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 p-8 rounded-2xl text-center border-2 border-blue-400/30 shadow-2xl group transition-all duration-500 relative ${
                isAnimating ? "blur-md" : "blur-none"
              }`}
            >
              {/* Popular badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>

              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💬
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {currentContent.service1Title}
              </h3>
              <p className="text-gray-300 mb-6">
                {currentContent.service1Desc}
              </p>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {currentContent.service1Price}
              </div>
            </div>

            {/* Service 2 */}
            <div
              className={`backdrop-blur-md bg-white/5 hover:bg-white/10 p-8 rounded-2xl text-center border border-white/10 shadow-2xl group transition-all duration-500 ${
                isAnimating ? "blur-md" : "blur-none"
              }`}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💼
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {currentContent.service2Title}
              </h3>
              <p className="text-gray-300 mb-6">
                {currentContent.service2Desc}
              </p>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {currentContent.service2Price}
              </div>
            </div>

            {/* Service 3 */}
            <div
              className={`backdrop-blur-md bg-white/5 hover:bg-white/10 p-8 rounded-2xl text-center border border-white/10 shadow-2xl group transition-all duration-500 ${
                isAnimating ? "blur-md" : "blur-none"
              }`}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🗣️
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {currentContent.service3Title}
              </h3>
              <p className="text-gray-300 mb-6">
                {currentContent.service3Desc}
              </p>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {currentContent.service3Price}
              </div>
            </div>

            {/* Service 4 */}
            <div
              className={`backdrop-blur-md bg-white/5 hover:bg-white/10 p-8 rounded-2xl text-center border border-white/10 shadow-2xl group transition-all duration-500 ${
                isAnimating ? "blur-md" : "blur-none"
              }`}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                📝
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {currentContent.service4Title}
              </h3>
              <p className="text-gray-300 mb-6">
                {currentContent.service4Desc}
              </p>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {currentContent.service4Price}
              </div>
            </div>

            {/* Service 5 */}
            <div
              className={`backdrop-blur-md bg-white/5 hover:bg-white/10 p-8 rounded-2xl text-center border border-white/10 shadow-2xl group transition-all duration-500 ${
                isAnimating ? "blur-md" : "blur-none"
              }`}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                👥
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {currentContent.service5Title}
              </h3>
              <p className="text-gray-300 mb-6">
                {currentContent.service5Desc}
              </p>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {currentContent.service5Price}
              </div>
            </div>

            {/* Service 6 */}
            <div
              className={`backdrop-blur-md bg-white/5 hover:bg-white/10 p-8 rounded-2xl text-center border border-white/10 shadow-2xl group transition-all duration-500 ${
                isAnimating ? "blur-md" : "blur-none"
              }`}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💻
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {currentContent.service6Title}
              </h3>
              <p className="text-gray-300 mb-6">
                {currentContent.service6Desc}
              </p>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {currentContent.service6Price}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl max-w-2xl mx-auto">
              <p className="text-lg text-gray-300 mb-6">
                Ready to start your English journey? Let&apos;s chat about your
                goals!
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                {currentContent.ctaButton}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

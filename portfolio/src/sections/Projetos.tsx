import { useState, useEffect } from "react";

export default function Projetos() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const projetos = [
    {
    id: 1,
    titulo: "Lavender",

    desc: "E-commerce desenvolvido com foco em experiência do usuário e integração com backend.",

    detalhe: "Um dos meus primeiros projetos independentes utilizando React, com estilização via Styled Components e integração com Supabase, explorando pela primeira vez o conceito de backend-as-a-service.",

    features: [
        "Interface de e-commerce responsiva",
        "Integração com Supabase",
        "Gerenciamento de produtos",
        "Estilização com Styled Components",
        "Organização de componentes reutilizáveis"
    ],

    status: "Projeto concluído, utilizado como base de aprendizado em integrações com backend.",

    tags: ["React", "Styled Components", "Supabase"],
    demo: "#",
    github: "https://github.com/Livia2710/Lavender",
    video: "./videos/Lavender.mp4",
    type: "web",
    },
    {
    id: 2,
    titulo: "Controle de Certificados",

    desc: "Sistema desenvolvido para gerenciamento de certificados acadêmicos.",

    detalhe: "Projeto criado para atender uma necessidade real da faculdade, permitindo o controle de horas de extensão. Desenvolvido em equipe, onde atuei no front-end enquanto o backend está sendo desenvolvido.",

    features: [
        "Interface para gerenciamento de certificados",
        "Organização de horas de extensão",
        "Desenvolvimento em equipe (front-end + back-end)",
        "Uso de Vite para performance",
        "Estilização com Tailwind CSS"
    ],

    status: "Frontend finalizado, backend em desenvolvimento.",

    tags: ["Vite", "Tailwind"],
    demo: "https://controle-certificados-peach.vercel.app/",
    github: "https://github.com/Livia2710/Controle_Certificados",
    video: "./videos/Controle_Certificados.mp4",
    type: "web",
    },
    {
    id: 3,
    titulo: "Papiro App",
    desc: "Plataforma de leitura digital com foco em experiência do usuário.",
    
    detalhe: "Aplicação web que simula uma biblioteca digital completa, com navegação estruturada, busca por título ou autor, categorização e sistema de destaques.",

    features: [
        "Leitura do primeiro capítulo",
        "Modo escuro",
        "Ajuste de tamanho de fonte",
        "Sistema de favoritos",
        "Biblioteca personalizada",
        "Leitura em voz (em desenvolvimento)"
    ],

    status: "Atualmente utiliza dados locais com planejamento de integração com Supabase.",

    tags: ["Expo", "React Native"],
    demo: "#",
    github: "https://github.com/Livia2710/Papiro_App",
    video: "./videos/Papiro_App.mp4",
    type: "mobile",
    },
    ];

    const next = () => setIndex((prev) => (prev + 1) % projetos.length);
    const prev = () => setIndex((prev) => (prev - 1 + projetos.length) % projetos.length);

    // Projeto que está aparecendo agora
    const projetoAtual = projetos[index];

    useEffect(() => {
    const handleScroll = () => {
    const section = document.getElementById("projetos");

    if (!section) return;

    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      setVisible(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return (
        <section id="projetos" className="min-h-screen px-6 md:px-12 lg:px-40 py-20 text-text">
            <h2 className="font-title text-3xl md:text-4xl text-center mb-12 text-gold">
                Meus Projetos
            </h2>

            {/* CONTAINER RELATIVO PARA AS SETAS */}
            <div className="relative flex items-center justify-center max-w-6xl mx-auto">

                {/* SETA ESQUERDA - Reposicionada para fora do card no desktop */}
                <button onClick={prev} className="hidden md:flex absolute -left-4 md:-left-12 z-10 p-2 text-3xl text-gray-400 hover:text-gold transition">
                    ←
                </button>

                {/* CARD PRINCIPAL (Agora dinâmico) */}
                <div className={` bg-bg-secondary rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 w-full min-h-[420px] shadow-lg border border-white/5 transition-all duration-700 ease-out
                   // Faz o card subir a aparecer suavemente quando entra na tela
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    
                    {/* IMAGEM (50% no Desktop) */}
                    <div className="w-full md:w-1/2 h-52 md:h-auto flex items-center justify-center rounded-xl overflow-hidden">
                        <video src={projetoAtual.video}
                        autoPlay={index === projetos.indexOf(projetoAtual)}
                        loop
                        muted
                        playsInline
                        className={`
                        className="w-full h-full aspect-video flex items-center justify-center rounded-xl overflow-hidden transition-all duration-700 delay-200
                        ${projetoAtual.type === "mobile"
                            ? "object-contain bg-black p-4 md:w-[280px] md:h-[470px] md:rounded-2xl md:border md:border-white/10 md:shadow-xl md:shadow-black/40"
                            : "object-cover"}
                        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                        `}/>
                    </div>

                    {/* CONTEÚDO (50% no Desktop) */}
                    <div className={`flex flex-col justify-between md:w-1/2 transition-all duration-700 delay-300
                        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                        <div>
                            <h3 className="font-title text-2xl md:text-3xl lg:text-4xl bg-gold-gradient bg-clip-text text-transparent text-shine-hover pb-2">{projetoAtual.titulo}</h3>
                            <p className="text-gray-300 text-base mb-4">{projetoAtual.desc}</p>
                            <p className="text-gray-400 text-sm italic mb-6">{projetoAtual.detalhe}</p>

                            {/* FEATURES */}
                            {projetoAtual.features && (
                            <div className="mb-6">
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                                Funcionalidades
                                </p>

                                <ul className="text-sm text-gray-400 space-y-1">
                                {projetoAtual.features.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    {item}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            )}
                                                        
                            {/* TAGS DINÂMICAS */}
                            <div className="flex gap-2 flex-wrap">
                                {projetoAtual.tags.map(tag => (
                                    // uppercadse faz o texto ficar em letras maiúsculas.
                                    //tracking-widest define o maior espaçamento possível entre as letras
                                    <span key={tag} className="text-[10px] text-gray-400 uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 hover:border-gold hover:text-gold transition">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* BOTÕES */}
                        <div className="flex gap-3 flex-wrap mt-6">
                            {/* VER PROJETO */}
                            {projetoAtual.demo !== "#" && (
                            <a href={projetoAtual.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shine border border-gold text-gold px-6 py-2 rounded-full hover:bg-gold hover:text-black transition text-center">
                            Ver Projeto
                             </a>
                            )}

                            {/* GITHUB */}
                             <a href={projetoAtual.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shine border border-gold text-gold px-6 py-2 rounded-full hover:bg-gold hover:text-black transition text-center">
                            Código
                             </a>
                        </div>

                        {/* STATUS */}
                        {projetoAtual.demo === "#" && (
                            <span className="text-xs text-gray-500 italic mt-2">Deploy em breve</span>
                        )}

                       
                    </div>
                </div>

                {/* SETA DIREITA */}
                <button onClick={next} className="hidden md:flex absolute -right-4 md:-right-12 z-10 p-2 text-3xl text-gray-400 hover:text-gold transition">
                    →
                </button>
            </div>

            {/* INDICADORES (Bolinhas) */}
            <div className="flex justify-center gap-3 mt-10">
                {projetos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2 transition-all duration-300 rounded-full ${
                            i === index ? "w-8 bg-gold" : "w-2 bg-gray-600"
                        }`}
                    />
                ))}
            </div>
        </section>
        
    )};

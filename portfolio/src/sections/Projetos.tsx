import { useState } from "react";

export default function Projetos() {
    const [index, setIndex] = useState(0);

    const projetos = [
    { 
        id: 1, 
        titulo: "Lavender",
        desc: "E-commerce completo com foco em experiência do usuário e integração com backend.",
        detalhe: "E-commerce com foco em UX, incluindo autenticação, carrinho, favoritos e integração com Supabase para dados e autenticação.",
        tags: ["React", "Styled Components", "Supabase"],
        demo: "#", // depois você coloca
        github: "https://github.com/Livia2710/Lavender",
        video:"./videos/Lavender.mp4",
        type: "web",
    },
    { 
        id: 2, 
        titulo: "Controle de Certificados",
        desc: "Sistema para organizar certificados acadêmicos.",
        detalhe: "Sistema criado para resolver uma necessidade real acadêmica, permitindo gerar certificados automaticamente e gerenciar horas de extensão.",
        tags: ["Vite", "Tailwind"],
        demo: "https://controle-certificados-peach.vercel.app/",
        github: "https://github.com/Livia2710/Controle_Certificados",
        video:"./videos/Controle_Certificados.mp4",
        web:"web",
    },
    { 
        id: 3, 
        titulo: "Papiro App",
        desc: "Aplicativo mobile em desenvolvimento.",
        detalhe: "Aplicativo mobile de leitura com foco em experiência do usuário, incluindo modo escuro, leitura por capítulos e personalização. Backend em desenvolvimento.",
        tags: ["Expo", "React Native"],
        demo: "#",
        github: "https://github.com/Livia2710/Papiro_App",
        video: "./videos/Papiro_App.mp4",
        type:"mobile",
    },
    ];

    const next = () => setIndex((prev) => (prev + 1) % projetos.length);
    const prev = () => setIndex((prev) => (prev - 1 + projetos.length) % projetos.length);

    // Projeto que está aparecendo agora
    const projetoAtual = projetos[index];

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
                <div className="bg-bg-secondary rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 w-full min-h-[420px] shadow-lg border border-white/5">
                    
                    {/* IMAGEM (50% no Desktop) */}
                    <div className="w-full md:w-1/2 h-52 md:h-auto flex items-center justify-center rounded-xl overflow-hidden">
                        <video src={projetoAtual.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`
                        w-full h-full
                        ${projetoAtual.type === "mobile"
                            ? "object-contain bg-black p-4 md:w-[280px] md:h-[470px] md:rounded-2xl md:border md:border-white/10 md:shadow-xl md:shadow-black/40"
                            : "object-cover"}
                        `}/>
                    </div>

                    {/* CONTEÚDO (50% no Desktop) */}
                    <div className="flex flex-col justify-between md:w-1/2">
                        <div>
                            <h3 className="font-title text-3xl mb-3 text-white">{projetoAtual.titulo}</h3>
                            <p className="text-gray-300 text-base mb-4">{projetoAtual.desc}</p>
                            <p className="text-gray-400 text-sm italic mb-6">{projetoAtual.detalhe}</p>
                            
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
    );
}

import { useState } from "react";

export default function Projetos() {
    const [index, setIndex] = useState(0);

    // Dados fake para testar a funcionalidade
    const projetos = [
        { 
            id: 1, 
            titulo: "E-commerce App", 
            desc: "Uma loja completa com carrinho e pagamentos.",
            detalhe: "Foco em performance e UX mobile-first.",
            tags: ["React", "Node", "Stripe"]
        },
        { 
            id: 2, 
            titulo: "Dashboard Financeiro", 
            desc: "Visualização de dados complexos com gráficos interativos.",
            detalhe: "Utilizei bibliotecas de gráficos avançadas.",
            tags: ["TypeScript", "Tailwind", "Chart.js"]
        },
        { 
            id: 3, 
            titulo: "Social Media API", 
            desc: "Backend robusto para uma rede social moderna.",
            detalhe: "Arquitetura limpa e escalável.",
            tags: ["Node.js", "MongoDB", "Docker"]
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
                <div className="bg-bg-secondary rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 w-full min-h-[400px] shadow-lg border border-white/5">
                    
                    {/* IMAGEM (50% no Desktop) */}
                    <div className="w-full md:w-1/2 h-52 md:h-auto bg-black/40 rounded-xl flex items-center justify-center text-gray-600 italic">
                        [ Preview: {projetoAtual.titulo} ]
                    </div>

                    {/* CONTEÚDO (50% no Desktop) */}
                    <div className="flex flex-col justify-between md:w-1/2">
                        <div>
                            <h3 className="font-title text-3xl mb-3 text-gold">{projetoAtual.titulo}</h3>
                            <p className="text-gray-300 text-base mb-4">{projetoAtual.desc}</p>
                            <p className="text-gray-500 text-sm italic mb-6">{projetoAtual.detalhe}</p>
                            
                            {/* TAGS DINÂMICAS */}
                            <div className="flex gap-2 flex-wrap">
                                {projetoAtual.tags.map(tag => (
                                    // uppercadse faz o texto ficar em letras maiúsculas.
                                    //tracking-widest define o maior espaçamento possível entre as letras
                                    <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-gold/30 text-gold/80">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a href="#" className="shine border border-gold text-gold px-6 py-2 w-full sm:w-40 rounded-full hover:bg-gold hover:text-black transition text-center">
                            Ver Projeto
                        </a>
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

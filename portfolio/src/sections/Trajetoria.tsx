import { useEffect, useState } from "react";

// Dados da sua trajetória 
const trajetoria = [
  {
    titulo: "SESI - Bolsa Integral",
    resumo: "Entrada no SESI como bolsista integral.",
    detalhe: "Após estudar toda a vida em escola pública, conquistei uma bolsa integral no SESI em 2022, marcando o início de uma nova fase acadêmica."
  },
  {
    titulo: "Técnico em Desenvolvimento",
    resumo: "Escolha da área e início na programação.",
    detalhe: "Durante o novo ensino médio, participei da integração SESI-SENAI e escolhi Desenvolvimento de Sistemas. A vaga foi definida por sorteio, e consegui entrar na área que escolhi, onde tive meu primeiro contato com programação."
  },
  {
    titulo: "Descoberta da área",
    resumo: "Crescimento e identificação com tecnologia.",
    detalhe: "Ao longo do curso técnico, desenvolvi projetos e me aprofundei na área, percebendo que queria seguir carreira em tecnologia."
  },
  {
    titulo: "Faculdade (ADS - SENAI)",
    resumo: "Aprovação com bolsa e início no ensino superior.",
    detalhe: "Fui aprovada no curso de ADS pelo SENAI como bolsista, com um programa que exige estágio, alta frequência e bom desempenho acadêmico, além de oferecer apoio financeiro."
  },
  {
    titulo: "Atualmente",
    resumo: "3º semestre e evolução contínua.",
    detalhe: "Atualmente estou no 3º semestre, consolidando meus conhecimentos e evoluindo como desenvolvedora a cada novo projeto."
  }
];

export default function Trajetoria() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Detecta quando o elemento entra na tela
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".timeline-item");

      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // Caso o elemento entra na tela(com uma margem de 100px)
        if (rect.top < window.innerHeight - 100) {
            // Então torna os elementos visiveis
          setVisibleItems((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="trajetoria" className="relative py-20  px-4">
      
      {/* TÍTULO */}
      <h2 className="font-title text-3xl md:text-4xl text-center mb-12 text-gold">
        Trajetória
      </h2>


      {/* CONTAINER */}
      <div className="flex flex-col gap-16 relative z-10">
        
      {/* LINHA CENTRAL */}
      <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gold transform -translate-x-1/2" />

        {trajetoria.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={index}
              className={`timeline-item flex w-full ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              
              {/* CARD */}
              <div
                className={`
                  w-[45%] p-6 rounded-2xl shadow-lg bg-bg-secondary text-text
                  transition-all duration-700 shine
                  
                  ${isVisible ? "opacity-100 translate-x-0" : ""}
                  
                  ${
                    !isVisible
                      ? isLeft
                        //Move para esquerda(numero negativo)
                        ? "-translate-x-20 opacity-0"
                        //Move para direita
                        : "translate-x-20 opacity-0"
                      : ""
                  }
                `}
              >
                <h3 className="text-xl font-title font-semibold mb-2">
                  {item.titulo}
                </h3>
                <p className="text-text text-sm">
                    {item.resumo}
                    </p>

                    <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="text-gold text-2xl mt-2"
                    >
                    <span
                    className={`inline-block transition-transform duration-300 text-md ${
                        // Rotaciona o +, quando abre, virando um x
                        openIndex === index ? "rotate-45" : ""
                    }`}
                    >
                    +
                    </span>
                    
                    </button>

                    <div
                    className={`
                        overflow-hidden transition-all duration-300
                        // Anima altira e opacidade ao abrir/fechar detalhe
                        ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                    `}
                    >
                    <p className="text-sm text-gray-400 mt-2">
                        {item.detalhe}
                    </p>
                    </div>

              </div>

              {/* BOLINHA NA LINHA */}
              {/* Para entender como isso está acontecendo vamos por parte
               1 left-1/2 move o elemento até metade da tela(1/2), 
                Mas isso posiciona o lado esquerdo do elemento no meio.Isso deixa ele "deslocado" -- Para quem tem TOC, dá gastura.
                Então, para consertar isso, a mágica acontece
               2 -translate-x-1/2, move o elemento metade do próprio tamanho pra esquerda, ficando PERFEITAMENTE centralizado
                 Sério, isso é muito bom,

              */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <div className={`w-4 h-4 bg-gold rounded-full border-4 border-zinc-900 transition-all duration-500
                        // Faz a bolinha "crescer" quando aparecer na tela
                        ${isVisible ? "scale-100" : "scale-0"}
                    `}
                    />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
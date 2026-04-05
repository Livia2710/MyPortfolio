import { useState, useEffect } from "react";

//Importando ícones
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava } from "react-icons/fa6";
import { SiTypescript, SiTailwindcss, SiVite, SiExpo, SiFigma } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

function TechItem({ name, icon}: { name: string, icon: React.ReactNode }) {
  return (
    // group permite aplicar efeitos de hover nos elementos internos (ícone)
    <div className="group flex flex-col items-center gap-3 p-4 w-40 h-40 bg-bg-secondary rounded-xl hover:scale-105 transition shine-border">
      {/* futuramente você coloca ícone aqui */}
      <div className="text-4xl md:text-5xl lg:text-6xl text-text group-hover:text-gold transition">{icon}</div>

      <span className="text-sm text-center">
        {name}
      </span>
    </div>
  )
}

export default function Tecnologias(){
    const [visible, setVisible] = useState(false);

    const [aba, setAbas] = useState("linguagens");

    useEffect(() => {
  const handleScroll = () => {
    const section = document.getElementById("tecnologias");
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

    return(
    <>
    <section id="tecnologias" className="min-h-screen px-6 md:px-12 lg:px-40 py-20 text-text">
         <h2 className="font-title text-3xl md:text-4xl text-center bg-gold-gradient bg-clip-text text-transparent text-shine-hover mb-12">Tecnologias</h2>

        {/* ABAS */}
        <div className="flex justify-center mb-[-1px]">
            <div className="flex gap-2">

                {/* BOTÃO LINGUAGENS */}
                <button onClick={()=> setAbas("linguagens")} 
                // rounded-t-xl aplica um arredondamento(rounded) extra largo(xl) apenas no topo(t)
                //border-b-0 remove especificamente a borde de baixo(b = bottom)
                className={`px-8 py-3 rounded-t-xl transition 
                ${aba === "linguagens" ? "bg-bg-secondary text-gold " : "bg-transparent text-text border-transparent hover:text-gold"}`}
                >
                    Linguagens
                </button>
                    
                {/* BOTÃO FERRAMENTAS */}
                <button onClick={()=> setAbas("ferramentas")}
                className={`
                px-8 py-3 rounded-t-xl transition
                ${aba === "ferramentas" ? "bg-bg-secondary text-gold" : "bg-transparent text-text border-transparent hover:text-gold"}`}    
                >
                    Ferramentas
                </button>
            </div>
        </div>

        {/* CONTEÚDO*/}
        {/* place-items-center centraliza elementos horizontalmente e verticalmente ao mesmo tempo*/}
        <div className="bg-bg-secondary rounded-2xl p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center transition-all duration-300 animate-[fadeIn_0.3s_ease]">
            {aba === "linguagens" && (
            <>
            <TechItem name="HTML" icon={<FaHtml5/>}/>
            <TechItem name="CSS" icon={<FaCss3Alt/>}/>
            <TechItem name="JavaScript" icon={<FaJs/>}/>
            <TechItem name="TypeScript" icon={<SiTypescript/>}/>
            <TechItem name="Python" icon={<FaPython/>}/>
            <TechItem name="Java" icon={<FaJava/>}/>
            </>
        )}

        {aba === "ferramentas" && (
            <>
            <TechItem name="Git" icon={<FaGitAlt/>}/>
            <TechItem name="Figma" icon={<SiFigma/>}/>
            <TechItem name="Tailwind" icon={<SiTailwindcss/>}/>
            <TechItem name="Expo" icon={<SiExpo/>}/>
            <TechItem name="Vite" icon={<SiVite/>}/>
            </>
        )}
        </div>
        
       
   
    </section>
    </>
    )
}
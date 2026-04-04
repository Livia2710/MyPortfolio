import { useState } from "react";

function TechItem({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center gap-3 p-4 w-40 h-40 bg-bg-secondary rounded-xl hover:scale-105 transition">
      {/* futuramente você coloca ícone aqui */}
      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-black rounded-full shine-border" />

      <span className="text-sm text-center">
        {name}
      </span>
    </div>
  )
}

export default function Tecnologias(){

    const [aba, setAbas] = useState("linguagens");

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
                className={`
                px-8 py-3 rounded-t-xl transition 
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
        <div className="bg-bg-secondary rounded-2xl p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
            {aba === "linguagens" && (
            <>
            <TechItem name="HTML"/>
            <TechItem name="CSS"/>
            <TechItem name="JavaScript"/>
            <TechItem name="TypeScript"/>
            <TechItem name="Python"/>
            <TechItem name="Java"/>
            </>
        )}

        {aba === "ferramentas" && (
            <>
            <TechItem name="Git"/>
            <TechItem name="Figma"/>
            <TechItem name="VS Code"/>
            <TechItem name="Expo"/>
            <TechItem name="Expo"/>
            <TechItem name="Vite"/>
            </>
        )}
        </div>
        
       
   
    </section>
    </>
    )
}
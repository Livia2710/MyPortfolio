import { useState } from "react";

export default function Tecnologias(){
    const [aba, setAbas] = useState("languages");
    return(
    <>
    <section id="tecnologias" className="min-h-screen bg-blue-500/20">
         <h1>Tecnologias</h1>

        <div className="flex gap-4 mb-6">
            <button onClick={()=> setAbas("languages")}>
                Linguagens
            </button>
        </div>

        <div className="flex gap-4 mb-6">
            <button onClick={()=> setAbas("tools")}>
                Ferramentas
            </button>
        </div>

        {aba === "languages" && (
            <div>HTML, CSS, JS, TS...</div>
        )}

        {aba === "tools" && (
            <div>Git, Figma, VSCode...</div>
        )}
   
    </section>
    </>
    )
}
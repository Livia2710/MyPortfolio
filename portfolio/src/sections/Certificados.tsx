import { useState } from "react"

export default function Certificados() {
  const [index, setIndex] = useState(1)

  const [selected, setSelected] = useState<string | null>(null)

  //Controle de drag (Arrastar)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const certificados = [
    {
      id:1,
      nome:"AWS Cloud Practitioner",
      img: "./certificados/Certificado_Implantação de Serviços em Nuvem - AWS Cloud Practitioner Foundationa.png",
    },
    {
      id:2,
      nome:"LGPD",
      img: "./certificados/Certificado_Privacidade e Proteção de Dados (LGPD).png",
    },
    {
      id:3,
      nome:"Web 3.0",
      img: "./certificados/Certificado_WEB 3.png",
    },
    {
      id:4,
      nome:"Python com Flask",
      img: "./certificados/Certificado_Minicurso de Python.png",
    },
]

  const next = () => {
    setIndex((prev) => (prev + 1) % certificados.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + certificados.length) % certificados.length)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
  setStartX(e.clientX)
  setIsDragging(true)
}

const handleMouseUp = (e: React.MouseEvent) => {
  if (!isDragging) return

  const diff = e.clientX - startX
 // Calcula o quanto o mouse se moveu no eixo X
// Se for positivo → arrastou pra direita
// Se for negativo → arrastou pra esquerda
// Usamos um limite (50px) pra evitar trocas acidentais
  if (diff > 50) prev()
  if (diff < -50) next()

  setIsDragging(false)
}
  return (
    <section
      id="certificados"
      className="min-h-screen px-6 md:px-12 lg:px-40 py-20 text-text"
    >
      {/* TÍTULO */}
      <h2 className="font-title text-3xl md:text-4xl text-center text-gold mb-16">
        Certificados
      </h2>

      {/* CONTAINER */}
      <div className="relative flex items-center justify-center">

        {/* SETA ESQUERDA */}
        <button
          onClick={prev}
          className="absolute left-0 text-2xl text-gray-400 hover:text-gold z-20"
        >
          ←
        </button>

        {/* CARROSSEL (STACK) */}

        {/* Alguns "classes" que achei interessante
         cursor-grab : icone do cursor de uma mão aberta
         active:cursor-grabbing : Quando o usuario clica e segura(active) o ícone muda para um mão fechada(como se estivesse agarrando algo)
        active:scale-[0.98], dá sensação de "pressionar ao arrastar" */}
        <div className="relative w-full max-w-5xl h-[320px] flex items-center justify-center cursor-grab active:cursor-grabbing active:scale-[0.98]"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}>

          {certificados.map((cer, i) => {
            // Define a posição relativa do item atual ao item central
            // 0 = item atual
            // -1 = item à esquerda
            // +1 = item à direita
            const position = i - index

            return (
              <div
                key={cer.id}
                className={`
                  absolute
                  transition-all duration-500 ease-in-out
                  
                      
                  w-[320px] md:w-[520px]
                  h-[200px] md:h-[300px]
                  
                  bg-[#e5e5e5]
                  rounded-md
                  shadow-lg
                `}
                style={{
                  // Move os cards lateralmente baseado na posição
                  // e reduz levemente o tamanho dos cards que não estão no centro
                  transform: `
                    translateX(${position * 90}px)
                    scale(${position === 0 ? 1 : 0.96})
                  `,
                  // Controla a visibilidade:
                  // centro = 100%
                  // laterais = 70%
                  // outros = invisíveis
                  opacity: 
                    position === 0 ? 1 : Math.abs(position) === 1 
                    ? 0.7 
                    : 0,
                  // Garante que o card central fique na frente dos outros
                  zIndex: 10 - Math.abs(position),
                }}
              >
                {/* Imagem do Certificado */}
                <img src={cer.img} alt={cer.nome} className="w-full h-full object-cover rounded-sm cursor-pointer" 
                onClick={() => setSelected(cer.img)}/>
                
              </div>
            )
          })}

        </div>

        {/* SETA DIREITA */}
        <button
          onClick={next}
          className="absolute right-0 text-2xl text-gray-400 hover:text-gold z-20"
        >
          →
        </button>

      </div>

      {selected && (
         <div
          className={`
            fixed inset-0
            flex items-center justify-center
            z-50
            transition-opacity duration-300
            ${selected ? "opacity-100 bg-black/80" : "opacity-0 pointer-events-none"}
          `}
          // Fecha apenas se clicar fora da imagem
          onClick={(e) => {
          if (e.target === e.currentTarget) {
            setSelected(null)
          }
        }}
        >
          
    

    {/* IMAGEM */}
    <img src={selected}
     className="max-w-[90%] max-h-[90%] object-contain rounded-md shadow-2xl transition-transform duration-300 scale-100 animate-[zoomIn_0.3s_ease]"/>

  </div>
)}
    </section>

    
  )
}
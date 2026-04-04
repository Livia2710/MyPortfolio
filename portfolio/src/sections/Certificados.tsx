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
        <div className="relative w-full max-w-5xl h-[320px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}>

          {certificados.map((cer, i) => {
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
                  transform: `
                    translateX(${position * 90}px)
                    scale(${position === 0 ? 1 : 0.96})
                  `,
                  opacity: 
                    position === 0 ? 1 : Math.abs(position) === 1 
                    ? 0.7 
                    : 0,
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
    className="
      fixed inset-0
      bg-black/80
      flex items-center justify-center
      z-50
    "
    onClick={() => setSelected(null)}
  >

    {/* IMAGEM */}
    <img
      src={selected}
      className="
        max-w-[90%]
        max-h-[90%]
        object-contain
        rounded-md
        shadow-2xl
      "
    />

    {/* BOTÃO FECHAR */}
    <button
      className="
        absolute top-6 right-6
        text-white text-2xl
      "
    >
      ✕
    </button>

  </div>
)}
    </section>

    
  )
}
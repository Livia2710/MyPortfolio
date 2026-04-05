import { useState, useEffect } from "react"

export default function Certificados() {
  const [index, setIndex] = useState(1)
  const [selected, setSelected] = useState<string | null>(null)

  // Controle de drag (arrastar)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Controle de animação de entrada
  const [visible, setVisible] = useState(false)

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

  // Navegação
  const next = () => {
    setIndex((prev) => (prev + 1) % certificados.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + certificados.length) % certificados.length)
  }

  // ANIMAÇÃO DE ENTRADA
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("certificados")
      if (!section) return

      const rect = section.getBoundingClientRect()

      // Quando a seção entra na tela
      if (rect.top < window.innerHeight - 100) {
        setVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // DRAG COM MOUSE
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX)
    setIsDragging(true)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return

    const diff = e.clientX - startX
    // diff = distância que o mouse percorreu

    if (diff > 50) prev()   // arrastou pra direita
    if (diff < -50) next()  // arrastou pra esquerda

    setIsDragging(false)
  }

  // DRAG MOBILE (TOUCH)
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return

    const diff = e.changedTouches[0].clientX - startX

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

      {/* CONTAINER COM ANIMAÇÃO */}
      <div
        className={`
          relative flex items-center justify-center
          transition-all duration-700
          
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >

        {/* SETA ESQUERDA */}
        <button
          onClick={prev}
          className="absolute left-0 text-2xl text-gray-400 hover:text-gold z-20"
        >
          ←
        </button>

        {/* CARROSSEL */}
        <div
          className="
            relative w-full max-w-5xl
            px-6 md:px-0   /* 🔥 respiro lateral no mobile */
            h-[320px]
            flex items-center justify-center

            cursor-grab
            active:cursor-grabbing
            active:scale-[0.98]
          "
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {certificados.map((cer, i) => {
            // posição relativa ao card central
            const position = i - index

            return (
              <div
                key={cer.id}
                className="
                  absolute
                  transition-all duration-500 ease-in-out

                  w-[260px] sm:w-[300px] md:w-[520px]  /* 🔥 responsivo */
                  h-[200px] md:h-[300px]

                  bg-[#e5e5e5]
                  rounded-md
                  shadow-lg
                "
                style={{
                  // movimento lateral + escala
                  transform: `
                    translateX(${position * 90}px)
                    scale(${position === 0 ? 1 : 0.96})
                  `,

                  // opacidade dos cards
                  opacity:
                    position === 0 ? 1
                    : Math.abs(position) === 1 ? 0.7
                    : 0,

                  // profundidade (quem fica na frente)
                  zIndex: 10 - Math.abs(position),
                }}
              >
                {/* IMAGEM */}
                <img
                  src={cer.img}
                  alt={cer.nome}
                  className="w-full h-full object-cover rounded-sm cursor-pointer"

                  onClick={() => {
                    // evita abrir ao arrastar
                    if (!isDragging) setSelected(cer.img)
                  }}
                />
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

      {/* MODAL */}
      {selected && (
        <div
          className={`
            fixed inset-0
            flex items-center justify-center
            z-50
            transition-opacity duration-300
            ${selected ? "opacity-100 bg-black/80" : "opacity-0 pointer-events-none"}
          `}
          // fecha só clicando fora
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelected(null)
            }
          }}
        >
          <img
            src={selected}
            className="
              max-w-[90%]
              max-h-[90%]
              object-contain
              rounded-md
              shadow-2xl
              transition-transform duration-300
              scale-100
              animate-[zoomIn_0.3s_ease]
              
            "
          />
        </div>
      )}
    </section>
  )
}
import { useState } from "react"

export default function Certificados() {
  const [index, setIndex] = useState(2)

  const certificados = [1, 2, 3, 4, 5]

  const next = () => {
    setIndex((prev) => (prev + 1) % certificados.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + certificados.length) % certificados.length)
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

        {/* STACK */}
        <div className="relative w-full max-w-3xl h-[220px] flex items-center justify-center">

          {certificados.map((_, i) => {
            const position = i - index

            return (
              <div
                key={i}
                className={`
                  absolute
                  transition-all duration-500
                  
                  w-72 h-40 md:w-96 md:h-52
                  bg-white/80
                  rounded-lg
                  shadow-lg
                `}
                style={{
                  transform: `
                    translateX(${position * 60}px)
                    scale(${position === 0 ? 1 : 0.95})
                  `,
                  opacity: Math.abs(position) > 1 ? 0 : 1,
                  zIndex: 10 - Math.abs(position),
                }}
              />
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
    </section>
  )
}
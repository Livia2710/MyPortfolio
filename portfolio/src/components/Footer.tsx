export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-white/5 mt-20">
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-40 py-10">

        {/* CONTEÚDO PRINCIPAL */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          {/* NOME + FRASE */}
          <div className="text-center md:text-left">
            <h3 className="font-title text-xl text-gold">
              Lívia Figueiredo
            </h3>
            <p className="text-gray-400 text-sm mt-2 max-w-sm">
              Desenvolvedora front-end focada em criar experiências modernas, funcionais e bem estruturadas.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex gap-6 text-sm">

            <a
              href="#sobre"
              className="text-gray-400 hover:text-gold transition"
            >
              Sobre
            </a>

            <a
              href="#projetos"
              className="text-gray-400 hover:text-gold transition"
            >
              Projetos
            </a>

            <a
              href="#tecnologias"
              className="text-gray-400 hover:text-gold transition"
            >
              Tecnologias
            </a>

          </div>

          {/* CONTATO */}
          <div className="flex gap-4">

            <a
              href="https://github.com/Livia2710"
              target="_blank"
              rel="noreferrer"
              className="shine border border-gold text-gold px-4 py-2 rounded-full text-sm hover:bg-gold hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/l%C3%ADvia-figueiredo/"
              target="_blank"
              rel="noreferrer"
              className="shine border border-gold text-gold px-4 py-2 rounded-full text-sm hover:bg-gold hover:text-black transition"
            >
              LinkedIn
            </a>

          </div>
        </div>

        {/* LINHA DIVISÓRIA */}
        <div className="border-t border-white/5 my-6"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Lívia Figueiredo. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  )
}
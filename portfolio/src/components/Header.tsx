import { useEffect, useState } from "react";

export default function Header() {
    // Guarda qual seção está ativa
    //Coloquei "sobre", pois ela é primeira seção visível ao carregar a página
    const [active, setActive] = useState("sobre");
    const [menuOpen, setMenuOpen] = useState(false);

    // Lembre-se, os hooks natives sempre ficam dentro da função, mas fora do return
    useEffect(() => {
        // Função que roda sempre que o usuário rola a página
        const handleScroll = () => {
            // Pegando todas as sections pelo id
             const sections = ["sobre", "certificados", "tecnologias", "projetos", "trajetoria"]

            //  Posição atual do scroll
            const scrollY = window.scrollY

            //Loop em cada seção
            sections.forEach((id) => {
                const section = document.getElementById(id)

                if(section) {
                    //Topo da seção (posição Y dela na página)
                    const offsetTop = section.offsetTop - 100
                    //Altura da seção
                    const height = section.offsetHeight

                    //Verifica se o scroll está dentro dessa seção
                    if(scrollY >= offsetTop && scrollY < offsetTop + height) {
                        setActive(id)
                    }
                }
            });

        }

        //Escuta o scroll
        window.addEventListener("scroll", handleScroll)

        //Remove o listener quando desmontar(boa prática)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    //Função para estilizar o link ativo(sim, criei uma const somente para isso)
    const linkClass = (id:string) =>
        `cursor-pointer transition ${
            active === id ? "text-gold":"text-text hover:text-gold"
        }`

   
  return (
    // `bg-bg/80 signfica` que pega a cor de background que eu defini(sim, a chamei de bg), mas com 80% de opacidade.
    //`background-blur` aplica um efeito de desfoque(blur) a tudo que está atrás do elemento
    
    <header className="fixed top-0 w-full bg-bg/80 backdrop-blur z-50">
    {/* overflow-x-auto define como o navegador lida com o conteúdo que "transbordou" lateralmente. O auto permite scrollar horizontalmente se o conteudo for menor. Caso queira esconder é o overflow-x-hidden
    whitespace-nowrap impede que o texto ou elementos filhos quebrem a linha seguinte, forçando todo conteúdo em uma única linha, estendendo-se para fora da largura do elemento pai */}
      <nav className="flex justify-between md:justify-center gap-4 md:gap-8 px-4 md:px-0 py-3 md:py-4 text-sm font-body flex-wrap">
        <div className="hidden md:flex gap-8">
            <a href="#sobre" className={linkClass("sobre")}>Sobre</a>
            <a href="#certificados" className={linkClass("certificados")}>Certificados</a>
            <a href="#trajetoria" className={linkClass("trajetoria")}>Trajetória</a>
            <a href="#tecnologias" className={linkClass("tecnologias")}>Tecnologias</a>
            <a href="#projetos" className={linkClass("projetos")}>Projetos</a>
        </div>

        <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden relative w-8 h-8 flex items-center justify-center z-50"
        >
        <span className={`
            absolute w-6 h-[2px] bg-text transition-all duration-300
            ${menuOpen ? "rotate-45" : "-translate-y-2"}
        `} />

        <span className={`
            absolute w-6 h-[2px] bg-text transition-all duration-300
            ${menuOpen ? "opacity-0" : ""}
        `} />

        <span className={`
            absolute w-6 h-[2px] bg-text transition-all duration-300
            ${menuOpen ? "-rotate-45" : "translate-y-2"}
        `} />
        </button>

        {menuOpen && (
            <div className="
                fixed top-0 left-0 w-[25vw] h-screen 
                bg-bg/95 backdrop-blur 
                flex flex-col items-center justify-center gap-6
                z-40
            ">
                
                <a href="#sobre" onClick={() => setMenuOpen(false)} className={linkClass("sobre")}>Sobre</a>
                <a href="#certificados" onClick={() => setMenuOpen(false)} className={linkClass("certificados")}>Certificados</a>
                <a href="#trajetoria" onClick={() => setMenuOpen(false)} className={linkClass("trajetoria")}>Trajetória</a>
                <a href="#tecnologias" onClick={() => setMenuOpen(false)} className={linkClass("tecnologias")}>Tecnologias</a>
                <a href="#projetos" onClick={() => setMenuOpen(false)} className={linkClass("projetos")}>Projetos</a>

            </div>
            )}

      </nav>
    </header>
  )
}
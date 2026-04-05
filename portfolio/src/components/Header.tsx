import { useEffect, useState } from "react";

export default function Header() {
    // Guarda qual seção está ativa
    //Coloquei "sobre", pois ela é primeira seção visível ao carregar a página
    const [active, setActive] = useState("sobre");

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
      <nav className="flex justify-center gap-8 py-4 text-sm font-body">
        
        <a href="#sobre" className={linkClass("sobre")}>Sobre</a>
        <a href="#certificados" className={linkClass("certificados")}>Certificados</a>
         <a href="#trajetoria" className={linkClass("trajetoria")}>Trajetória</a>
        <a href="#tecnologias" className={linkClass("tecnologias")}>Tecnologias</a>
        <a href="#projetos" className={linkClass("projetos")}>Projetos</a>

      </nav>
    </header>
  )
}
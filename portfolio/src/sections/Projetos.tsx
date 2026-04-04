function CardProjeto(){
    return(
        <div className="min-w-[280px] md:min-w-[320px] bg-bg-secondary rounded-2xl p-6 flex flex-col justify-between hover:scale-105 transition shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            {/* Imagem(Quadrado) */}
            <div className="h-40 bg-black/30 rounded-lg mb-4"/>

            {/* CONTEÚDO */}
            <div>
                <h3 className="font-title text-xl mb-2">Nome do Projeto</h3>
                <p className="text-gray-400 text-sm mb-4">Pequena descrição do projeto, explicando o objetivo e o que foi feito.</p>
                <p className="text-gray-500 text-xs mb-4">Criado para praticar X tecnologia e resolverY problema.</p>
            </div>

            {/* TECNOLOGIAS */}
            <div className="flex gap-2 flex-wrap mt-4">
                <TechTag name="React"/>
                <TechTag name="Tailwind"/>
                <TechTag name="TypeScript"/>
            </div>
        </div>
    )
}

function TechTag({ name } : { name: string}){
    return(
        <span className="text-xs px-3 py-1 rounded-full border border-gold text-gold">{name}</span>
    )
}

export default function Projetos(){
    return(
    <>
    <section id="projetos" className="min-h-screen px-6 md:px-12 lg:px-40 py-20 text-text">
    <h2 className="font-title text-3xl md:text-4xl text-center bg-gold-gradient bg-clip-text text-transparent text-shine-hover mb-12">Meus Projetos</h2>

    {/* CARROSSEL */}
    <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {/* Cards fake por enquanto */}
        <CardProjeto/>
        <CardProjeto/>
        <CardProjeto/>
    </div>
    </section>
    </>
    )
}
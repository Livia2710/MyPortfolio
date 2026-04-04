import Avatar from "../assets/avatar.jpg";

export default function Sobre(){
  return(
    <>
    {/* O id é para o header */}
    {/* o bg-transparent garante que o fundo seja o dark-gradient, como colocado no App.tsx */}
    {/* px-20 equivale o padding-left: 5rem e padding-right: 5rem juntos, ou seja os lado, no eixo x(horizontal) */}

    {/* =========== Responsividade no Tailwind =============*/}
    {/* É também colocado no className, funcionando assim:
    sem nada = mobile(tailwind funciona mobile-first)
    md = tablet
    lg =  laptops
    xl = desktop
    2xl = monitor grande
    */}

      {/* Por exemplo nessa section temos o flex flex-col md:flex-row, que significa assim, no mobile(Sem anda) fica no formato de coluna(Column), um embaixo do outro.
      Já na tela de tablet(md) ou para cima, pois vai sobrescrevendo conforme a tela aumenta, fica no formato row(linha),um do lado do outro */}
      <section id="sobre" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-40 py-20 gap-10 bg-transparent text-text ">

      {/* BLOCO DE TEXTO */}
      <div className="max-w-xl text-center md:text-left">
        {/* Esse font-title foi definido por mim. Igual ao text-text */}
        <h1 className=" font-title text-3xl md:text-4xl lg:text-5xl text-text">
          Olá, meu nome é{" "}
          {/* Tutorial de como fazer um letra ter efeito gradiente(com tailwind)
          1 Aplica um gradiente no fundo(bg-gold-gradiente). 
          2 Recorta esse fundo para que ele apareça dentro do formato das letras(bg-clip-text).
          3 Definir a cor real do texto como transparente,para que a cor padrão não cubra o gradiente(text-transparent)
          */}
          <span className="bg-gold-gradient bg-clip-text text-transparent text-shine-hover">
            Lívia
          </span>
        </h1>

        {/* Esse parte `text-sm md:text-base` é bem interessante, pois é um texto reponsivo, quando estiver em telas pequenas a fonte vai ser small(14px) e em telas médias ou grandes, o texto aumenta para o tamanho text-base(16px). 
        Mas se vc for igual a mim,vc pode aumentar assim mudando para text-base md:text-lg.*/}
        <p className="font-body mt-4 text-gray-400 text-base md:text-lg">
          Sou desenvolvedora extremamente adaptável, com uma gama de conhecimentos
        </p>

        {/* BOTÕES */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="shine border border-gold text-gold px-6 py-2 w-full sm:w-40 rounded-full hover:bg-gold hover:text-black transition">
            Github
          </button>

          <button className="shine border border-gold text-gold px-6 py-2 w-full sm:w-40 rounded-full hover:bg-gold hover:text-black transition">
            Linkedin
          </button>
        </div>
      </div>
      

      <div className="shine-border rounded-full overflow-hidden w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
        <img src={Avatar} alt="Minha foto" className="w-full h-full object-cover "/>
      </div>

    </section>
    </>
  )
}
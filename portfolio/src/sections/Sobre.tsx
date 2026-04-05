import { useState, useEffect } from "react";
import Avatar from "../assets/avatar.jpg";

export default function Sobre(){
  //Const para controlar a visibilidade
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    //Basicamente tá falando que a cada 200 ms(0,2s) fica visível
    const timer = setTimeout(()=> setVisible(true), 200);
    return () => clearInterval(timer);
  }, [])

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
      <section id="sobre" className={`min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-40 py-20 gap-10 text-text transition-all duration-700
        ${visible ? "opacity-100":"opacity-0"}`}>

      {/* BLOCO DE TEXTO */}
      <div className={`max-w-xl text-center md:text-left transition-all duration-700 ease-out delay-200
                  // Se for verdadeiro, o elemento fica visivel(opacity-100) e é empurrado 10unidade(40px) para a esquerda
        ${visible ? "opacity-100 translate-x-0"
                  //Se for falso, o elemento fica transparente(opacity-0) é volta 10 unidade para esquerda, por causa de ser negativo
                  :"opacity-0 -translate-x-10"}
        `}>
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
          Desenvolvedora focada em front-end, com experiência prática desde o ensino técnico pelo SESI e atualmente cursando ADS no SENAI. Tenho vivência com projetos reais e busco criar aplicações modernas e funcionais.
        </p>

        {/* BOTÕES */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center text-center md:justify-start">
          <a  href="https://github.com/Livia2710" target="_blank" rel="noreferrer"
          className="shine border border-gold text-gold px-6 py-2 w-full sm:w-40 rounded-full hover:bg-gold hover:text-black transition">
            Github
          </a>

          <a href="https://www.linkedin.com/in/l%C3%ADvia-figueiredo/?skipRedirect=true" target="_blank" rel="noreferrer"
          className="shine border border-gold text-gold px-6 py-2 w-full sm:w-40 rounded-full hover:bg-gold hover:text-black transition">
            Linkedin
          </a>
        </div>
      </div>
      

      <div className={`shine-border rounded-full overflow-hidden w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 transition-all duration-700 ease-out delay-300
        ${visible ?"opacity-100 translate-x-0 ":"opacity-0 translate-x-10"}`}>
        <img src={Avatar} alt="Minha foto" className="w-full h-full object-cover "/>
      </div>

    </section>
    </>
  )
}
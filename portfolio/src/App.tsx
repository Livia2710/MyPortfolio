// Importando os componentes e seções da página
import Header from './components/Header';
import Sobre from "./sections/Sobre";
import Certificados from './sections/Certificados';
import Tecnologias from './sections/Tecnologias';
import Projetos from './sections/Projetos';

export default function App() {
  return (
    <>
    <div className='bg-dark-gradient min-h-screen'>
    <Header/>
    <Sobre/>
    <Certificados/>
    <Tecnologias/>
    <Projetos/>
    </div>

    </>
  )
}
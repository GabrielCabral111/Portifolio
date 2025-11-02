
import Home from "../components/Home";
import SobreMim from "../components/SobreMim";
import Visualizacao from "../components/Visualizacao ";
// import Projetos from "../components/Projetos";
//  import FaleComigo from "../components/FaleComigo";
// import Footer from "../components/Footer";

function Portfolio() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0C3153] to-black text-white overflow-hidden">
       

      {/* Conteúdo principal com rolagem suave */}
      <div className="relative z-10 flex flex-col  scroll-smooth">
        <section id="home">
          <Home />
        </section>

        <section id="sobre-mim">
          <SobreMim />
        </section>

        <section id="visualizacao">
          <Visualizacao />
        </section>

        {/* <section id="projetos">
          <Projetos />
        </section> */}

        {/* <section id="fale-comigo">
          <FaleComigo />
        </section> */}

        {/* <footer id="footer">
          <Footer />
        </footer> */}
      </div>
    </main>
  );
}

export default Portfolio;

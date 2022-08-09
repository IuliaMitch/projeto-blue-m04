import "./Home.css";
import PaletaLista from "../components/PaletaLista/PaletaLista";
import Header from "../components/Header/Header"

function Home() {
  return (
    <div className="Home">
      
        <Header />
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;
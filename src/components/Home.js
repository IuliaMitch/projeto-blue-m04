import "./Home.css";
import PaletaLista from "./PaletaLista";
import Header from "./Header";

function Home() {
  return (
    <div className="Home">
      <div className="Home__header Header">
        <Header />
      </div>
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;

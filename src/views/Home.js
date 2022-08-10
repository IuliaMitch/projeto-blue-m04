import "./Home.css";
import PaletaLista from "../components/PaletaLista/PaletaLista";
import Header from "../components/Header/Header";
import AdicionaPaletaModal from "../components/AdicionaPaletaModal/AdicionaPaletaModal";
import { useState } from "react";

function Home() {
  const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
  const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] =
    useState(false);

  return (
    <div className="Home">
      <Header createPaleta={() => setCanShowAdicionaPaletaModal(true)} />
      <div className="Home__container">
        <PaletaLista paletaCriada={paletaParaAdicionar}/>
        {canShowAdicionaPaletaModal && (
          <AdicionaPaletaModal
            closeModal={() => setCanShowAdicionaPaletaModal(false)}
            onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;

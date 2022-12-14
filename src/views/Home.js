import "./Home.css";
import { ActionMode } from "../constants/index";

import DeletaPaletaModal from "../components/DeletaPaletaModal/DeletaPaletaModal";

import PaletaLista from "../components/PaletaLista/PaletaLista";
import Header from "../components/Header/Header";
import AdicionaEditaPaletaModal from "../components/AdicionaEditaPaletaModal/AdicionaEditaPaletaModal";
import { useState } from "react";

function Home() {
  const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
  const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] =
    useState(false);

  const [paletaRemovida, setPaletaRemovida] = useState();
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const [paletaParaEditar, setPaletaParaEditar] = useState();
  const [paletaParaDeletar, setPaletaParaDeletar] = useState();

  const [paletaEditada, setPaletaEditada] = useState();

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  const handleDeletePaleta = (paletaToDelete) => {
    setPaletaParaDeletar(paletaToDelete);
  };

  const handleUpdatePaleta = (paletaToUpdate) => {
    setPaletaParaEditar(paletaToUpdate);
    setCanShowAdicionaPaletaModal(true);
  };

  const handleCloseModal = () => {
    setCanShowAdicionaPaletaModal(false);
    setPaletaParaAdicionar();
    setPaletaParaDeletar();
    setPaletaParaEditar();
    setModoAtual(ActionMode.NORMAL);
  };

  return (
    <div className="Home">
      <Header
        mode={modoAtual}
        deletePaleta={() => handleActions(ActionMode.DELETAR)}
        updatePaleta={() => handleActions(ActionMode.ATUALIZAR)}
        createPaleta={() => setCanShowAdicionaPaletaModal(true)}
      />
      <div className="Home__container">
        <PaletaLista
          deletePaleta={handleDeletePaleta}
          updatePaleta={handleUpdatePaleta}
          mode={modoAtual}
          paletaCriada={paletaParaAdicionar}
          paletaEditada={paletaEditada}
          paletaRemovida={paletaRemovida}
        />

        {paletaParaDeletar && (
          <DeletaPaletaModal
            paletaParaDeletar={paletaParaDeletar}
            closeModal={handleCloseModal}
            onDeletePaleta={(paleta) => setPaletaRemovida(paleta)}
          />
        )}

        {canShowAdicionaPaletaModal && (
          <AdicionaEditaPaletaModal
            mode={modoAtual}
            onUpdatePaleta={(paleta) => setPaletaEditada(paleta)}
            paletaToUpdate={paletaParaEditar}
            closeModal={handleCloseModal}
            onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;

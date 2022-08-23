/* ... */
import sacola from "../../assets/icons/sacola.svg";
import logo from "../../assets/logo.svg";
import { ActionMode } from "../../constants/index";

import "./Header.css";

export default function Header({ createPaleta, updatePaleta, mode }) {
  return (
    <div className="Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo El Geladon"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> El Geladon </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className={`Opcoes__paleta Paleta ${
              mode === ActionMode.ATUALIZAR && "Paleta--ativa"
            }`}
            onClick={() => updatePaleta()}
          >
            <span width="40px" className="Paleta__icone" alt="Adiconar paleta">
              Editar
            </span>
          </button>

          <button
            type="button"
            className="Opcoes__paleta Paleta"
            onClick={() => createPaleta()}
          >
            <span width="40px" className="Paleta__icone" alt="Adiconar paleta">
              +
            </span>
          </button>
          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import { Container } from "./styles";

import Logo from "../../assets/logo.svg";

function Profile() {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Be The Hero logo" />
        <span>Bem vinda, APAD</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>
          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>
          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>
          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>
          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>
          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>
          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} />
          </button>
        </li>
      </ul>
    </Container>
  );
}

export default Profile;

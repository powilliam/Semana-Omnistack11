import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import { Container } from "./styles";

import Logo from "../../assets/logo.svg";
import Heroes from "../../assets/heroes.png";

function Logon() {
  return (
    <Container>
      <section className="form-container">
        <img src={Logo} alt="Be The Hero Logo" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua identificação" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="redirect" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={Heroes} alt="Illustration" />
    </Container>
  );
}

export default Logon;

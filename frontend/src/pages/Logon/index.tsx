import React, { useState, useEffect, useCallback, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import { Container } from "./styles";

import Logo from "../../assets/logo.svg";
import Heroes from "../../assets/heroes.png";

interface IHistoryState {
  identification: string;
}

interface IRequest {
  name: string;
}

function Logon() {
  const history = useHistory<IHistoryState>();

  const [identification, setIdentification] = useState("");

  const handleLogin = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      api
        .get<IRequest>("/auth", {
          headers: {
            authorization: identification
          }
        })
        .then(response => {
          const { name } = response.data;

          localStorage.setItem("organization_name", name);

          history.push("/profile");
        });
    },
    [identification, history]
  );

  useEffect(() => {
    const token = localStorage.getItem("organization_token");

    if (token) {
      setIdentification(token);
    }

    return () => {};
  }, []);

  return (
    <Container>
      <section className="form-container">
        <img src={Logo} alt="Be The Hero Logo" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua identificação"
            value={identification}
            onChange={e => setIdentification(e.target.value)}
          />
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

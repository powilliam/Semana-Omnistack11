import React, { useState, useCallback, useMemo, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import { Container } from "./styles";

import Logo from "../../assets/logo.svg";

function NewIncident() {
  const history = useHistory();

  const token = useMemo(() => localStorage.getItem("organization_token"), []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState<number>();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      async function createIncident() {
        const data = {
          title,
          description,
          value
        };
        await api.post("/incidents", data, {
          headers: {
            authorization: token
          }
        });

        history.push("/profile");
      }

      createIncident();
    },
    [title, description, value, token, history]
  );

  return (
    <Container>
      <div className="content">
        <section>
          <img src={Logo} alt="Be The Hero Logo" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso
          </p>

          <Link className="redirect" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(Number(e.target.value))}
          />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  );
}

export default NewIncident;

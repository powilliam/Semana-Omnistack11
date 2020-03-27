import React, { useState, useCallback, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import { Container } from "./styles";

import Logo from "../../assets/logo.svg";

interface IResponse {
  identification: string;
}

function Register() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const data = {
        name,
        email,
        whatsapp,
        city,
        uf
      };

      try {
        api.post<IResponse>("organizations", data).then(response => {
          const { identification } = response.data;

          alert(`Anote seu ID para eventual Login: ${identification}`);

          localStorage.setItem("organization_token", identification);

          history.push("/");
        });
      } catch (error) {
        console.error(error);
      }
    },
    [history, name, email, whatsapp, city, uf]
  );

  return (
    <Container>
      <div className="content">
        <section>
          <img src={Logo} alt="Be The Hero Logo" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar
            os casos da sua ONG
          </p>

          <Link className="redirect" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  );
}

export default Register;

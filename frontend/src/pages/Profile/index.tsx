import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import { Container } from "./styles";

import Logo from "../../assets/logo.svg";

interface IIncident {
  id: string;
  title: string;
  description: string;
  value: number;
}

interface IOrganization {
  incidents: IIncident[];
}

function Profile() {
  const history = useHistory();

  const [incidents, setIncidents] = useState<IIncident[]>();

  const token = useMemo(() => localStorage.getItem("organization_token"), []);

  const organization = useMemo(
    () => localStorage.getItem("organization_name"),
    []
  );

  const handleLogout = useCallback(() => {
    localStorage.clear();
    history.push("/");
  }, [history]);

  const handleDelete = useCallback(
    (id: string) => {
      async function deleteIncident() {
        await api.delete(`/incidents/${id}`, {
          headers: { authorization: token }
        });
      }

      setIncidents(incidents?.filter(incident => incident.id !== id));

      deleteIncident();
    },
    [token, incidents]
  );

  useEffect(() => {
    try {
      api
        .get<IOrganization>("/profile", { headers: { authorization: token } })
        .then(response => {
          const { incidents } = response.data;
          setIncidents(incidents);
        });
    } catch (error) {
      console.error(error);
    }
  }, [token]);

  return (
    <Container>
      <header>
        <img src={Logo} alt="Be The Hero logo" />
        <span>Bem vinda, {organization}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {incidents?.map(incident => (
          <li key={incident.id}>
            <strong>CASO: </strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p>
            <strong>VALOR: </strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </p>

            <button type="button" onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Profile;

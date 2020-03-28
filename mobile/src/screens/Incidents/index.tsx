import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { IIncident } from "../../types";

import api from "../../services/api";

import Styles from "./styles";
import { Feather } from "@expo/vector-icons";

function Incidents() {
  const navigation = useNavigation();

  const [incidents, setIncidents] = useState<IIncident[]>([]);
  const [totalCases, setTotalCases] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleDetail = useCallback(
    (incident: IIncident) => navigation.navigate("Details", { incident }),
    [navigation]
  );

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (totalCases > 0 && incidents.length === totalCases) {
      return;
    }

    setLoading(true);
    const { data, headers } = await api.get<IIncident[]>("/incidents", {
      params: { page }
    });

    setIncidents([...incidents, ...data]);
    setTotalCases(headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Image source={require("../../assets/logo.png")} />
        <Text style={Styles.headerText}>
          Total de <Text style={Styles.headerTextBold}>{totalCases} casos</Text>
        </Text>
      </View>
      <Text style={Styles.title}>Bem-vindo!</Text>
      <Text style={Styles.description}>
        Escolha um dos casos abaixo e salve o dia
      </Text>

      <FlatList
        style={Styles.incidentList}
        data={incidents}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={Styles.incident}>
            <Text style={Styles.incidentProperty}>ONG:</Text>
            <Text style={Styles.incidentValue}>{incident.title}</Text>

            <Text style={Styles.incidentProperty}>Caso:</Text>
            <Text style={Styles.incidentValue}>{incident.description}</Text>

            <Text style={Styles.incidentProperty}>Valor:</Text>
            <Text style={Styles.incidentValue}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={Styles.detailsButton}
              onPress={() => handleDetail(incident)}
            >
              <Text style={Styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="yellow" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Incidents;

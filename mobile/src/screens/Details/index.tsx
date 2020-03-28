import React, { useCallback, useMemo } from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import { IRootStack } from "../../types";

import Styles from "./styles";
import { Feather } from "@expo/vector-icons";

function Details() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<IRootStack, "Details">>();

  const handleNavigateBack = useCallback(() => navigation.goBack(), [
    navigation
  ]);

  const composeMessage = useCallback(() => {
    const { title, organization, value } = route.params.incident;
    const { name } = organization;

    return `Olá, ${name}, estou entrando em contato pois gostaria de ajudar no caso "${title}" com o valor de ${Intl.NumberFormat(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL"
      }
    ).format(value)}`;
  }, [route]);

  const incident = useMemo(() => route.params.incident, [route]);

  const handleSendmail = useCallback(() => {
    MailComposer.composeAsync({
      subject: "Message",
      body: composeMessage(),
      recipients: ["powilliam19@gmail.com"]
    });
  }, []);
  const handleSendmessage = useCallback(() => {
    Linking.openURL(
      `whatsapp://send?phone=5597981176971&text=${composeMessage()}`
    );
  }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Image source={require("../../assets/logo.png")} />
        <TouchableOpacity onPress={handleNavigateBack}>
          <Feather name="arrow-left" size={26} color="#E20041" />
        </TouchableOpacity>
      </View>

      <View style={Styles.incident}>
        <Text style={[Styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={Styles.incidentValue}>{incident.title}</Text>

        <Text style={Styles.incidentProperty}>Caso:</Text>
        <Text style={Styles.incidentValue}>{incident.description}</Text>

        <Text style={Styles.incidentProperty}>Valor:</Text>
        <Text style={Styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.value)}
          }
        </Text>
      </View>

      <View style={Styles.contactBox}>
        <Text style={Styles.heroTitle}>Salve o dia!</Text>
        <Text style={Styles.heroTitle}>Seja o herói desse caso</Text>
        <Text style={Styles.heroDescription}>Entre em contato</Text>

        <View style={Styles.actions}>
          <TouchableOpacity style={Styles.action} onPress={handleSendmessage}>
            <Text style={Styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.action} onPress={handleSendmail}>
            <Text style={Styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Details;

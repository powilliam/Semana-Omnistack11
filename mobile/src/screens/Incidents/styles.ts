import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    fontSize: 15,
    color: "#737380"
  },
  headerTextBold: {
    fontWeight: "bold"
  },
  title: {
    fontSize: 30,
    marginBottom: 5,
    marginTop: 48,
    color: "#13131a",
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380"
  },
  incidentList: {
    marginTop: 30
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#555",
    marginBottom: 16,
    elevation: 0.3
  },
  incidentProperty: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold"
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#d9d9d9"
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailsButtonText: {
    color: "yellow",
    fontSize: 15,
    fontWeight: "bold"
  }
});

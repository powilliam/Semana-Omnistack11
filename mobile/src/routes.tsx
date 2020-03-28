import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { IRootStack } from "./types";

import Incidents from "./screens/Incidents";
import Details from "./screens/Details";

const { Navigator, Screen } = createStackNavigator<IRootStack>();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Incidents" component={Incidents} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;

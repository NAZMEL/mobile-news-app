import react from "react";
import Main from "./components/Main";
import FullInfo from "./components/FullInfo";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Main",
            headerStyle: { backgroundColor: "#009fe3", height: 50 },
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{ title: "FullInfo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;

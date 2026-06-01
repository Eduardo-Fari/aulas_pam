import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import homeScreen from "./src/screens/homeScreen";
import profileScreen from "./src/screens/profileScreen";
import aboutScreen from "./src/screens/aboutScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={homeScreen}/>
      <Stack.Screen name="Profile" component={profileScreen}/>
      <Stack.Screen name="About" component={aboutScreen}/>
    </Stack.Navigator>
  </NavigationContainer>    
  );
}
//

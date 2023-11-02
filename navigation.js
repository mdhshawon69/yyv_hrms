import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import LeaveRequest from "./src/screens/LeaveRequest/LeaveRequest";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LeaveRequest"
          component={LeaveRequest}
          options={{
            headerStyle: {
              backgroundColor: "#C82159",
            },
            headerTitle: "Leave Request",
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

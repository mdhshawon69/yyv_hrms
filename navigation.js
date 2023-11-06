import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import LeaveRequest from "./src/screens/LeaveRequest/LeaveRequest";
import MyDrawer from "./drawerNavigation";
import LeaveSummary from "./src/screens/LeaveSummary/LeaveSummary";
import AppliedLeaves from "./src/screens/AppliedLeaves/AppliedLeaves";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
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
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="LeaveSummary"
        component={LeaveSummary}
        options={{
          headerStyle: {
            backgroundColor: "#C82159",
          },
          headerShadowVisible: false,
          headerTitle: "Leave Summary",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="AppliedLeave"
        component={AppliedLeaves}
        options={{
          headerStyle: {
            backgroundColor: "#C82159",
          },
          headerShadowVisible: false,
          headerTitle: "Applied Leave",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen name="Drawer" component={MyDrawer} />
    </Stack.Navigator>
  );
}

import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./src/screens/Profile/Profile";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;

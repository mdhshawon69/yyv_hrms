import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./drawerNavigation";
import Navigation from "./navigation";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}

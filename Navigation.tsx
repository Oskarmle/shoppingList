import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import Frontpage from "./screens/Frontpage";
import Categories from "./screens/Categories";
import Group from "./screens/Group";
import Profile from "./screens/user/Profile";
import Signin from "./screens/user/Signin";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Frontpage} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Categories" component={Categories} />
        <Drawer.Screen name="Group" component={Group} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

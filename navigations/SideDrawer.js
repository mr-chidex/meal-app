import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealsTabNavigation from "./MealsTabNavigation";
import FilterNav from "./FilterNav";
import colors from "../constants/colors";

const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.secondary,
        drawerLabelStyle: { fontFamily: "OpenSans-Bold" },
      }}
    >
      <Drawer.Screen name="Meals" component={MealsTabNavigation} />
      <Drawer.Screen name="Filters" component={FilterNav} />
    </Drawer.Navigator>
  );
};

export default SideDrawer;

import React from "react";
import { createStackNavigator } from "react-navigation";

import DashboardContainer from "./views/containers/dashboardContainer"

const DashboardNavigator = createStackNavigator(
  {
    dashboard: DashboardContainer,
  },
  {
    headerMode: "none",
    initialRouteName: "dashboard"
  }
);

export default DashboardNavigator;

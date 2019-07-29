import React from "react";
import { createStackNavigator } from "react-navigation";

import OnboardingContainer from "./views/containers/onboardingContainer"

const OnboardingNavigator = createStackNavigator(
  {
    onboarding: OnboardingContainer,
  },
  {
    headerMode: "none",
    initialRouteName: "onboarding"
  }
);

export default OnboardingNavigator;

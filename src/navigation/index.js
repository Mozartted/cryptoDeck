import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import OnboardingModule from "../modules/onboarding"
import DashboardModule from "../modules/dashboard"

// import SplashModule from "../modules/splashModule"
// import AuthModule from "../modules/authModule"
// import DashboardModule from "../modules/dashboardModule";
// import WalletModule from "../modules/walletModule";

const AppNavigator = createStackNavigator(
  {
    onboard: OnboardingModule,
    dashboard: DashboardModule
  },
  {
    headerMode: 'none',
    initialRouteName: 'dashboard',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);



const AppContainer = createAppContainer(AppNavigator)


export default class MainNavigator extends Component {
  render() {
    return (
      <AppContainer ref={this.props.appRef}/>
    )
  }
}

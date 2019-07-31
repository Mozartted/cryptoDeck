import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import OnboardingModule from "../modules/onboarding"
import DashboardModule from "../modules/dashboard"

const AppNavigator = createStackNavigator(
  {
    onboard: OnboardingModule,
    dashboard: DashboardModule
  },
  {
    headerMode: 'none',
    initialRouteName: 'onboard',
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

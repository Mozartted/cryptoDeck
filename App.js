import React, {
  Component
} from 'react';
import {
  AsyncStorage
} from 'react-native';
import { Provider } from "react-redux";
// import { Root } from "native-base";

// Native base theme imports
import { StyleProvider, Root as Core} from "native-base";
// import DefaultProps from "./constants/navigation";
import getTheme from "./src/native-base-theme/components";
import theme from "./src/native-base-theme/variables/platform";

import { store, persistor } from './src/store';
import { PersistGate } from "redux-persist/integration/react";
// import {refreshToken} from './src/authModule/actions'
import NavigationService from './src/navigation/NavigationService';

import  MainNavigator from './src/navigation'

persistor.purge();
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StyleProvider style={getTheme(theme)}>
            <Core>
              {/* <Root> */}
                <MainNavigator
                  appRef={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                  }}
                />
              {/* </Root> */}
            </Core>
          </StyleProvider>
        </PersistGate>
      </Provider>
    )
  }
}

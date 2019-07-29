import { Platform, Dimensions } from 'react-native';
import variables from "../variables/platform"

const deviceHeight = Dimensions.get('window').height;
export default () => {
  const theme = {
    flex: 1,
    backgroundColor: variables.brandDark,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
  };

  return theme;
};

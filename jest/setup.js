import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// jest.mock('react-native', () => ({
//     AsyncStorage: {
//         setItem: jest.fn(() => {
//             return new Promise((resolve, reject) => {
//                 resolve(null);
//             });
//         }),
//         multiSet:  jest.fn(() => {
//             return new Promise((resolve, reject) => {
//                 resolve(null);
//             });
//         }),
//         getItem: jest.fn(() => {
//             return new Promise((resolve, reject) => {
//                 resolve(JSON.stringify(getTestData()));
//             });
//         }),
//         multiGet: jest.fn(() => {
//             return new Promise((resolve, reject) => {
//                 resolve(multiGetTestData());
//             });
//         }),
//         removeItem: jest.fn(() => {
//             return new Promise((resolve, reject) => {
//                 resolve(null);
//             });
//         }),
//         getAllKeys: jest.fn(() => {
//             return new Promise((resolve) => {
//                 resolve(['one', 'two', 'three']);
//             });
//         })
//       }
//     }));

jest.mock('react-navigation', () => {
    return {
        createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {return null;}),
        createDrawerNavigator: jest.fn(),
        createMaterialTopTabNavigator: jest.fn(),
        createStackNavigator: jest.fn(),
        StackActions: {
            push: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/PUSH"})),
            replace: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/REPLACE"})),
        },
        NavigationActions: {
            navigate: jest.fn().mockImplementation(x => x),
        }
    }
});
jest.mock('NativeModules', () => ({
    UIManager: {
      RCTView: () => {},
    },
    RNGestureHandlerModule: {
      attachGestureHandler: jest.fn(),
      createGestureHandler: jest.fn(),
      dropGestureHandler: jest.fn(),
      updateGestureHandler: jest.fn(),
      State: {},
      Directions: {},
    },
  }))
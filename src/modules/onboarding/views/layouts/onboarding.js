import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import {Title, Icon} from "native-base"
import AppIntroSlider from "react-native-app-intro-slider";
// import Logo from "../assets/Logo";
import Onboarding1 from "../assets/Onboard1.svg";
import Onboarding2 from "../assets/Onboard2.svg";

const styles = StyleSheet.create({
  image: {
    marginTop: 100,
    marginBottom: 40,
    borderWidth: 0,
    width: '100%'
  }
});

const logoUI = StyleSheet.create({
    image: {
        resizeMode: "contain",
        marginTop: 80,
        width: 200,
        height: 200
    }
})

const slides = [
  {
    key: 'view-1',
    title: 'Crypto Deck',
    text: 'Get quick feedback on tokens you fancy',
    icon: "back",
    titleStyle:{
      color: '#202020',
      // fontFamily: 'Roboto',
      fontSize: 18
    },
    textStyle:{
      color: '#202020',
      // fontFamily: 'Roboto',
      fontSize: 13,
      marginTop: 10
    },
    image: (props) => <Image source={require("../assets/Logo.png")} {...props} />,
    imageStyle: logoUI.image,
    backgroundColor: '#C19079',
  },
  {
    key: 'view-2',
    title: 'Search and Track',
    icon: "back",
    text: 'track tokens via their ticker',
    // image: (props) => <Onboarding1 {...props} />,
    image: (props) => <Image source={require("../assets/Onboarding1.png")} {...props} />,
    imageStyle: logoUI.image,
    // image: (props) => <Image source={require('../../assets/svgs/onboarding/2.png')} {...props}/>,
    titleStyle:{
      color: '#202020',
      // fontFamily: 'Roboto',
      fontSize: 18
    },
    textStyle:{
      color: '#202020',
      // fontFamily: 'Roboto',
      fontSize: 13,
      marginTop: 10
    },
    // imageStyle: styles.image,
    backgroundColor: '#fff',
  },
  {
    key: 'view-3',
    title: 'Quick Fiat Conversion',
    icon: "back",
    text: 'Convert data to fiat equivalent quickly',
    titleStyle:{
      color: '#202020',
      // fontFamily: 'Roboto',
      fontSize: 18
    },
    textStyle:{
      color: '#202020',
      // fontFamily: 'Roboto',
      fontSize: 13,
      marginTop: 10
    },
    // image: (props) => <Onboarding2 {...props}/>,
    image: (props) => <Image source={require("../assets/Onboarding2.png")} {...props} />,
    imageStyle: logoUI.image,
    // imageStyle: styles.image,
    backgroundColor: '#fff',
  }
];

class OnboardingComponent extends Component {
  constructor(props) {
    super(props);
    this._onDone = this._onDone.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this._renderNextButton = this._renderNextButton.bind(this);
    this._renderPrevButton = this._renderPrevButton.bind(this);
  }
  _onDone(){
    this.props.navigation.navigate('dashboard')
  }
  
  _renderItem(props){
    return (
      <View
      style={[ {
        width: props.dimensions.width,
        height: props.dimensions.height,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0
      }]}
    >
      {props.item.image({style: props.item.imageStyle})}
      <View style={{padding: 30}}>
        <Title style={[props.item.titleStyle,{textAlign: 'center'}]}>{props.item.title}</Title>
        <Text style={props.item.textStyle}>{props.item.text}</Text>
      </View>
    </View>
    )
  }

  _renderDoneButton(){
    return (
      <View>
        <Icon name={'ios-arrow-dropright-circle'} type="Ionicons" size={200} color="#ededed" backgroundColor="#707EF4"/>
      </View>
    )
  }

  _renderNextButton(){
    return (
      <View>
        <Icon name={'ios-arrow-dropright-circle'} type="Ionicons" size={200} color="#ededed" backgroundColor="#707EF4" />
      </View>
    )
  }

  _renderPrevButton(){
    return (
      <View>
        <Icon name={'ios-arrow-dropleft-circle'} type="Ionicons" size={200} color="#ededed" backgroundColor="#707EF4"/>
      </View>
    )
  }

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem} 
        slides={slides} 
        onDone={this._onDone} 
        renderNextButton={this._renderNextButton} 
        renderPrevButton={this._renderPrevButton} 
        renderDoneButton={this._renderDoneButton}
        showPrevButton={true} 
      />
    );
  }
}

export default OnboardingComponent;
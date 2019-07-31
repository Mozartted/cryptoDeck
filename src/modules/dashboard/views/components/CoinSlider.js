import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  I18nManager,
  Platform
} from "react-native";
import { Card, CardItem, Text, View, Image, Thumbnail} from "native-base";
const { height, width } = Dimensions.get("window");

const isIphoneX =
  Platform.OS === "ios" &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height === 812 || width === 812);

const isAndroidRTL = I18nManager.isRTL && Platform.OS === "android";


const SingleCoinComponent = props => (
  <TouchableOpacity onPress={()=>{
    props.selected(props.item)
  }}>
    <Card
      style={{
        borderWidth: 1,
        backgroundColor: "#3E63FF",
        borderRadius: 8,
        height: 107,
        width: 107,
        flexDirection: "column",
        marginRight: 10,
        justifyContent: "space-between",
        padding: 10
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between"
          }}
        >
          <View style={{ flex: 1, justifyContent:"center", alignContent:"center"}}>
              <Thumbnail style={{alignSelf: "center"}} source={{ uri: `https://ui-avatars.com/api/?background=2C7BE5&color=fff&name=${props.name}` }} />
          </View> 
          <View style={{ flex: 1}}>
              <Text style={{fontSize: 17, color: "#fff", fontWeight: "700", textAlign: "center"}}>{props.name}</Text>
          </View>
        </View>
      </View>
    </Card>
  </TouchableOpacity>
);

export default class CoinSliderComponent extends Component {
  state = {
    width: 305,
    height,
    activeIndex: 0
  };

  keyExtractor = (item, index) => index.toString();

  rtlSafeIndex = i =>
    isAndroidRTL ? this.props.savingsPlan.length - 1 - i : i;

  onMomentumScrollEnd = e => {
    const offset = e.nativeEvent.contentOffset.x;
    const newIndex = this.rtlSafeIndex(Math.round(offset / this.state.width));
    if (newIndex === this.state.activeIndex) {
      return;
    }
    this.setState({ activeIndex: newIndex });
  };

  goToSlide = pageNum => {
    this.setState({ activeIndex: pageNum });
    this.flatList.scrollToOffset({
      offset: this.rtlSafeIndex(pageNum) * this.state.width
    });
  };

  goToNextScreen = coinItem => {
    // return this.props.navigation.navigate("planDetails", { plan: planItem });
  };
  renderItem = ({ item, index }) => (
    <SingleCoinComponent
      name={item.name}
      item={item}
      selected={this.props.select}
    />
  );
  render() {
    const { width, height } = Dimensions.get("window");
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ref={ref => (this.flatList = ref)}
          data={this.props.coins}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          horizontal={true}
          decelerationRate="fast"
          snapToAlignment="start"
          automaticallyAdjustContentInsets={false}
          bounces={false}
          snapToInterval={315}
          getItemLayout={(data, index) => {
            return { length: 315, offset: 315 * index, index };
          }}
          bounces={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

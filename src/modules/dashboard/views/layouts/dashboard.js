import React from "react"
import {StyleSheet, Dimensions, FlatList} from "react-native";
import {formatNumber} from "../../../../utils"
import Shimmer from 'react-native-shimmer'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import {Container, Content, Card, CardItem, Text, View, Title, Body, Left, Right} from "native-base";

export default function Dashboard (props) {

    const [start, updateStart] = React.useState(1);
    React.useEffect(()=>{
        props.getTokens(start);
        // updateStart(1)
    }, [start]);

    // const tokens = Object.keys(props.tokens).map(function(key, index) {
    //    return  (<ListItem>
    //                 <Text>{props.tokens[key].name}</Text>
    //        </ListItem>)
    //   });
    const tokens = ({item, key}) => {
        return <Card>
                <CardItem header>
                    <Text>{item.name}</Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>{item.symbol}</Text>
                    </Left>
                    <Right style={{flexDirection:"column"}}>
                        <Text>
                            Supply:
                        </Text>
                        <Text>
                            {formatNumber(item.total_supply)}
                        </Text>
                    </Right>
                </CardItem>
            </Card>
    }

    const loadingShimmer = () => {
        return (
            <ShimmerPlaceHolder width={Dimensions.get('window').width - 20} style={{alignSelf: 'stretch'}} colorShimmer={['#3E316A', '#322461']} height={40} autoRun={true}>
                <CardItem></CardItem>
            </ShimmerPlaceHolder>
        )
    }

    const scrolled = (event) => {
        let itemHeight = 402;
        let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
        let currentItemIndex = Math.ceil(currentOffset / itemHeight);
    }

    console.log(props, start)
    return (
       <Container>
           <Content padder scrollEventThrottle={300}  onScroll={scrolled}>
                <View style={styles.header}>
                    <Title style={styles.title}>
                        My Tokens
                    </Title>
                </View>
                <FlatList
                    style={{ width: '100%' }}
                    keyExtractor={(item, index) => `list-item-${index}`}
                    data={props.tokens.data}
                    renderItem={tokens}
                    onEndReachedThreshold={0.5}
                    onEndReached={()=>{
                        console.log("called here");
                        updateStart(start+1);
                        props.getTokens(start)
                    }} 
                />
                {/* {tokens} */}
                {props.loading ? loadingShimmer() : null}
           </Content>
       </Container>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#322461"
    },
    header: {
        marginTop: 50,
        marginBottom: 50,
    },
    title: {
        textAlign: "left",
        fontSize: 25
    }
})
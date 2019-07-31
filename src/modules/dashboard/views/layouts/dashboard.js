import React, {Fragment, useEffect, useState} from "react"
import {StyleSheet, Dimensions, FlatList, Alert, Modal, TouchableHighlight} from "react-native";
import {formatNumber} from "../../../../utils"
import Shimmer from 'react-native-shimmer'
import CoinSlider from '../components/CoinSlider'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import {
    Container, 
    Content, 
    List, 
    ListItem, 
    Card, 
    CardItem, 
    Text, 
    View, 
    Title, 
    Subtitle, 
    Body, 
    Left, 
    Right,
    Header,
    Thumbnail,
    Icon
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Dashboard (props) {

    const [start, updateStart] = useState(1);
    const [popularTokens, updatePopularTokens] = useState([])
    const [modalVisible, updateVisibleModal] = useState(false)
    const [currentlyViewed, updateCurrentlyViewed] = useState(null)

    useEffect(()=>{
       props.getTokens(start).then((resp)=>{
           let fetchedTokens = resp.slice(0,5)
           updatePopularTokens(fetchedTokens);
       })
    }, []);

    const tokens = ({item, key}) => {
        return <ListItem avatar onPress={()=>selectedToken(item)}
                    style={{paddingTop: 10, paddingBottom: 10}}
                >
                <Left>
                    <Thumbnail source={{ uri: `https://ui-avatars.com/api/?background=2C7BE5&color=fff&name=${item.name}` }} />
                </Left>
                <Body>
                    <Text>{item.name}</Text>
                    <Text note>{item.symbol}</Text>
                </Body>
                <Right>
                    <Text note>Market Supply</Text>
                    <Text>
                        {formatNumber(item.total_supply)}
                    </Text>
                </Right>
            </ListItem>
    }

    const loadingShimmer = () => {
        return (
            <Fragment>
                {[1,2,3,4,5,6,7].map(item => {
                    return (
                            <ListItem key={item}>
                                <Body>
                                    <ShimmerPlaceHolder autoRun={true} />
                                </Body>
                                <Right>
                                    <ShimmerPlaceHolder autoRun={true} />
                                </Right>
                            </ListItem>
                    )
                })}
            </Fragment>
        )
    }

    const selectedToken = (selected) =>{
                    updateVisibleModal(true)
                    updateCurrentlyViewed(selected)
                }

    return (
       <Container>
           <Content>
                <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                    <Container>
                        {currentlyViewed ? 
                            <Content padder>
                                <Header transparent>
                                    <Left>
                                        <TouchableOpacity onPress={() => {
                                            updateCurrentlyViewed(null) 
                                            updateVisibleModal(false)
                                        }}>
                                            <Icon name="arrow-back"></Icon>
                                        </TouchableOpacity>
                                    </Left>
                                </Header>
                                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
                                    <View>
                                        <Thumbnail large source={{ uri: `https://ui-avatars.com/api/?background=2C7BE5&color=fff&name=${currentlyViewed.name}` }} />
                                    </View>
                                </View>
                                <View>
                                    <View style={{flexDirection: 'column'}}>
                                        <Title>{currentlyViewed.name}</Title>
                                    </View>
                                </View>
                                <View style={{height: 40}}>
                                   
                                </View>
                                <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}>
                                   <Left>
                                     <Text style={{fontWeight: 500}}>Circulating Supply</Text>
                                   </Left>
                                   <Right>
                                        <Text> {formatNumber(currentlyViewed.circulating_supply)}</Text>
                                   </Right>
                                </View>
                                <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}>
                                   <Left>
                                     <Text style={{fontWeight: 500}}>Total Supply</Text>
                                   </Left>
                                   <Right>
                                        <Text> {formatNumber(currentlyViewed.circulating_supply)}</Text>
                                   </Right>
                                </View>
                                <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}>
                                   <Left>
                                     <Text style={{fontWeight: 500}}>Maximum Supply</Text>
                                   </Left>
                                   <Right>
                                        <Text> {formatNumber(currentlyViewed.max_supply)}</Text>
                                   </Right>
                                </View>
                                <View style={{height: 40}}></View>
                                <View>
                                    <Text style={{fontWeight: 500}}>Quotes</Text>
                                    <Text note>Crypto to fiat conversions</Text>
                                </View>
                                {Object.keys(currentlyViewed.quote).map((key, index) => {
                                    return <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}>
                                        <Left>
                                            <Text style={{fontWeight: 500}}>{key}</Text>
                                        </Left>
                                        <Right>
                                                <Text> {formatNumber(currentlyViewed.quote[key].price)}</Text>
                                        </Right>
                                    </View>
                                })}
                            </Content>: null

                        }
                    </Container>
                </Modal>
                <View style={styles.header}>
                    <Title style={styles.title}>
                        My Tokens
                    </Title>
                    <Subtitle style={styles.subtitle}>
                        latest status on token you're tracking
                    </Subtitle>
                </View>
                <View>
                    <View style={styles.list}>
                        <Text>
                            Popular Tokens
                        </Text>
                    </View>
                    { props.loading ? null :  <CoinSlider select={(item) => selectedToken(item)} coins={popularTokens} /> }
                </View>
                <View style={styles.list}>
                    <View style={{paddingBottom: 20}}>
                        <Text>
                            All Tokens
                        </Text>
                    </View>
                    <List>
                        <FlatList
                            style={{ width: '100%' }}
                            keyExtractor={(item, index) => `list-item-${index}`}
                            data={props.tokens.data}
                            renderItem={tokens}
                            onEndReachedThreshold={0.5}
                            // onEndReached={()=>{
                            //     updateStart(start+1);
                            //     props.getTokens(start)
                            // }}
                        />
                        </List>
                        {props.loading ? loadingShimmer() : null}
                </View>
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
        padding: 20,
        marginBottom: 20,
    },
    list:{
        padding: 20
    },
    title: {
        textAlign: "left",
        fontSize: 25
    },
    subtitle: {
        textAlign: "left",
    }
})

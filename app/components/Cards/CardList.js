'use strict'

import React, { Component } from 'react';
import {Dimensions,View,Image,StyleSheet,Text,ListView} from 'react-native';
import { Container, Content, List, ListItem,Thumbnail,Badge } from 'native-base';
export default class CardList extends Component {
    render() {
        
        
        var window = Dimensions.get('window');      
      
        return (
                <View style={{flexDirection: 'column' , alignItems: 'center' , justifyContent: 'center'}}>
                    <View style={{ paddingBottom: 10 , paddingTop: 10 , borderTopWidth: 2, borderTopColor: 'rgba(0,0,0,.15)' , flexDirection: 'row', alignItems: 'center' , justifyContent: 'center', paddingLeft: 20, paddingRight: 20}}>
                        <Image style={{flex: 2, width: 40, height: 40}} source={require('../../img/cards/Masterdcard.png')}/>
                        <View style={{flex: 4}}>
                            <Text>Masterdcard </Text>                            
                            <Text style={{color: 'rgba(0,0,0,.6)', fontSize: 10}}>Tarjeta (2345) </Text>
                        </View>
                        <View style={{flex: 1 , alignItems: 'center' , justifyContent: 'center'}}>
                            <Badge style={{ color: '#FFF' , textAlign: 'center', backgroundColor: 'rgb(32,76,165)', height: 30, width: 30, borderRadius: 30}}>></Badge>
                        </View> 
                    </View>
                    <View style={{ paddingBottom: 10 , paddingTop: 10 , borderTopWidth: 2, borderTopColor: 'rgba(0,0,0,.15)' , flexDirection: 'row', alignItems: 'center' , justifyContent: 'center', paddingLeft: 20, paddingRight: 20}}>
                        <Image style={{flex: 2, width: 40, height: 40}} source={require('../../img/cards/Masterdcard.png')}/>
                        <View style={{flex: 4}}>
                            <Text>Masterdcard </Text>                            
                            <Text style={{color: 'rgba(0,0,0,.6)', fontSize: 10}}>Tarjeta (2345) </Text>
                        </View>
                        <View style={{flex: 1 , alignItems: 'center' , justifyContent: 'center'}}>
                            <Badge style={{ color: '#FFF' , textAlign: 'center', backgroundColor: 'rgb(32,76,165)', height: 30, width: 30, borderRadius: 30}}>></Badge>
                        </View> 
                    </View>

                </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        width : window.width,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        //backgroundColor:'yellow'
    },
    boxContainer:{
        width : window.width,
        flexDirection:'row',
        alignSelf:'stretch',
        justifyContent:'space-around',
        borderTopWidth:2,
        borderColor:'#FFF',
        //backgroundColor:'red'
    },
    textContainer:{
        flexDirection:'column',
        justifyContent:'flex-start',
        flex: 1,
        width: 100,
    },
    title:{
        textAlign:'left',
        //flex:1
    },
    body:{
        fontSize: 11,
        color: '#eee'
    },
    image:{
        resizeMode:'contain',
        width: 60,
        height: 60,
    },
    badge:{
        backgroundColor:'rgb(32,76,165)',
        alignSelf:'center',
        textAlign:'center',
        flex: 1,
    }
});
// <Container>
//                 <Content >
//                     <List dataArray={items}                     
//                         renderRow={(item) =>
//                             <ListItem >
//                                 <Thumbnail style={{resizeMode: 'contain'}} square size={40} source={
//                                     require('../../img/cards/Visa.png')} />
//                                 <Text>{item}</Text>
//                                 <Text note> 4590 </Text>
//                                 <Badge style={{backgroundColor:'rgb(32,76,165)'}}>></Badge>
//                             </ListItem>
//                         }>
//                     </List>
//                 </Content>
//             </Container>
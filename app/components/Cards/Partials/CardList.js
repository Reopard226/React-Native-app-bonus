'use strict'

import React from 'react';
import { StyleSheet, Dimensions, TouchableHighlight, Navigator, Image} from 'react-native';
import { Container, Content, List, ListItem, Text , Badge} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Header   from '../../Partials/Header';
import Button   from '../../Partials/Button';

var window = Dimensions.get('window');

const from_redux = {
    cards:[
        {
            type:'Masterdcard',
            id:'5487',
            address:'other address',
            expDate:'05/19'
        },
        {
            type:'Masterdcard',
            id:'5487',
            address:'other address',
            expDate:'05/19'
        },
        {
            type:'Masterdcard',
            id:'5487',
            address:'other address',
            expDate:'05/19'
        },
        {
            type:'Visa',
            id:'4562',
            address:'Some address',
            expDate:'07/17'
        },
        {
            type:'Visa',
            id:'4852',
            address:'Another address',
            expDate:'12/20'
        },
    ]
}



export default (props)=>{

    const items = from_redux.cards.map((item,index)=>{

        var source = {

            Visa:require('../../../img/cards/Visa.png'),
            Masterdcard:require('../../../img/cards/Masterdcard.png')

        }

        return (
            <ListItem
                button
                key={ index }
                style={{height:90,justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}
                onPress={ ( event ) => {
                        props.navigator.push({
                            name: "Card",
                            card: {
                                type: item.type,
                                id: item.id,
                                date: item.expDate,
                                address: item.address
                            },
                            sceneConfig: Navigator.SceneConfigs.FloatFromRight
                        });
                    }}
            >
                <Image style={styles.img} source={source[item.type]} />
                <Text style={styles.text}> {item.type} </Text>
                <Text style={[styles.text,{top:25, fontWeight: 'bold', fontSize: 12}]} note> Tarjeta ({item.id}) </Text>
                <Badge backgroundColor='rgb(32,76,165)'style={{alignSelf:'center'}}>></Badge>
            </ListItem>
        );
    });

    return (
        <Container style={styles.container}>
            <Content >
                <List >
                    {items}
                </List>
            </Content>
        </Container>
        );

}

let styles = StyleSheet.create({

    container:{
        alignSelf:'stretch',
        height: 80,
    },
    body:{
        fontSize: 11,
        color: '#eee'
    },
    img:{
        resizeMode:'contain',
        alignSelf:'flex-start',
        justifyContent:'center',
        width:40,
        height:40
    },
    text:{
        position: 'absolute',
        left: 80,
        top:5
    }

});
'use strict'

import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import { Container, Content, List, ListItem, Text,Thumbnail,Badge } from 'native-base';
export default class CardList extends Component {
    render() {
        
        var items = ['Visa','Masterdcard','Visa','Visa','Mastercard'];
        var win = Dimensions.get('window');      
      
        return (
            <Container>
                <Content >
                    <List dataArray={items}                    	
                    	renderRow={(item) =>
                            <ListItem >
                            	<Thumbnail style={{resizeMode: 'contain'}} square size={40} source={
                            		require('../../img/cards/Visa.png')} />
                                <Text>{item}</Text>
                                <Text note> 4590 </Text>
                                <Badge style={{backgroundColor:'rgb(32,76,165)'}}>></Badge>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}

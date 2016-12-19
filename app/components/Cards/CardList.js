'use strict'

import React, { Component } from 'react';
import {Dimensions,View,Image,StyleSheet,Text,ListView} from 'react-native';
import { Container, Content, List, ListItem,Thumbnail,Badge } from 'native-base';
export default class CardList extends Component {
    render() {
        
        
        var window = Dimensions.get('window');      
      
        return (
                <View style={styles.container}>
                    <View style={styles.boxContainer}>

                        <Image source={require('../../img/cards/Visa.png')} style={styles.image}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.title} >Visa </Text>                            
                            <Text style={styles.body}>Tarjeta 2345 </Text>
                        </View>    
                        <Badge style={styles.badge}> > </Badge>                         
                    </View>
                    <View style={styles.boxContainer}>

                        <Image source={require('../../img/cards/Masterdcard.png')} style={styles.image}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.title} >Masterdcard </Text>                            
                            <Text style={styles.body}>Tarjeta 2345 </Text>
                        </View>
                        <Badge style={styles.badge}> > </Badge> 
                    </View>
                    <View style={styles.boxContainer}>

                        <Image source={require('../../img/cards/Visa.png')} style={styles.image}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.title} >Visa </Text>                            
                            <Text style={styles.body}>Tarjeta 2345 </Text>
                        </View>
                        <Badge style={styles.badge}> > </Badge> 
                    </View>

                </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{

        alignSelf:'stretch',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:60,
        marginTop:20,
        padding:20
        //backgroundColor:'yellow'
    },
    boxContainer:{

        //width : window.width,
        flexDirection:'row',
        alignSelf:'stretch',
        alignItems:'stretch',
        justifyContent:'space-between',
        borderBottomWidth:2,
        borderColor:'#eee',
        marginTop:10
        //backgroundColor:'red'
    },
    textContainer:{
        flexDirection:'column',
        alignItems:'flex-start'           

    },
    title:{
   
        color:'black'
    },
    body:{
        fontSize: 11,
        color: '#eee'
    },
    image:{
        resizeMode:'contain',
        height:60,
        width:60
    },
    badge:{
        backgroundColor:'rgb(32,76,165)',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'      
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
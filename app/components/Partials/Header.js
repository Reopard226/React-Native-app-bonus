'use strict'

import   React                     from 'react';
import { Dimensions,
         Text,
         StyleSheet,
         View,
         Image
        }                          from 'react-native';
import Icon                        from 'native-base';

import BackIcon                    from '../Partials/BackIcon';        

export default (props)=>{ 
       
        <View style={styles.container}>
            <View style={styles.header}>
                <BackIcon/>
                <Image source={require('../../img/bonus-logoBlanco300.png')}
                       style={styles.image}   
                />
                <Icon name='ios-refresh' style={{color:'white',padding:5}}/>
            </View>
            <Text style={styles.title}>
                {props.titleView}
            </Text>
        </View>
        
}    

let styles = StyleSheet.create({

    container:{
        width:Dimensions.get('window').width,
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
        
    },
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },    
    title:{
        fontSize:25,
        color:'#FFF',
        textAlign:'center',
    },
    image:{
        height:25,
        resizeMode: 'contain',
        margin:10,
    }
});
import React from 'react'
import {StyleSheet,Text,View,Dimensions} from 'react-native';
import LinearGradient  from 'react-native-linear-gradient';

const w = Dimensions.get('window').width;
const BackgroundHeader = ({style}) => {
    return (
        <LinearGradient
            start={{x: 0,y : 0} }
            end={{x:1,y:0}}
            colors={['#00796b','#00796b','#009688',]}
            style={[styles.linearGradient,style]}            
        >            
            <View style={styles.line}/>
            <View style={[styles.line,{top:130,right:-150}]}/>
            <View style={[styles.line,{top:160,right:0}]}/>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    linearGradient: {
        height:(w * 3) / 5,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
    },
    line:{
        position:'absolute',
        width:w,
        height:60,
        top:100,
        right:-300,
        backgroundColor:'rgba(255,255,255,0.1)',
        borderRadius:60,
        transform:[
            {
                rotate:'35deg'
            }
        ]
    } 
});
export default BackgroundHeader
